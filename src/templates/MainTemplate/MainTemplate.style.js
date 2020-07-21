import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 70%;
  margin: 32px auto;
`;

const Content = styled.div`
  flex: 1;
  padding: 16px 0;
`;

export default {
  Container,
  Content,
};
