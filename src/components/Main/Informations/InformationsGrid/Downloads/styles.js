import styled from 'styled-components';
import { colors } from '../../../../../config';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #fff;
  margin: 10px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: ${colors.shadow};
`;
