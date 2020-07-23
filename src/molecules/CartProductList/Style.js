import styled from 'styled-components';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: ${({ theme: { width } }) => (width.get('slim'))};
  box-sizing: border-box;
`;

export default {
  Container,
};
