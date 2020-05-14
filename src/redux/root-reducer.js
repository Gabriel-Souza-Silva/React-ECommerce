import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';
import cartReducer from './card/card.reducer'

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});