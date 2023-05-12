import styled from 'styled-components';

import { Button } from '../../../components/Button/styled';

export const InputBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  > ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    border: none;
    margin-left: 20px;
    font-weight: 600;
    font-size: 14pt;
    border-radius: 15px;
    border: 2px solid green;
    cursor: pointer;
    background: none;
    transition: 0.2s;
  }
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
`;
