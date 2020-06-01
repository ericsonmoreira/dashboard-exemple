import React from 'react';

import {
  Container, 
  ColumnLeft,
  ColumnCentrer,
  ColumnRight,
} from './styles';

function InformationsGrid() {
  return (
    <Container>
      <ColumnLeft>ColumnLeft</ColumnLeft>
      <ColumnCentrer>ColumnCentrer</ColumnCentrer>
      <ColumnRight>ColumnRight</ColumnRight>
    </Container>
  );
}

export default InformationsGrid;