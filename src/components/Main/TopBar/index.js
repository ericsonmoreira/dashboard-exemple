import React from 'react';
import { Container, Status, SearchField, UserSalutation, Avatar, SearchInput } from './styles';

import { AiFillBell, AiOutlineSearch } from 'react-icons/ai'
import imgAvatar from '../../../img/avatar.png';

const TopBar = () => {
  return (
    <Container>
      <Status>
        <Avatar src={imgAvatar} />
        <UserSalutation>
          Ola, Ericson
        </UserSalutation>
        <AiFillBell size={22} />
      </Status>
      <SearchField>
        <AiOutlineSearch size={16} />
        <SearchInput placeholder="buscar" />
      </SearchField>
    </Container>
  );
}

export default TopBar;