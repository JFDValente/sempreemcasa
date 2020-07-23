import { useState, useEffect } from 'react';
import {
  number, string,
} from 'prop-types';
import { formatCurrency } from '../../utils/currency';
import { formatDiscount } from '../../utils/discount';

import QuantityInput from '../../quarks/QuantityInput';

import Style from './Style';

/**
 * This Atom renders all the information for a given product, in the catalog
 */
const CartProductItem = (props) => {
  const {
    uuid,
    image,
    name,
    pack,
    price,
    unitPrice,
    discount,
    quantity,
  } = props;

  const [subTotal, setSubTotal] = useState(0);
  const roundedDiscount = formatDiscount(discount);

  useEffect(() => {
    setSubTotal(quantity*price);
  }, [quantity]);

  const doIncrement = (uuid) => {}

  const doDecrement = (uuid) => {}

  return (
    <Style.Container>
      <Style.ItemData>
        <Style.ImageContainer>
          {!!(roundedDiscount > 15) && (
            <Style.DiscountBanner>
              <Style.DiscountValueBanner>
                {roundedDiscount}
              </Style.DiscountValueBanner>
              <Style.TextDiscountBanner>
                {'%OFF'}
              </Style.TextDiscountBanner>
              <Style.CutBanner/>
            </Style.DiscountBanner>
          )}
          <Style.Image
            src={image}
            alt={'product-image'}
          />
        </Style.ImageContainer>
        <Style.InfoContainer>
          <Style.Description>
            <Style.Title>
              {name}
            </Style.Title>
            <Style.Subtitle>
              <b>{`PACK: `}</b>{`${pack} Unidades | `}
              <b>{`UNID: `}</b>{`R$ ${unitPrice}`}
            </Style.Subtitle>
          </Style.Description>
          <Style.ValuesContainer>
            <QuantityInput
              value={quantity}
              doIncrement={doIncrement}
              doDecrement={doDecrement}
            />
            <Style.Subtotal>
              {formatCurrency(subTotal)}
            </Style.Subtotal>
          </Style.ValuesContainer>
        </Style.InfoContainer>
      </Style.ItemData>
      <Style.Action>
        <Style.DeleteButton
          src="/trash-icon-gray.png"
          alt={'image-chat'}
        />
      </Style.Action>
    </Style.Container>
  );
}

CartProductItem.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  pack: number.isRequired,
  price: number.isRequired,
  unitPrice: number.isRequired,
  discount: number.isRequired,
  quantity: number.isRequired,
};

export default CartProductItem;
