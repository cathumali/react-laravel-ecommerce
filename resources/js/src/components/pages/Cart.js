import React from 'react';
import { connect } from 'react-redux';
import { addToBasket, removeItemFromCart, deleteCartItems } from '../../redux/actions';
import { Link } from 'react-router-dom';

const Cart = ( props ) => {
  const { data } = props.cart || {}; 

  return <div className="container padding-bottom-3x mb-1">
    {/* Alert*/}
    <div className="alert alert-info alert-dismissible fade show text-center" style={{"margin-bottom":"30px"}}>
      <span className="alert-close" data-dismiss="alert" /> 
      &nbsp;&nbsp;Your shopping cart.
    </div>
    {/* Shopping Cart*/}
    <div className="table-responsive shopping-cart">
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th className="text-center">Quantity</th>
            <th className="text-center">Subtotal</th>
            <th className="text-center">
              <a className="btn btn-sm btn-outline-danger" href="#" onClick={props.deleteCartItems}>Clear Cart</a>
            </th>
          </tr>
        </thead>
        <tbody>

          { !Boolean(data?.length) 
          ? <tr> --- You have 0 item in your cart --- </tr>
          : data.map( (item,key) => {
              return (
                <tr key={key}>
                  <td>
                    <div className="product-item">
                      <a className="product-thumb" href="#">
                        <img src={item?.image} alt="Product" />
                      </a>
                      <div className="product-info">
                        <h4 className="product-title">
                          <a href="#">{item?.name}</a>
                          </h4><span><em>Size:</em> 10.5</span><span><em>Color:</em> Dark Blue</span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <div className="count-input">
                      <input className="form-control text-center" defaultValue={1} />
                    </div>
                  </td>
                  <td className="text-center text-lg text-medium">${item?.price}</td>
                  <td className="text-center">
                    <a className="remove-from-cart" 
                        href="#" 
                        data-toggle="tooltip" 
                        title="Remove item"
                        data-original-title="Remove item"
                        onClick={()=>props.removeItemFromCart(item?.id)}
                    >
                      <svg width={20} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </a>
                  </td>
                </tr> )
            })}

        </tbody>
      </table>
    </div>
    <div className="shopping-cart-footer">
      <div className="column"> 
      </div>
      <div className="column text-lg">Subtotal: <span className="text-medium">$289.68</span></div>
    </div>
    <div className="shopping-cart-footer">
      <div className="column">
        <Link className="btn btn-outline-secondary" to="/"><i className="icon-arrow-left" />&nbsp;Back to Shopping</Link>
      </div>
      <div className="column">
        <Link className="btn btn-success" to="/checkout">Checkout</Link></div>
    </div>
  </div>
}

const mapStateToProps = ( state ) => ({
  cart : state.cart_data,
});
const mapDispatchToProps = (dispatch) => ({
  addToBasket  : (item) => dispatch( addToBasket(item) ),
  removeItemFromCart : (item_id) => dispatch( removeItemFromCart(item_id) ),
  deleteCartItems : () => dispatch( deleteCartItems() ),
});
export default connect( mapStateToProps, mapDispatchToProps )(Cart)