import styled from 'styled-components';
import { Button } from '../Button/styled';

export const Container = styled.li`
  border: 2px solid #333333;
  border-radius: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 16pt;
  font-weight: 600;
  padding: 15px;
`;

export const Div = styled.div`
  display: flex;

  > ${Button} {
    height: 35px;
    width: 50px;
    font-weight: 600;
    margin: 0 5px;
    border: none;
    border-radius: 15px;
    background: black;
    color: #fff;
    line-height: 35px;
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;
