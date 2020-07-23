import Style from './Style';

const TopBar = (props) => {
  const { openModal } = props;
  return (
    <Style.Container>
      <Style.ShoppingCartIcon
        src="/shopping-cart-icon-white.png"
        alt={'image-chat'}
        onClick={openModal}
      />
    </Style.Container>
  );
}

export default TopBar;