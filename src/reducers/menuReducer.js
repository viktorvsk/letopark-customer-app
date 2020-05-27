const initialState = {
    stores: [],
    searchQuery: ''
};

export default function menuReducer(state = initialState, action = {}) {
    switch (action.type) {
    case 'GET_STORES_SUCCESS':
        return {
            ...state,
            stores: action.stores
        };
    case 'SEARCH_MENU':
        return {
            ...state,
            searchQuery: action.searchQuery
        };
    default:
        return state;
    }
}
