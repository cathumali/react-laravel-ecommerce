import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Col, Card } from 'react-bootstrap';
import { addToBasket, removeItemFromCart } from '../../redux/actions';
import { toast } from 'react-toastify';

const isAddedToCart = ( item, cart_items ) => {
    let added = [];
    if( cart_items?.length ) {
        added = cart_items?.filter(cart => cart.id === item.id);        
    }
    return Boolean(added?.length)
}

const ShopItemsCard = ( props ) => {
    const { data } = props.cart || {};
    const added_to_cart = isAddedToCart(props?.item, data);

    const style = {
        backgroundImage:`url(${props?.item?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "18rem",
    } 

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
        props.addToBasket(props.item)
    }

    return (<React.Fragment >
        <Col xs={12} sm={6} xl={3}>
          <Card className="mb-4 p-2" >
            <div className="product-display" >
              <div className="product-display-img" style={style}>
              </div>
            </div>
            <Card.Body>
                <Card.Title>{ props?.item?.name }</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{ props?.item?.description }</Card.Subtitle>
                <Card.Text>
                    ${ props?.item?.price }
                </Card.Text>
                { added_to_cart ? 
                    <button 
                        className="button button-small black-button" 
                        type="button"
                        onClick={()=>props.removeItemFromCart(props.item?.id)}
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
            </Card.Body>
          </Card>
        </Col>
      </React.Fragment>)
}

const mapStateToProps = ( state ) => ({
    cart : state.cart_data,
});
const mapDispatchToProps = (dispatch) => ({
    addToBasket  : (item) => dispatch( addToBasket(item) ),
    removeItemFromCart : (item_id) => dispatch( removeItemFromCart(item_id) ),
});
export default connect( mapStateToProps, mapDispatchToProps )(ShopItemsCard)