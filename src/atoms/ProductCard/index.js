import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  arrayOf, bool, number, shape, string,
} from 'prop-types';

import { setItem } from '../../actions/cart';

import { formatCurrency, roundCurrency } from '../../utils/currency';
import { formatDiscount } from '../../utils/discount';

import Style from './Style';

/**
 * This Atom renders all the information for a given product, in the catalog
 */
const ProductCard = (props) => {
  const dispatch = useDispatch();
  const { uuid, image, name, vendor, packs } = props;

  const [selectablesPacks, setSelectablesPacks] = useState([]);
  const [showNotificationCart, setShowNotificationCart] = useState(false);
  const [priceValues, setPriceValues] = useState({
    originalPrice: 0,
    currentPrice: 0,
    unitPrice: 0,
    discount: 0,
  });

  /**
   * Add 'Selected' prop to the packs, to control the choose of the user
   */
  useEffect(() => {
    const updatedPacks = packs.flatMap(pack => (pack.status ? { ...pack, selected: false} : []));
    if (updatedPacks.length){
      updatedPacks[0].selected = true;
    }
    setSelectablesPacks(updatedPacks);
  },[])

  /**
   * Updates the values of the product card based on the pack
   */
  useEffect(() => {
    const selectedPack = selectablesPacks.find(pack => pack.selected);
    if (selectedPack) {
      const { originalPrice, currentPrice, unities } = selectedPack;
      const unitPrice = currentPrice/unities;
      let discount = 100 - ((currentPrice*100)/originalPrice);
      discount = formatDiscount(discount);
      setPriceValues({
        originalPrice,
        currentPrice,
        unitPrice,
        discount,
      })
    }
  },[selectablesPacks]);

  const activeNotification = () => {
    setShowNotificationCart(true);
    setTimeout(()=>{
      setShowNotificationCart(false);
    }, 2500);
  }
  /**
   *  Modifies the selected item acordding by click
   */
  const onClickPack = (uuid) => {
    const updatedPacks = selectablesPacks.map((item) => (
      item.uuid === uuid ? { ...item, selected: true } : { ...item, selected: false} 
    ));
    setSelectablesPacks(updatedPacks);
  };

  const addToCart = () => {
    const selectedPack = selectablesPacks.find(pack => pack.selected);
    const item = {
      uuid,
      image,
      name,
      pack: selectedPack.unities,
      price: roundCurrency(priceValues.currentPrice),
      originalPrice: roundCurrency(priceValues.originalPrice),
      unitPrice: roundCurrency(priceValues.unitPrice),
      discount: Number(priceValues.discount),
      quantity: 1,
    }
    dispatch(setItem(item));
    activeNotification();
  };

  return (
    <Style.Container>
      <Style.ImageContainer>
        {!!(priceValues.discount > 15) && (
          <Style.DiscountBanner>
            <Style.DiscountValueBanner>
              {priceValues.discount}
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
      <Style.Description>
        <Style.Title>
          {vendor}
        </Style.Title>
        <Style.Subtitle>
          {name}
        </Style.Subtitle>
      </Style.Description>
      <Style.ValuesContainer>
        <Style.PriceContainer>
          {!!priceValues.discount && (
            <Style.TextOriginalPrice>
              <Style.PassThrough>
                {`De ${formatCurrency(priceValues.originalPrice)}`}
              </Style.PassThrough>
              {' Por:'}
            </Style.TextOriginalPrice>
          )}
          <Style.CurrentPrice>
            {formatCurrency(priceValues.currentPrice)}
          </Style.CurrentPrice>
          <Style.UnitPrice>
            <b>{formatCurrency(priceValues.unitPrice)}</b>{'/un'}
          </Style.UnitPrice>
        </Style.PriceContainer>
        {!!priceValues.discount && (
          <Style.DiscountContainer>
            <Style.DiscountLabel>
              {'Desconto'}
            </Style.DiscountLabel>
            <Style.DiscountPercent>
              {`${priceValues.discount}%`}
            </Style.DiscountPercent>
          </Style.DiscountContainer>
        )}
      </Style.ValuesContainer>
      <Style.LabelPack>
        {'ESCOLHA O PACK'}
      </Style.LabelPack>
      <Style.PackContainer>
        {
          selectablesPacks.map(pack => (
            <Style.Pack
              key={pack.uuid} 
              onClick={() => {onClickPack(pack.uuid)}} 
              selected={pack.selected}
            >
              <Style.PackUnities>
                {pack.unities}
              </Style.PackUnities>
              <Style.TextUnities>
                {'UNIDADES'}
              </Style.TextUnities>  
            </Style.Pack>
          ))
        }
      </Style.PackContainer>
      <Style.AddButton onClick={addToCart}>
        {'ADICIONAR AO CARRINHO'}
      </Style.AddButton>
      {
        !!showNotificationCart && (
          <Style.NotificationCart>
            {'Novo Item Adicionado ao Carrinho'}
          </Style.NotificationCart>
        )
      }
    </Style.Container>
  );
}

ProductCard.propTypes = {
  uuid: string.isRequired,
  image: string.isRequired,
  name: string.isRequired,
  vendor: string,
  packs: arrayOf(shape({
    uuid: string.isRequired,
    status: bool.isRequired,
    originalPrice: number.isRequired,
    currentPrice: number.isRequired,
    unities: number.isRequired,
  })),
};

ProductCard.defaultProps = {
  vendor: '',
  packs: [],
};

export default ProductCard;
