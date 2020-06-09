import styled from 'styled-components';
import { colors } from '../../../../../config'

export const Container = styled.div`
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: ${colors.shadow};
  display: flex;
  flex: 2;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${colors.secondary};
`;

export const Mensagens = styled.div`
  margin-top: 10px;
`;
