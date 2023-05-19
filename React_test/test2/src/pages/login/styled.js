import styled from "styled-components";
import { Link } from "react-router-dom";

// import { Button } from "../Button";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  displat: flex;
  ailng-itmes: center;
  justify-content: conter;

  background: lightgoldenrodyellow;
`;

export const loginBox = styled.div`
  height: 480px;
  width: 600px;
  // border: 3px solid red;

  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
`;

export const FormBox = styled.form`
  height: 360px;
  width: 520px;
  border: 3px solid black;
  border-radius: 40px 40px 0 0;

  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Input = styled.input`
  height: 45px;
  width: 340px;

  font-size: 16pt;
  border-radius: 0 20px 20px 0;
  padding-left: 15px;
`;

export const LinkBt = styled.a`
  height: 45px;
  width: 180px;

  color: #fff;
  font-size: 16pt;
  font-weight: 600;
  background: forestgreen;
  border-radius: 20px;
  cursor: pointer;
`;
