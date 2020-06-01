import React from 'react';
import { Container, MenuGroup } from './styles';
import MenuButton from './MenuButton';
import {
  AiFillHome,
  AiOutlineLineChart,
  AiFillStar,
  AiOutlineComment,
  AiFillTool,
  AiFillAlert,
  AiOutlineMenu,
} from 'react-icons/ai'

function LateralMenu() {
  return (
    <Container>
      <MenuButton name="menu">
        <AiOutlineMenu size="30" />
      </MenuButton>
      <MenuGroup>
        <MenuButton name="home">
          <AiFillHome size="30" />
        </MenuButton>
        <MenuButton name="charts">
          <AiOutlineLineChart size="30" />
        </MenuButton>
        <MenuButton name="favorite">
          <AiFillStar size="30" />
        </MenuButton>
        <MenuButton name="comments">
          <AiOutlineComment size="30" />
        </MenuButton>
        <MenuButton name="configuration">
          <AiFillTool size="30" />
        </MenuButton>
        <MenuButton name="attention">
          <AiFillAlert size="30" />
        </MenuButton>
      </MenuGroup>
    </Container>
  );
}

export default LateralMenu;