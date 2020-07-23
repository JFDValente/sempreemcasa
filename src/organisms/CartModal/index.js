import Modal from '../../atoms/Modal';
import CartProductList from '../../molecules/CartProductList';

import Style from './Style';

const item = {
  uuid: 76544567895,
  image: 'https://cdn.shopify.com/s/files/1/0010/3150/3987/products/Refrigerante_Pepsi_350_ml_Lata_2x_e8d4f59e-656f-4849-bd0a-b428ad85dd97.png?v=1565713661',
  name: 'Cerveja Brahma 269 ml Lata',
  pack: 15,
  price: 25.35,
  unitPrice: 1.69,
  discount: 26,
  quantity: 1,
};

const list = [];
list.push(item);

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
          <Style.CloseButton onClick={closeModal}>
            {'X'}
          </Style.CloseButton>
        </Style.Header>
        <Style.Content>
          <CartProductList items={list}/>
        </Style.Content>
        <Style.Footer>

        </Style.Footer>
      </Style.Container>
    </Modal>  
  );
}

export default CartModal;
