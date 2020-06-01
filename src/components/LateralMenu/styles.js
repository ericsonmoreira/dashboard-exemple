import styled from 'styled-components';

import { colors } from '../../styles' 

export const Container = styled.div`
  padding: 10px;
  width: 60px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${colors.primary};
  align-items: center;
`;

export const MenuGroup = styled.div`
  margin-top: 100px;
`;