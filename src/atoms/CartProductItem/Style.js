import styled, { css } from 'styled-components';

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 81px;
  min-width: 310px;
  max-width: 320px;
  margin-bottom: 20px;
`;

const containerItem = css`
  background-color: #FCFCFC;
  border: 1px #EDEDED solid;
  height: 75px;
  padding: 5px 5px;
`;

const ItemData = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 95%;
  border-radius: 5px 0 0 5px;
  margin-right: 1px;
  min-width: 300px;
  ${containerItem}
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5%;
  border-radius: 0 5px 5px 0;
  ${containerItem}
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 70px;
  width: 24%;
  border-radius: 5px;
  background-image: #FFFFFF;
  border: 1px #F3F3F3 solid;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 70px;
  margin-left: 10px;
  max-width: 210px;
`;

const DiscountBanner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 15px;
  width: 40px;
  background-color: #D05D5D;
`;

const CutBanner = styled.div`
  position: relative;
  top:-17px;
  left:40px;
  border-bottom: 15px solid #FFFFFF;
  border-left: 10px solid #D05D5D;
  width 0;
`;

const DiscountValueBanner = styled.span`
  margin-left: 1px;
  line-height: 15px;
  font-size: 12px;
  font-weight: bold;
  color: #FFFFFF;
`;

const TextDiscountBanner = styled.span`
  font-size: 7px;
  font-weight: bold;
  color: #FFFFFF;
`;

const Image = styled.img`
  max-width: 90%;
  max-height: 80%;
  mix-blend-mode: multiply;
`;

const Description = styled.div`
  height: 35px;
  box-sizing: border-box;
`;

const Title = styled.p`
  margin-bottom: 7px;
  font-size: 13px;
  font-weight: bold;
  text-align: left;
  line-height: 14px;
  width: 210px;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 250px;
`;

const Subtitle = styled.p`
  font-size: 10px;
  margin-top: 2px;
  text-align: center;
  color: #878787;
  width: 100%;
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Subtotal = styled.span`
  text-align: right;
  font-size: 18px;
  font-weight: bold;
  color: #575A6D;
`;

const DeleteButton = styled.img`
  cursor: pointer;
  height: 19px;
  width: 17px;
  border-radius: 3px;
  :hover {
    background-color:#DDDDDD;
  }
`;

export default {
  Container,
  ItemData,
  Action,
  ImageContainer,
  InfoContainer,
  DiscountBanner,
  DiscountValueBanner,
  TextDiscountBanner,
  CutBanner,
  Image,
  Description,
  Title,
  Subtitle,
  ValuesContainer,
  Subtotal,
  DeleteButton,
};