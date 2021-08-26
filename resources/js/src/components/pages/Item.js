import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { addToBasket, removeItemFromCart } from '../../redux/actions';
import { toast } from 'react-toastify';
import { Col, Card } from 'react-bootstrap';
// import RelatedItem from './RelatedItem'; 

const isAddedToCart = ( item, cart_items ) => {
    let added = [];
    if( cart_items?.length ) {
        added = cart_items?.filter(cart => cart.id === item.id);        
    }
    return Boolean(added?.length)
}

const Item = (props) => {
    const item_details = props.location?.item_details;

    const { data } = props.cart || {};
    const added_to_cart = isAddedToCart(item_details, data);

    const notify = () => {
        const svg = <>
            <svg width={25}className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg> Item has been added to your shopping Cart!
        </>
        toast.success(svg, {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

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
                        <img className="card-img-top mb-5 mb-md-0" src={ item_details?.image } alt="..." /></div>
                    <div className="col-md-6">
                    {/* <div className="small mb-1">SKU: BST-498</div> */}
                    <h1 className="display-5 fw-bolder">{ item_details?.name }</h1>
                    <div className="fs-5 mb-5">
                        <span className="text-decoration-line-through">$45.00</span>
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
});
const mapDispatchToProps = (dispatch) => ({
    addToBasket  : (item) => dispatch( addToBasket(item) ),
    removeItemFromCart : (item_id) => dispatch( removeItemFromCart(item_id) ),
});
export default connect( mapStateToProps, mapDispatchToProps )(Item)