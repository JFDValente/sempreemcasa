import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  overflow: auto;
  background: rgba(49, 43, 69, 0.7);

  z-index: 2;
`;

const Dialog = styled.div`
  transform: translate(0, 0);
  width: 100%;
  height: auto;

  margin-left: auto;

  box-sizing: border-box;

  max-width: ${({ theme: { width } }) => width.get('base')};
  min-width: 320px;

  transform: translateX(0%);
  @keyframes cartentry{
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  animation-name: cartentry;
  animation-duration: 1s;
  
  ${({ theme: { breakpoints } }) => `
    ${breakpoints.up('md')} {
      width: auto;
    }
  `}
`;

const Content = styled.div`
  position: relative;
  height: auto;

  box-sizing: border-box;

  background-color: #FFFFFF;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, .2);
  overflow: hidden;
`;

export default {
  Container,
  Dialog,
  Content,
};
