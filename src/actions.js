import API from './services/API';

export function loadStores() {
    return dispatch => API.getStores().then(payload => dispatch({type: 'GET_STORES_SUCCESS', stores: payload.data}));
}

export function loadOrders() {
    return dispatch => API.getOrders().then(payload => dispatch({type: 'GET_ORDERS_SUCCESS', orders: payload.data}));
}

export function submitOrder(history) { // Fng JS bs
    return (dispatch, getState) => {
        const {cart} = getState();

        API.submitOrder(cart).then(payload => {
            dispatch({type: 'CART_SUBMIT_ORDER'});
            dispatch({type: 'ADD_ORDER', orders: payload.data});
            history.push("/orders"); // Fng JS bs
        });
    };
}
