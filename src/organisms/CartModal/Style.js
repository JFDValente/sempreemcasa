import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  padding: 15px 5px;
`;

const Footer = styled.div`
`;

export default {
  Container,
  Header,
  TitleContainer,
  CartIcon,
  Title,
  CloseButton,
  Content,
  Footer,
};
