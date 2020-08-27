import { combineReducers } from 'redux';
import AuthReducer from './reducers/authReducer';
import registerReducer from './reducers/registerReducer';
const rootReducers = combineReducers({
  auth: AuthReducer,
  register: registerReducer,
});

export default rootReducers;
