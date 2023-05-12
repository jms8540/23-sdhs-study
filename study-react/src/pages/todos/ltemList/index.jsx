import * as S from './styled';

import Todo from '../../../components/Todo';

function ItemList({ todos, searchValue, deleteTodo, setSelectedTodoids }) {
  return (
    <S.ItemList>
      {todos
        .filter(todo => {
          console.log('name:', todo.name, ' searchValue: ', searchValue);
          return todo.name.includes(searchValue);
        })
        .map(({ id, name }) => {
          const handleDeleteTodo = () => {
            deleteTodo(id);
          };

          const handlsSelected = checked => {
            if (checked) {
              // todo선택
              // 기존에 선택 되어 있던 seletedTodoIds에 새로 선택한 todo의 id를 넣어준다.
              setSelectedTodoids(prevState => [...prevState, id]);
            } else {
              // todo선택 해제
              //  기존에 선태 되어있던 seletedTodo..
              // 이미 선택 되어 있는 체크 해체한 todo의 id를 seletedTodoIds 배열에서 지워준다.
              // -> 선택된 todo 삭제(체크 해제)
              setSelectedTodoids(prevState => prevState.filter(prevId => prevId !== id));
            }
            console.log({ id, checked });
          };

          return (
            <Todo key={id} deleteTodo={handleDeleteTodo} handlsSelected={handlsSelected}>
              {name}
            </Todo>
          );
        })}
    </S.ItemList>
  );
}

export default ItemList;
