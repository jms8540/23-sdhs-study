import { useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreateltemBox';
import ItemList from './ltemList';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    if (!todoName.trim()) {
      alert('내용을 입력해 주세여');
      return;
    }
    setTodoName('');
    setTodos(prevState => [...prevState, { id: prevState.length, name: todoName }]);
  };

  const deleteTodo = id => {
    const findIndex = todos.findIndex(v => v.id === id);
    setTodos(prevState => {
      const tempArr = [...prevState];
      tempArr.splice(findIndex, 1);
      return tempArr;
    });
  };

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={todoName} onChange={setTodoName} createTodoItem={createTodo} />
      <ItemList todos={todos} deleteTodo={deleteTodo} />;
    </S.Container>
  );
}

export default Todos;
