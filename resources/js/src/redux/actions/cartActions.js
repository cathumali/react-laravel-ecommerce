
import { cartConstants } from '../constants';

export const addToBasket = (item) => dispatch => {
    dispatch({ type:cartConstants.ADD_ITEM_TO_CART, payload: item });
}

export const removeItemFromCart = (item_id) => dispatch => {
    dispatch({ type:cartConstants.REMOVE_ITEM_FROM_CART, payload: item_id });
}