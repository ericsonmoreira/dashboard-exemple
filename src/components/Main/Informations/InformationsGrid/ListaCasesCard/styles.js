import styled from 'styled-components';
import { colors } from '../../../../../styles'

export const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: ${colors.shadow};
`;

export const TitleCard = styled.span`
  color: ${colors.secondary};
  font-size: 16px;
`;

export const ListCases = styled.div`
  margin-top:10px;
`;

export const CaseItem = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: 16px;
`;

export const LabemItem = styled.div`
  color: ${colors.primary};
  font-weight: bold;
`;

export const ValueItem = styled.div`
  color: ${colors.primary};
`;
