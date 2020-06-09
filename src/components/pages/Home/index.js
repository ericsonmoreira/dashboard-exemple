import React from 'react';
import LateralMenu from '../../LateralMenu';
import Main from '../../Main';

import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <LateralMenu />
      <Main />
    </Container>
  );
}

export default Home;