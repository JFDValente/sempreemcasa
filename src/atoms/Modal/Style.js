import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  overflow: auto;
  background: rgba(49, 43, 69, 0.9);

  z-index: 2;
`;

const Dialog = styled.div`
  transform: translate(0, 0);
  width: 100%;
  height: auto;

  margin-left: auto;
  margin-right: auto;

  box-sizing: border-box;

  max-width: ${({ theme: { width } }) => width.get('base')};
  min-width: 320px;
  
  ${({ theme: { breakpoints } }) => `
    ${breakpoints.up('md')} {
      width: auto;
    }
  `}
`;

const Content = styled.div`
  position: relative;
  height: auto;

  padding: 16px;
  box-sizing: border-box;

  background-color: #FFFFFF;
  box-shadow: 0 1rem 2rem 0 rgba(0, 0, 0, .2);
  overflow: hidden;

  margin: 16px;

  ${({ theme: { breakpoints } }) => `
    ${breakpoints.up('md')} {
      margin: 24px;
    }
  `}
`;

export {
  Container,
  Dialog,
  Content,
};
