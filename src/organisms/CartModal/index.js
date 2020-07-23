import Modal from '../../atoms/Modal';

const CartModal = (props) => {
  const { closeModal } = props;
  return (
    <Modal
      backgroundClick={closeModal}
    >
      <div css={'height: 100vh;'}>
        Teste
      </div>
    </Modal>  
  );
}

export default CartModal;
