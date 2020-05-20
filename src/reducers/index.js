import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import menuReducer from './menuReducer';
import ordersReducer from './ordersReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  orders: ordersReducer
});

export default rootReducer;
