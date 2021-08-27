import { itemsConstants } from '../constants';

const initialState = {
    items: { 
        loading: false, 
        data: null 
    },
    item_details : { 
        loading: false, 
        data: null 
    },
};
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemsConstants.GET_ITEMS_REQUEST:
            return { 
                ...state,                
                items: { 
                    loading: true, 
                    data: null 
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
                    data : null
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