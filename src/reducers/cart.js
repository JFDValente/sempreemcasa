import {
  SET_ITEM,
  CLEAR_CART,
} from '../actions/cart';

function reducer(state = [], action) {
  switch (action.type) {
    case SET_ITEM:
    {
      const { item } = action;
      return [
        ...state,
        item,
      ];
    }
    case CLEAR_CART:
    {
      return [];
    }
    default:
      return state;
  }
}

export default reducer;
