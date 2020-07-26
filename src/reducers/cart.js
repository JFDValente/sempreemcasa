import {
  SET_ITEM,
  UPDATE_QUANTITY,
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
    case UPDATE_QUANTITY:
    {
      const { uuid, quantity } = action;
      const index = state.map(i => i.uuid).indexOf(uuid);
      const item = state[index];
      item.quantity = quantity;
      return [
        ...state.slice(0,index),
        item,
        ...state.slice(index+1),
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
