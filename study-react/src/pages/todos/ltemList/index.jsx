import * as S from './styled';

import Todo from '../../../components/Todo';

function ItmeList({ todos }) {
  return (
    <S.ItemList>
      {todos.map(({ id, name }) => {
        return <Todo key={id}>{name}</Todo>;
      })}
    </S.ItemList>
  );
}

export default ItmeList;
