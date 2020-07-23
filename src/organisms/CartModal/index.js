import { useSelector } from 'react-redux';

import { formatCurrency } from '../../utils/currency';

import Modal from '../../atoms/Modal';
import CartProductList from '../../molecules/CartProductList';

import Style from './Style';

const CartModal = (props) => {
  const { closeModal } = props;
  const cart = useSelector(state => state.cart);
  const items = Object.keys(cart).map(key => cart[key]);

  const calcTotal = (items) => {
    const sum = items.reduce((prev, cur) => {
      const totalItem = cur.quantity * cur.price;
      return prev + totalItem;
    }, 0);
    return sum;
  }

  const calcTotalDiscount = (items) => {
    const total = calcTotal(items);
    const originalTotal = items.reduce((prev, cur) => {
      const totalItem = cur.quantity * cur.originalPrice;
      console.log(cur);
      return prev + totalItem;
    }, 0);
    return originalTotal - total;
  }

  const totalDiscount = calcTotalDiscount(items);

  const totalValue = calcTotal(items);

  return (
    <Modal
      backgroundClick={closeModal}
    >
      <Style.Container>
        <Style.UpPart>
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
        </Style.UpPart>
        <Style.Footer>
          <Style.TotalContainer>
            <Style.TotalLabel>
              {'Total'}
            </Style.TotalLabel>
            <Style.TotalValue>
              {formatCurrency(totalValue)}
            </Style.TotalValue>
          </Style.TotalContainer>
          <Style.TotalDiscount>
            {`você economizará ${formatCurrency(totalDiscount)}`}
          </Style.TotalDiscount>
          <Style.ConfirmButton>
            {'FINALIZAR COMPRA'}
          </Style.ConfirmButton>
        </Style.Footer>
      </Style.Container>
    </Modal>  
  );
}

export default CartModal;
