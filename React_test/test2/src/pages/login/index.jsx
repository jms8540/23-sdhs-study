import { Link } from "react-router-dom";

// import Button from "";

import * as S from "./styled";

function Login() {
  return (
    <S.Container>
      <S.loginBox>
        <h1>로그인</h1>
        <S.FormBox>
          <S.Input type="text" placeholder="ID" />
          <S.Input type="text" placeholder="password" itemType="number" />
          <S.Input type="text" placeholder="name" />
          <Link to="./main">로그인</Link>
        </S.FormBox>
      </S.loginBox>
    </S.Container>
  );
}

export default Login;
