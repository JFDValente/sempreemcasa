import { arrayOf, shape } from 'prop-types';

import CartProductItem from '../../atoms/CartProductItem';
import Style from './Style';

const CartProductList = (props) => {
  const { items } = props;

  return (
    <Style.Container>
      {
        items.map((item) => (
          <CartProductItem
            key={item.uuid}
            image={item.image}
            name={item.name}
            pack={item.pack}
            price={item.price}
            unitPrice={item.unitPrice}
            quantity={item.quantity}
          />
        ))
      }
    </Style.Container>
  );
}

CartProductList.propTypes = {
  products: arrayOf(shape()).isRequired,
};

export default CartProductList;
