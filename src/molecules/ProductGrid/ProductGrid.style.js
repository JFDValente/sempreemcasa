import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme: { width } }) => (width.get())};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 15px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns.mobile};
  grid-template-rows: repeat(${({ rowCount }) => rowCount.mobile}, 1fr);
  grid-row-gap: 15px;
  grid-auto-rows: 0;
  margin-bottom: 10px;

  ${({ theme: { breakpoints } }) => breakpoints.up('md')} {
    grid-template-columns: ${({ columns }) => columns.tablet};
    grid-template-rows: repeat(${({ rowCount }) => rowCount.tablet}, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 20px;
  }

  ${({ theme: { breakpoints } }) => breakpoints.up('lg')} {
    grid-template-columns: ${({ columns }) => columns.desktop};
    grid-template-rows: repeat(${({ rowCount }) => rowCount.desktop}, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
`;

export default {
  Container,
  Grid,
};
