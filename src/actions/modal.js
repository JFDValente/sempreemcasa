export const SET_MODAL = 'MODAL/SET_MODAL';
export const CLEAR_MODAL = 'MODAL/CLEAR_MODAL';

function setModal(modalType = null, modalProps = {}) {
  return {
    type: SET_MODAL,
    modalType,
    modalProps,
  };
}

function clearModal() {
  return {
    type: CLEAR_MODAL,
  };
}

export {
  setModal,
  clearModal,
};
