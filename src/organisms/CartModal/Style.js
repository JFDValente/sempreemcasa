import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const UpPart = styled.div`
  max-height: 80vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;

  border-bottom: 1px solid #E5E4E4;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CartIcon = styled.img`
  height: 35px;
  width: 35px;
`;

const Title = styled.h1`
  font-size: 22px;
  padding-left: 4px;
  margin: 0;
`;

const CloseButton = styled.button`
  cursor: pointer;
  border: none;
  color: #000000;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  background-color: #FFFFFF;
  height: 22px;
`;

const Content = styled.div`
  max-height: 82.8vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15px 5px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 96px;
  border-top: 1px solid #C5C4C4;
  padding: 0 5px;
  background-color: #FFFFFF;
`;

const TotalContainer = styled.div`
  text-align: right;
  width: 100%;
  font-weight: bold;
  margin-bottom: 5px;
`;

const TotalLabel = styled.span`
  text-align: right;
  color: #565656;
  font-size: 20px;
`;

const TotalValue = styled.span`
  margin-left: 5px;
  text-align: right;
  font-size: 25px;
`;

const TotalDiscount = styled.p`
  font-size: 12px;
  text-align: right;
  color: #3F841F;
  width: 100%;
  margin-bottom: 10px;
`;

const ConfirmButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: #CB2F2F;
  line-height: 25px;
  color: #FFFFFF;
  text-align: center;
  font-size: 14px;
  outline: none;
  padding: 0 15px;

  &:hover{
    background-color: #a31c1c;
  }
`;

export default {
  Container,
  UpPart,
  Header,
  TitleContainer,
  CartIcon,
  Title,
  CloseButton,
  Content,
  Footer,
  TotalContainer,
  TotalLabel,
  TotalValue,
  TotalDiscount,
  ConfirmButton,
};
