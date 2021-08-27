
import { itemsConstants } from '../constants';

export const fetchItems = () => dispatch => {

    dispatch({ type:itemsConstants.GET_ITEMS_REQUEST });
    apiGetItemsService().then( res => {
        dispatch({ type:itemsConstants.GET_ITEMS_SUCCESS , payload: res?.data });
    });
}


export const fetchItemDetails = (id) => dispatch => {
    dispatch({ type:itemsConstants.GET_ITEM_DETAILS_REQUEST });
    apiGetItemDetailsService(id).then( res => {
        dispatch({ type:itemsConstants.GET_ITEM_DETAILS_SUCCESS , payload: res?.data });
    });
}

const apiGetItemsService =  () => {
    const requestHeaders= {
       method : 'GET',
       headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
       }
    } 
    return fetch(`https://ecommerce-app.test/api/items`, requestHeaders).then(response => response.json());
 }

 const apiGetItemDetailsService =  (id) => {
    const requestHeaders= {
       method : 'GET',
       headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
       }
    } 
    return fetch(`https://ecommerce-app.test/api/items/${id}`, requestHeaders).then(response => response.json());
 }
 