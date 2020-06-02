import React from 'react';

import { Container, Title, Mensagens } from './styles';
import MensagemCard from './MensagemCard';

const lorem = `Simply dummy text of the printing and typesetting industrystandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`

const mensagnes = [
  { autor: 'Fulano', content: lorem, date: '01/01/2020' },
  { autor: 'Fulano', content: lorem, date: '01/01/2020' },
  { autor: 'Fulano', content: lorem, date: '01/01/2020' },
]

function ListaMensagens() {
  return (
    <Container>
      <Title>Mensagens</Title>
      <Mensagens>
        {mensagnes.map((mensagem, index) => (
          <MensagemCard 
            key={index} 
            autor={mensagem.autor} 
            content={mensagem.content} 
            date={mensagem.date} 
          />
        ))}
      </Mensagens>
    </Container>
  );
}

export default ListaMensagens;