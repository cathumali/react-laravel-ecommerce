
export const setItemInLocalStorage = ( item ) => {
    let prevItems = getItemsFromLocalStorage("cart_items") || [];
    let mergeItems = [ ...prevItems, item ]
    localStorage.setItem('cart_items', JSON.stringify(mergeItems) );
}
 
export const removeItemFomLocalStorage = ( items ) => {
    localStorage.setItem('cart_items', JSON.stringify(items) );
}

export const getItemsFromLocalStorage = ( name )=> {
    return JSON.parse( localStorage.getItem( name ) ) || []
}
