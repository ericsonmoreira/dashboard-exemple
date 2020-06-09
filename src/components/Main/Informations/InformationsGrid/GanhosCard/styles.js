import styled from 'styled-components';

import { colors } from '../../../../../config'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
  background-color: white;
  border-radius: 8px;
  box-shadow: ${colors.shadow};
  padding: 10px;
`;

export const Title = styled.span`
  color: ${colors.secondary};
  font-size: 16px;
`;

export const Value = styled.h1`
  color: ${colors.primary};
  text-align: center;
  font-size: 25px;
  font-weight: bold;
`;

export const CharGanhos = styled.div`
  background-color: ${colors.tertiary};
  flex:1;
  padding: 5px;
  border-radius: 8px;
`;