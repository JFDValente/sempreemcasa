import { createStore, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';

import modal from '../reducers/modal';

const reducer = combineReducers({
  modal,
});

const makeStore = context => createStore(reducer);

export const wrapper = createWrapper(makeStore, {debug: true});
