import { combineReducers } from 'redux';

import AuthReducer from '../auth/redux/reducers';

const rootReducer = combineReducers({
  Auth: AuthReducer,
});

export default rootReducer;
