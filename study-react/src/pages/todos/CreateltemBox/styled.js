import styled from 'styled-components';

import { Button } from '../../../components/Button/styled';

export const InputBox = styled.div`
  display: flex;
  width: 300px;
  > ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    border: none;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 10px;
  margin: 0 auto;
`;
