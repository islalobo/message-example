/**
 * Root Reducer
 * @description Root Reducer
 */

import { combineReducers } from 'redux';
import message from './messageReducer';

const appReducer = combineReducers({
  message,
});

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
