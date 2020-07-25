import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';

import modal from '../reducers/modal';
import cart from '../reducers/cart';

const reducer = combineReducers({
  modal,
  cart,
});

const makeConfiguredStore = (reducer) =>
  createStore(reducer, undefined);

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    return makeConfiguredStore(reducer);
  }
  const storage = require('redux-persist/lib/storage');
  const persistConfig = {
    key: 'root',
    storage: storage.default,
    whitelist: ["cart"],
  };

  const persistedReducer = persistReducer(persistConfig, reducer);
  const store = makeConfiguredStore(persistedReducer);

  return store;
};

const store = makeStore();
const persistor = persistStore(store);

const wrapper = createWrapper(makeStore);

export {
  persistor,
  wrapper,
}
