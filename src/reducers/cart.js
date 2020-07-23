import {
  SET_ITEM,
  CLEAR_CART,
} from '../actions/cart';

function reducer(state = {}, action) {
  switch (action.type) {
    case SET_ITEM:
    {
      const { item } = action;
      const itemFormatted = {
        [item.uuid]: {
          uuid: item.uuid,
          image: item.image,
          name: item.name,
          pack: item.pack,
          price: item.price,
          unitPrice: item.unitPrice,
          discount: item.discount,
          quantity: item.quantity,
        },
      };
      return {
        ...state,
        ...itemFormatted,
      };
    }
    case CLEAR_CART:
    {
      return null;
    }
    default:
      return state;
  }
}

export default reducer;
