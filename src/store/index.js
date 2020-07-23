import { createStore, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import modal from '../reducers/modal';
import cart from '../reducers/cart';

const reducer = combineReducers({
  modal,
  cart,
});

const makeStore = context => createStore(reducer);

export const wrapper = createWrapper(makeStore);
