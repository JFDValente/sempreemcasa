import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createWrapper } from 'next-redux-wrapper';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

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

  const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
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
