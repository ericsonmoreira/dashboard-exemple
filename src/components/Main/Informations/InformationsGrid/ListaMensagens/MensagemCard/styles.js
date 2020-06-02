import styled from 'styled-components';
import { colors } from '../../../../../../styles'

export const Container = styled.div`
  font-size: 10px;
  background-color: ${colors.tertiary};
  margin-bottom: 4px;
  padding: 8px;
  border-radius: 4px; 
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #000;
`;

export const Autor = styled.div`
  font-weight: bold;
`;

export const Date = styled.div`

`;

export const Content = styled.div`
  margin-top: 2px;
  color: ${colors.primary}
`;


