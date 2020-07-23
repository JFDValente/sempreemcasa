import { useSelector } from 'react-redux';

import Modal from '../../atoms/Modal';
import CartProductList from '../../molecules/CartProductList';

import Style from './Style';

const CartModal = (props) => {
  const { closeModal } = props;
  const cart = useSelector(state => state.cart);
  const items = Object.keys(cart).map(key => cart[key]);

  console.log(items);
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
          <Style.CloseButton onClick={closeModal}>
            {'X'}
          </Style.CloseButton>
        </Style.Header>
        <Style.Content>
          <CartProductList items={items}/>
        </Style.Content>
        <Style.Footer>

        </Style.Footer>
      </Style.Container>
    </Modal>  
  );
}

export default CartModal;
