import styled from 'styled-components';

export const colors = {
  primary: '#463f3a',
  secondary: '#8a817c',
  tertiary: '#bcb8b1',
  bg: '#f4f3ee',
  alert: '#e0afa0',
  shadow: '2px 2px 2px 0px rgba(0,0,0,0.5)'
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.bg};
`;

