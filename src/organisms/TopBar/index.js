import { useSelector } from 'react-redux';
import Style from './Style';


const TopBar = (props) => {
  const cart = useSelector(state => state.cart);
  const quantityItems = cart.length;
  const { openModal } = props;
  return (
    <Style.Container>
      <Style.CartIconContainer>
        <Style.CartIcon
          src="/shopping-cart-icon-white.png"
          alt={'image-chat'}
          onClick={openModal}
        />
        <Style.Quantity>
          {quantityItems}
        </Style.Quantity>
      </Style.CartIconContainer>
    </Style.Container>
  );
}

export default TopBar;