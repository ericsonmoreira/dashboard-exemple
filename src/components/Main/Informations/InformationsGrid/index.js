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
  Rown,
} from './styles';
import Downloads from './Downloads';

function InformationsGrid() {
  return (
    <Container>
      <ColumnLeft>
        <GanhosCard />
        <ListaCasesCard />
      </ColumnLeft>
      <ColumnCentrer>
        <Rown>
          <Downloads />
          <Downloads />
        </Rown>
        <Rown>
          <Downloads />
        </Rown>
        <Rown>
          <Downloads />
        </Rown>
      </ColumnCentrer>
      <ColumnRight>
        <ListaMensagens />
        <ChartPie />
      </ColumnRight>
    </Container>
  );
}

export default InformationsGrid;