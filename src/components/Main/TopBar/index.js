import React from 'react';
import { Container, Status, SearchField, UserSalutation, Avatar, SearchInput } from './styles';

import { AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import imgAvatar from '../../../img/avatar.png';

function TopBar() {
  return (
    <Container>
      <Status>
        <UserSalutation>
          Ola, Ericson
        </UserSalutation>
        <Avatar src={imgAvatar} />
        <AiFillBell size={35} />
      </Status>
      <SearchField>
        <AiOutlineSearch />
        <SearchInput placeholder="buscar" />
      </SearchField>
    </Container>
  );
}

export default TopBar;