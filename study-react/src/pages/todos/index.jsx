import { useEffect, useState } from 'react';

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

  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      setTodos(parseTodos);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    console.log('todos저장');
    try {
      const stringifyTodos = JSON.stringify(todos);
      localStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={todoName} onChange={setTodoName} createTodoItem={createTodo} />
      <ItemList todos={todos} deleteTodo={deleteTodo} />;
    </S.Container>
  );
}

export default Todos;
