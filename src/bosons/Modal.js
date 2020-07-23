import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal, clearModal } from '../actions/modal';

const useModalAction = (type, open) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (open) {
      dispatch(setModal(type));
      return;
    }
    dispatch(clearModal());
  }, [open]);
};

const useModalState = () => {
  const modal = useSelector(state => state.modal);
  return { modal };
};

export {
  useModalAction,
  useModalState,
};
