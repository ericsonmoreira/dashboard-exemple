import React from 'react';
import { Container, MenuGroup } from './styles';
import MenuButton from './MenuButton';
import { Link } from 'react-router-dom'

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
        <Link to="/">
          <MenuButton name="home">
            <AiFillHome size={sizeButtons} />
          </MenuButton>
        </Link>
        <Link to="/charts">
          <MenuButton name="charts">
            <AiOutlineLineChart size={sizeButtons} />
          </MenuButton>
        </Link>
        <Link to="/favorite">
          <MenuButton name="favorite">
            <AiFillStar size={sizeButtons} />
          </MenuButton>
        </Link>
        <Link to="/comments">
          <MenuButton name="comments">
            <AiOutlineComment size={sizeButtons} />
          </MenuButton>
        </Link>
        <Link to="/configurations">
          <MenuButton name="configuration">
            <AiFillTool size={sizeButtons} />
          </MenuButton>
        </Link>
        <Link to="/attention">
          <MenuButton name="attention">
            <AiFillAlert size={sizeButtons} />
          </MenuButton>
        </Link>
      </MenuGroup>
    </Container>
  );
}

export default LateralMenu;