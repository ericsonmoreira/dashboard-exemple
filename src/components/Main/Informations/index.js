import React from 'react';

import InformationsGrid from './InformationsGrid'
import { Container, LocalLabel } from './styles';

function Informations() {
  return (
    <Container>
      <LocalLabel>Dashboard > Home</LocalLabel>
      <InformationsGrid />
    </Container>
  );
}

export default Informations;