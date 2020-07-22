import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  max-width: 100vw;
  height: 50px;
  background-color: #404040;
  margin-bottom: 20px;
  padding: 5px 40px;
`;

const ShoppingCartIcon = styled.img`
  width: 40px;
  height: 35px;
  cursor: pointer;
`;

export default {
  Container,
  ShoppingCartIcon,
};
