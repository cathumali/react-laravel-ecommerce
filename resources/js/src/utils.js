import { toast } from 'react-toastify';

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

export const notify = () => {
    const svg = <>
        <svg width={25}className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> Item has been added to your shopping Cart!
    </>
    toast.success(svg, {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
};