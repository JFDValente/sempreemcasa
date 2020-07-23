export const SET_ITEM = 'CART/SET_ITEM';
export const CLEAR_CART = 'CART/CLEAR_CART';

function setItem(item = null) {
  return {
    type: SET_ITEM,
    item,
  };
}

function clearCart() {
  return {
    type: CLEAR_CART,
  };
}

export {
  setItem,
  clearCart,
};
