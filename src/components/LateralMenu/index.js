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

const sizeButtons = 20;

function LateralMenu() {
  return (
    <Container>
      <MenuButton name="menu">
        <AiOutlineMenu size={sizeButtons} />
      </MenuButton>
      <MenuGroup>
        <MenuButton name="home">
          <AiFillHome size={sizeButtons} />
        </MenuButton>
        <MenuButton name="charts">
          <AiOutlineLineChart size={sizeButtons} />
        </MenuButton>
        <MenuButton name="favorite">
          <AiFillStar size={sizeButtons} />
        </MenuButton>
        <MenuButton name="comments">
          <AiOutlineComment size={sizeButtons} />
        </MenuButton>
        <MenuButton name="configuration">
          <AiFillTool size={sizeButtons} />
        </MenuButton>
        <MenuButton name="attention">
          <AiFillAlert size={sizeButtons} />
        </MenuButton>
      </MenuGroup>
    </Container>
  );
}

export default LateralMenu;