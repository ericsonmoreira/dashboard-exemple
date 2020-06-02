import React from 'react';

import {
  Container,
  Title,
  Autor,
  Date,
  Content
} from './styles';

function MensagemCard({ autor, content, date }) {
  return (
    <Container>
      <Title>
        <Autor>{autor}</Autor>
        <Date>{date}</Date>
      </Title>
      <Content>{content}</Content>
    </Container>
  );
}

export default MensagemCard;