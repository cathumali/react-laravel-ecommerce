import { cartConstants } from '../constants';
import { setItemInLocalStorage, removeItemFomLocalStorage } from '../../utils';

const initialState = {
    data : []
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartConstants.ADD_ITEM_TO_CART:
            setItemInLocalStorage( action.payload )
            return { 
                ...state,
                data: [ ...state.data, action.payload] 
            };
        case cartConstants.REMOVE_ITEM_FROM_CART:
            const filered = state.data.filter( item=> item.id !== action.payload );
            removeItemFomLocalStorage( filered )
            return {
                ...state,
                data: filered
            }; 
        case cartConstants.DELETE_CART_ITEMS:
            return { 
                ...state,
                data: [] 
            };
        default:
            return state;
    }
}  