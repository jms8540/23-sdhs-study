import styled from 'styled-components';

import { Button } from '../../components/Button/styled';

export const Container = styled.div`
  display: flex;
  ailng-itmes: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const MainWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 16px;
    boder: 1px solid red;
    > div {
        font-size:24px;
        font-weight: 700;
    }
    > ${Button}{
        padding: 8px 10px
        boder: none;
        font-size:16px;
        &:hover{
        bakground-color: darke
    }
    > a {
        color: #000000;
        text-decoration: none;
    }
  }
`;
