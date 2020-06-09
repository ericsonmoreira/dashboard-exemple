import styled from 'styled-components';

import { colors } from '../../../config'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  padding:0 10px;
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
  width: 300px;
  height: 26px;
  color: ${colors.secondary};
  background-color: ${colors.bg};
  margin-right: 20px;
  border-radius: 13px;
  align-items: center;
  padding: 0 10px;
`;

export const UserSalutation = styled.h3`
  font-size: 14px;
  margin:0 30px;
`;

export const Avatar = styled.img`
  margin-left: 5px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  margin-left: 5px;
  border: 0 none;
  background-color: ${colors.bg};
  color: ${colors.secondary}
`;