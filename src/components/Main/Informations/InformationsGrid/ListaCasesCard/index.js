import React, { useState, useEffect } from 'react';

import {
  Container,
  TitleCard,
  ListCases,
  CaseItem,
  LabemItem,
  ValueItem,
} from './styles';

function ListaCasesCard() {

  const [cases, setCases] = useState([])

  useEffect(() => {
    setCases([
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
      { name: 'Lorem ipsum', quant: 1 },
    ])
  }, [])

  return (
    <Container>
      <TitleCard>Lista de Casos</TitleCard>
      <ListCases>
        {cases.map((item, index) => (
          <CaseItem key={index}>
            <LabemItem>{item.name}</LabemItem>
            <ValueItem>{item.quant}</ValueItem>
          </CaseItem>
        ))}
      </ListCases>
    </Container>
  );
}

export default ListaCasesCard;