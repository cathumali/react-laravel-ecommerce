import { itemsConstants } from '../constants';

const initialState = {
    loading: false,
    items : {},
    item_details : {},
};
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemsConstants.GET_ITEMS_REQUEST:
            return { 
                ...state,                
                items: { 
                    ...state.data, 
                    loading: true, 
                    data: {} 
                }
            };
        case itemsConstants.GET_ITEMS_SUCCESS:
            return { 
                ...state,                
                items: { 
                    ...state.data, 
                    loading: false,
                    data : action.payload
                }
            };
        case itemsConstants.GET_ITEM_DETAILS_REQUEST:
            return { 
                ...state,                
                item_details: { 
                    ...state.data, 
                    loading: true,
                    data : action.payload
                }
            };
        case itemsConstants.GET_ITEM_DETAILS_SUCCESS:
            return { 
                ...state,                
                item_details: { 
                    ...state.data, 
                    loading: false,
                    data : action.payload
                }
            };
        default:
            return state;
    }
}  