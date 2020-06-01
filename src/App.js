import React from 'react';

import { Container } from './styles'

import LateralMenu from './components/LateralMenu'
import Main from './components/Main'

function App() {

  return (
    <Container>
      <LateralMenu />
      <Main />
    </Container>
  );
}

export default App;
