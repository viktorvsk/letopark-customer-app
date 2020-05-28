import API from './services/API';

function saveCartToLocalStorage(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function loadStores() {
    return dispatch => API.getStores().then(payload => dispatch({type: 'GET_STORES_SUCCESS', stores: payload.data}));
}

export function loadOrders() {
    return dispatch => API.getOrders().then(payload => dispatch({type: 'GET_ORDERS_SUCCESS', orders: payload.data}));
}

export function cancelOrder (order) {
    return dispatch => {
        API.cancelOrder(order.code).then(payload => {
            dispatch({type: 'GET_ORDERS_SUCCESS', orders: payload.data});
        });
    };
}
// Cart
export function addProduct(product) {
    return (dispatch, getState) => {
        dispatch({type: 'CART_ADD_PRODUCT', product });
        saveCartToLocalStorage(getState().cart);
    };
}

export function removeProduct(product) {
    return (dispatch, getState) => {
        dispatch({type: 'CART_REMOVE_PRODUCT', product });
        saveCartToLocalStorage(getState().cart);
    };
}

export function cartComment(comment) {
    return (dispatch, getState) => {
        dispatch({type: 'CART_COMMENT', comment});
        saveCartToLocalStorage(getState().cart);
    };
}

export function resetCart() {
    return (dispatch, getState) => {
        dispatch({type: 'RESET_CART'});
        saveCartToLocalStorage(getState().cart);
    };
}

export function submitOrder(history) { // Fng JS bs
    return (dispatch, getState) => {
        API.submitOrder(getState().cart).then(payload => {
            dispatch({type: 'CART_SUBMIT_ORDER'});
            dispatch({type: 'ADD_ORDER', orders: payload.data});
            saveCartToLocalStorage(getState().cart);
            history.push("/orders"); // Fng JS bs
        });
    };
}

// /Cart

export function searchMenu(searchQuery) {
    return dispatch => {
        dispatch({type: 'SEARCH_MENU', searchQuery});
    };
}

export function loadCart() {
    const cart = localStorage.getItem('cart') && JSON.parse(localStorage.getItem('cart'));
    console.log(cart);
    return dispatch => dispatch({type: 'LOAD_CART', cart});
}