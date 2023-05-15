import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';

import { setTodos, createTodo, deleteTodo, deleteSelectedTodos } from '../../reduce/todos';

import * as S from './styled';

import CreateItemBox from './CreateltemBox';
import ItemList from './ltemList';
import SearchInput from '../../components/Searchinput';
import Button from '../../components/Button';

function Todos() {
  const [todoName, setTodoName] = useState('');

  const dispatch = useDispatch();

  const { todos } = useSelector(state => state.todos);

  const [searchValue, setSearchValue] = useState('');

  const [selectedTodoIds, setSelectedTodoids] = useState([]);

  const handleCreateTodo = () => {
    // if (!todoName.trim()) {
    //   alert('내용을 입력해 주세여');
    //   return;
    // }
    console.log('dsfkjds');
    setTodoName('');
    dispatch(createTodo({ id: uuidv4(), name: todoName }));
    // setTodos(prevState => [...prevState, { id: prevState.length, name: todoName }]);
  };

  const handledeleteTodo = id => {
    dispatch(deleteTodo(id));
  };

  const handledeleteSelectedTodos = () => {
    dispatch(deleteSelectedTodos(selectedTodoIds));
  };

  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      dispatch(setTodos(parseTodos));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
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
      <SearchInput
        onChange={value => {
          setSearchValue(value);
        }}
      />
      <CreateItemBox value={todoName} onChange={setTodoName} createTodoItem={handleCreateTodo} />
      <S.Button onClick={handledeleteSelectedTodos}>선택 된 To do 삭제</S.Button>
      <ItemList
        todos={todos}
        searchValue={searchValue}
        deleteTodo={handledeleteTodo}
        setSelectedTodoids={setSelectedTodoids}
      />
    </S.Container>
  );
}

export default Todos;
