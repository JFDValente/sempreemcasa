import {
  SET_ITEM,
  DELETE_ITEM,
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
    case DELETE_ITEM:
    {
      const { uuid } = action;
      const index = state.map(i => i.uuid).indexOf(uuid);
      return [
        ...state.slice(0,index),
        ...state.slice(index+1),
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
