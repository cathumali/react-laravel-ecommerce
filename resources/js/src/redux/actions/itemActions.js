
import { itemsConstants } from '../constants';

export const fetchItems = ( item ) => dispatch => {

    dispatch({ type:itemsConstants.GET_ITEMS_REQUEST });
    apiGetsService().then( res => {
        console.log(res)
        dispatch({ type:itemsConstants.GET_ITEMS_SUCCESS , payload: item });
    });
}
 


const apiGetsService =  () => {
    const requestHeaders= {
       method : 'GET',
       headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
       }
    } 
    return fetch(`https://ecommerce-app.test/api/items`, requestHeaders).then(response => response.json());
 }
 