import styled from 'styled-components';

import { colors } from '../../../config'

export const Container = styled.div`
  padding: 8px;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${colors.bg};
`;

export const LocalLabel = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: ${colors.primary}
`;
