import { combineReducers } from 'redux';

import cartReducer from './cartReducer';
import menuReducer from './menuReducer';
import ordersReducer from './ordersReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
  orders: ordersReducer,
  profile: profileReducer
});

export default rootReducer;
