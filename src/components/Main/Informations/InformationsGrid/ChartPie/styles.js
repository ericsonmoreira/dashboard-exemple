import styled from 'styled-components';
import { colors } from '../../../../../styles'

export const Container = styled.div`
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: ${colors.shadow};
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${colors.secondary};
  text-align: center;
`;

export const Chart = styled.div`
  flex: 1;
  padding: 5px;
  border-radius: 8px;
  background-color: ${colors.tertiary};
  margin: 5px 0;
`;

export const Footer = styled.span`
  color: ${colors.secondary};
  font-size: 12px;
  text-align: center;
`;

