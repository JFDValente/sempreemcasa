import Modal from '../../atoms/Modal';
import CartProductList from '../../molecules/CartProductList';

import Style from './Style';

const CartModal = (props) => {
  const { closeModal } = props;
  return (
    <Modal
      backgroundClick={closeModal}
    >
      <Style.Container>
        <Style.Header>
          <Style.TitleContainer>
            <Style.CartIcon src="/shopping-cart-icon.png"/>
            <Style.Title>
              {'Itens selecionados'}
            </Style.Title>
          </Style.TitleContainer>
          <Style.CloseButton>
            {'X'}
          </Style.CloseButton>
        </Style.Header>
        <Style.Content>
          <CartProductList />
        </Style.Content>
        <Style.Footer>

        </Style.Footer>
      </Style.Container>
    </Modal>  
  );
}

export default CartModal;
