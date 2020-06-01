import styled from 'styled-components';

import { colors } from '../../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  padding: 10px;
  background-color: ${colors.secondary};
  justify-content: space-between;
  align-items: center;
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
`;
export const SearchField = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 30px;
  color: ${colors.secondary};
  background-color: ${colors.bg};
  margin-right: 20px;
  border-radius: 15px;
  align-items: center;
  padding: 0 10px;
`;

export const UserSalutation = styled.h3`
  font-size: 18px;
`;

export const Avatar = styled.img`
  margin-left: 5px;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
`;

export const SearchInput = styled.input`
  margin-left: 5px;
  border: 0 none;
  background-color: ${colors.bg};

`;