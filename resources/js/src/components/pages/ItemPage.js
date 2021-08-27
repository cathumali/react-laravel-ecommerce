import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addToBasket, removeItemFromCart, fetchItemDetails} from '../../redux/actions';
// import { toast } from 'react-toastify';
// import { Col, Card } from 'react-bootstrap';
import { notify } from '../../utils';
import placeholder from '../../images/item-placeholder.png';

const isAddedToCart = ( item, cart_items ) => {
    let added = [];
    if( cart_items?.length ) {
        added = cart_items?.filter(cart => cart.id === item?.id);        
    }
    return Boolean(added?.length)
}

const Item = (props) => {
    const [ item_details , setItemDetails ] = useState(null)

    useEffect( () => {
        console.log('component did mount')
        if( !item_details ) {
            const { id } = props.match.params || {};
            props.fetchItemDetails(id);
        }
    }, []);

    useEffect( () => {
        if( !item_details ) {
            const { data } = props.item_details || {};
            if( data ) {
                setItemDetails( data )
            }
        }
    });

    const { data } = props.cart || {};
    const added_to_cart = isAddedToCart(item_details, data);

    const addToBasket = () => {
        notify();
        props.addToBasket(item_details)
    }

    return(<>
        <div>
            {/* Product section*/}
            <section className="py-5">
                <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src={ item_details?.image || placeholder } alt="..." /></div>
                    <div className="col-md-6">
                    {/* <div className="small mb-1">SKU: BST-498</div> */}
                    <h1 className="display-5 fw-bolder">{ item_details?.name }</h1>
                    <div className="fs-5 mb-5">
                        {/* <span className="text-decoration-line-through">$45.00</span> */}
                        <span>${item_details?.price}</span>
                    </div>
                    <p className="lead">{ item_details?.description }</p>
                    <div className="d-flex">
                        <>             
                            { added_to_cart ? 
                                <button 
                                    className="button button-small black-button" 
                                    type="button"
                                    onClick={()=>props.removeItemFromCart(item_details?.id)}
                                >Remove from Cart
                                </button>
                                : 
                                <button 
                                    className="button button-small black-button" 
                                    type="button"
                                    onClick={addToBasket}
                                >Add To Basket
                                </button>
                            }
                        </>
                    </div>
                    </div>
                </div>
                </div>
            </section>
    
            {/* <RelatedItem /> */}
        </div>
    </>)
}
const mapStateToProps = ( state ) => ({
    cart : state.cart_data,
    item_details: state.items.item_details
});
const mapDispatchToProps = (dispatch) => ({
    addToBasket  : (item) => dispatch( addToBasket(item) ),
    removeItemFromCart : (item_id) => dispatch( removeItemFromCart(item_id) ),
    fetchItemDetails : (item_id) => dispatch( fetchItemDetails(item_id) ),
});
export default connect( mapStateToProps, mapDispatchToProps )(Item)