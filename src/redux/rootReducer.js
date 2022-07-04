import { combineReducers } from 'redux';

import AuthReducer from '../auth/redux/reducer';
import HomeReducer from '../home/redux/reducer';
import ProfileReducer from '../profile/redux/reducer';

const rootReducer = combineReducers({
  Auth: AuthReducer,
  Home: HomeReducer,
  Profile: ProfileReducer,
});

export default rootReducer;
