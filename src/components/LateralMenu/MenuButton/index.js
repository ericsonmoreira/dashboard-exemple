import React from 'react';

import { Container } from './styles';

function MenuButton({ children, name }) {

  return (
    <Container>
      {children}
    </Container>
  );
}

export default MenuButton;