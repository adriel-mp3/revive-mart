import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    cursor: pointer;
  }
  
  & button:last-child {
    rotate: 180deg;
  }
`