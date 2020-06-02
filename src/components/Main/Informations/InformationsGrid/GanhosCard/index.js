import React from 'react';

import { 
  Container,
  Title,
  Value, 
  CharGanhos,
} from './styles';

function GanhosCard() {
  return (
    <Container>
      <Title>Ganhos</Title>
      <Value>R$ 1.200,00</Value>
      <CharGanhos>[Gráfico aqui.]</CharGanhos>
    </Container>
  );
}

export default GanhosCard;