import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  background-color: #fff;
`;

export const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  flex: 1;
`;
export const ColumnCentrer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: blue;
  flex: 2;
`;
export const ColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  background-color: red;
  flex: 1;
`;