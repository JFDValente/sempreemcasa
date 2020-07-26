export const SET_ITEM = 'CART/SET_ITEM';
export const UPDATE_QUANTITY = 'CART/UPDATE_QUANTITY';
export const DELETE_ITEM = 'CART/DELETE_ITEM';
export const CLEAR_CART = 'CART/CLEAR_CART';

function setItem(item = null) {
  return {
    type: SET_ITEM,
    item,
  };
}

function updateQuantity(uuid = null, quantity = 0) {
  return {
    type: UPDATE_QUANTITY,
    uuid,
    quantity,
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
  updateQuantity,
  deleteItem,
  clearCart,
};
