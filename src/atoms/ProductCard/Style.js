import styled, { css } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 16px;
  background-color: #FFFFFF;
  height: 446px;
  min-width: 230px;
  max-width: 350px;
  font-size: 14px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 208px;
  width: 100%;
  border-radius: 5px;
  background-image: linear-gradient(to bottom, #FFFFFF, #f2f2f2);
`;

const DiscountBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 22px;
  width: 75px;
  background-color: #D05D5D;
`;

const CutBanner = styled.div`
  position: relative;
  top:-22px;
  left:62px;
  border-bottom: 22px solid #FFFFFF;
  border-left: 14px solid #D05D5D;
  width 0;
`;

const DiscountValueBanner = styled.span`
  margin-left: 6px;
  line-height: 22px;
  font-size: 16px;
  font-weight: bold;
  color: #FFFFFF;
`;

const TextDiscountBanner = styled.span`
  font-size: 9px;
  font-weight: bold;
  color: #FFFFFF;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 97%;
  mix-blend-mode: multiply;
`;

const Description = styled.div`
  height: 47.8px;
  box-sizing: border-box;
`;

const Title = styled.h4`
  font-weight: bold;
  margin-top: 8px;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 12px;
  margin-top: 2px;
  text-align: center;
  color: #878787;
  width: 100%;
  line-height: 14px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-top: 1px solid #CFCFCF;
  border-bottom: 1px solid #CFCFCF;
  margin: 8px 0;
  padding: 4px 0;
  width: 100%;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextOriginalPrice = styled.span`
  font-size: 13px;
  color: #878787;
  font-weight: 300;
`;

const PassThrough = styled.span`
  text-decoration-line: line-through;
`;

const CurrentPrice = styled.p`
  font-size: 17px;
  font-weight: bold;
  line-height: 23px;
  color: #1D7E15;
`;

const UnitPrice = styled.p`
  font-size: 14px;
  color: #858585;
`;

const DiscountContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  min-width: 80px;
`;

const DiscountLabel = styled.span`
  font-size: 12px;
  line-height: 21px;
`;

const DiscountPercent = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: #D05D5D;
`;

const LabelPack = styled.p`
  font-size: 10px;
  font-weight: bold;
  text-align: left;
  width: 100%;
`;

const PackContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 8px 0;
  width: 100%;
`;

const selectedPack = css`
  background-color: #4F5973;
  filter: none;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Pack = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  border-radius: 100px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);

  ${({ selected }) => (selected ? selectedPack : ` 
    background-color: #9594C2;
  `)};

  &:hover{
    ${selectedPack}
  }

  color: #FFFFFF;
  text-align: center;
  font-weight: bold;
`;

const PackUnities = styled.p`
  filter: none;
  font-size: 21px;
`;

const TextUnities = styled.p`
  filter: none;
  font-size: 7px;
`;

const AddButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #CB2F2F;
  width: 100%;
  line-height: 18px;
  color: #FFFFFF;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  outline: none;
  border: 1px solid #a31c1c;

  &:hover{
    background-color: #a31c1c;
    border: 1px solid #CB2F2F;
  }
`;

const NotificationCart = styled.div`
  position: absolute;
  top: 70px;
  right: 40px;
  height: 40px;
  width: 200px;
  text-align: center;
  z-index: 1;
  background-color: #FFFFFF;
  align-items: center;
  border: 2px #A4A4A4 solid;
  border-radius: 5px;
  font-size: 14px;
  opacity: 100%;
  display: flex;

  transform: translateY(0%);
  @keyframes notification{
    from {
      transform: translateY(-100%);
      opacity: 0%;
    }
    to {
      transform: translateY(0%);
      opacity: 100%
    }
  }

  animation-name: notification;
  animation-duration: 1s;
  animation-timing-function: ease-out;
`;

export default {
  Container,
  ImageContainer,
  DiscountBanner,
  CutBanner,
  DiscountValueBanner,
  TextDiscountBanner,
  Image,
  Description,
  Title,
  Subtitle,
  ValuesContainer,
  PriceContainer,
  TextOriginalPrice,
  PassThrough,
  CurrentPrice,
  UnitPrice,
  DiscountContainer,
  DiscountLabel,
  DiscountPercent,
  LabelPack,
  PackContainer,
  Pack,
  PackUnities,
  TextUnities,
  AddButton,
  NotificationCart,
};
