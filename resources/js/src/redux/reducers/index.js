import { combineReducers } from "redux";
import { cartReducer } from './cartReducer';
import { itemsReducer } from './itemsReducer';

export default combineReducers({ 
  cart_data     : cartReducer, 
  items         : itemsReducer,
});