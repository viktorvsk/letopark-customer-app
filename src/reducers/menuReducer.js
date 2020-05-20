const initialState = {
    stores: []
};

export default function menuReducer(state = initialState, action = {}) {
    switch (action.type) {
    case 'GET_STORES_SUCCESS':
        return {
            ...state,
            stores: action.stores
        };
    default:
        return state;
    }
}
