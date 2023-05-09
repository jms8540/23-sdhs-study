import { useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreateltemBox';
import ItmeList from './ltemList';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    setTodos(prevState => [...prevState, { id: prevState.length, name: todoName }]);
  };

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox onChange={setTodoName} createTodoItem={createTodo} />
      <ItmeList todos={todos} />;
    </S.Container>
  );
}

export default Todos;
