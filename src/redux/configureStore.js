import { persistStore, persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import FilesystemStorage from 'redux-persist-filesystem-storage';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './rootReducer';

const getMiddleware = () => {
  const middleware = [reduxThunk];
  return applyMiddleware(...middleware);
};

const appReducer = (state, action) => {
  let newState = state;
  if (action.type === 'AUTH/LOGOUT_SUCCESS') {
    newState = undefined;
  }
  return rootReducer(newState, action);
};

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: FilesystemStorage,
  },
  appReducer,
);

export default () => {
  const store = createStore(persistedReducer, getMiddleware());
  const persistor = persistStore(store);
  return { store, persistor };
};
