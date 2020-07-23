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

const CartIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const CartIcon = styled.img`
  width: 40px;
  height: 35px;
  cursor: pointer;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 20px;
  width: 20px;
  color: #FFFFFF;
  font-size: 13px;
  font-weight: bold;
  background-color: #CB2F2F;
`;

export default {
  Container,
  CartIconContainer,
  CartIcon,
  Quantity,
};
