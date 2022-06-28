import { combineReducers } from 'redux';

import AuthReducer from '../auth/redux/reducer';
import HomeReducer from '../home/redux/reducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Home: HomeReducer,
});

export default rootReducer;
