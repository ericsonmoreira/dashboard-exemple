import React from 'react';

import GanhosCard from './GanhosCard';
import ListaCasesCard from './ListaCasesCard';
import ChartPie from './ChartPie';
import ListaMensagens from './ListaMensagens';

import {
  Container,
  ColumnLeft,
  ColumnCentrer,
  ColumnRight,
} from './styles';

function InformationsGrid() {
  return (
    <Container>
      <ColumnLeft>
        <GanhosCard />
        <ListaCasesCard />
      </ColumnLeft>
      <ColumnCentrer>
        ColumnCentrer
      </ColumnCentrer>
      <ColumnRight>
        <ListaMensagens />
        <ChartPie />
      </ColumnRight>
    </Container>
  );
}

export default InformationsGrid;