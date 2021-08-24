import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Col, Card } from 'react-bootstrap';
import { addToBasket, removeItemFromCart } from '../../redux/actions';

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
    return (<React.Fragment >
        <Col xs={12} sm={6} md={4} lg={3}>
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
                        onClick={()=>props.addToBasket(props.item)}
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