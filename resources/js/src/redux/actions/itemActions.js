
import { itemsConstants } from '../constants';

export const fetchItems = () => dispatch => {

    dispatch({ type:itemsConstants.GET_ITEMS_REQUEST });
    apiGetsService().then( res => {
        console.log(res)
        dispatch({ type:itemsConstants.GET_ITEMS_SUCCESS , payload: res?.data });
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
 