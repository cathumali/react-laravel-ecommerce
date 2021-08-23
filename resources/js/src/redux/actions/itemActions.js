
import { itemsConstants } from '../constants';

export const fetchItems = ( item ) => dispatch => {
    dispatch({ type:itemsConstants.GET_ITEMS_SUCCESS , payload: item });
}
 