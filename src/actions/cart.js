export const SET_ITEM = 'CART/SET_ITEM';
export const DELETE_ITEM = 'CART/DELETE_ITEM';
export const CLEAR_CART = 'CART/CLEAR_CART';

function setItem(item = null) {
  return {
    type: SET_ITEM,
    item,
  };
}

function deleteItem(uuid = null) {
  return {
    type: DELETE_ITEM,
    uuid,
  };
}

function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export {
  setItem,
  deleteItem,
  clearCart,
};
