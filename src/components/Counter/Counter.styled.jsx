import styled from 'styled-components';

export const CounterSection = styled.div`
  display: flex;
  align-items: center;
  padding-top: 32px;
`;

export const BtnLeft = styled.button`
  min-width: 50px;
  padding: 16px;
  color: white;
  font-size: 32px;
  font-weight: 300;
  cursor: pointer;
  background-color: green;
  margin-right: 8px;
  margin-left: 50px;
`;

export const BtnRight = styled.button`
  min-width: 50px;
  padding: 16px;
  color: white;
  font-size: 32px;
  font-weight: 300;
  cursor: pointer;
  background-color: red;
  margin-left: 8px;
`;

export const Counter = styled.p`
  font-weight: 600;
  font-size: 64px;
  margin: 0;
  padding: 16px;
  background-color: greenyellow;
  border-radius: 50%;
`;
