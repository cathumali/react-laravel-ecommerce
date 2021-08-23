
import { cartConstants } from '../constants';

export const addItemToCart = ( item ) => dispatch => {
    dispatch({ type:cartConstants.ADD_TO_CART , payload: item });
}

export const removeItemToCart = (item) => dispatch => {
    dispatch({ type:cartConstants.REMOVE_FROM_CART , payload: item })
}
