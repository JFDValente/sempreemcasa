import {
  SET_MODAL,
  CLEAR_MODAL,
} from '../actions/modal';

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_MODAL:
    {
      const { modalType, modalProps } = action;
      return { modalType, modalProps };
    }
    case CLEAR_MODAL:
    {
      return {};
    }
    default:
      return state;
  }
}

export default reducer;
