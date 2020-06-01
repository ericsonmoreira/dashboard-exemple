import React from 'react';

import { Container } from './styles';
import TopBar from './TopBar';
import Informations from './Informations'

function Main() {
  return (
    <Container>
      <TopBar />
      <Informations />
    </Container>
  );
}

export default Main;