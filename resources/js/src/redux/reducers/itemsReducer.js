import { itemsConstants } from '../constants';

const initialState = {
    data : []
};
export const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case itemsConstants.GET_ITEMS_REQUEST:
            return { 
                ...state,
                loading: true,
                data: []
            };
        case itemsConstants.GET_ITEMS_SUCCESS:
            return { 
                ...state,
                loading: false,
                data: [ ...state.data, action.payload] 
            };
        default:
            return state;
    }
}  