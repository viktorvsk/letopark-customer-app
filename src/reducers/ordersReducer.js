const initialState = {
    orders: []
};
export default function cartReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: action.orders
      };
    case 'GET_ORDERS_SUCCESS':
      return {
        ...state,
        orders: action.orders
      };
    default:
      return state;
  }
}
