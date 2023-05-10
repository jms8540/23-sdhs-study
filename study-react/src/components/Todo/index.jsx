import Button from '../Button';

import * as S from './styled';

function Todo(props) {
  const { deleteTodo } = props;
  return (
    <S.Container>
      <S.Title>{props.children}</S.Title>
      <S.Div>
        <Button className='important'>중요</Button>
        <Button className='delete' onClick={deleteTodo}>
          삭제
        </Button>
      </S.Div>
    </S.Container>
  );
}

export default Todo;
