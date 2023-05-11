import { useEffect } from 'react';
import Button from '../../../components/Button/index';

import * as S from './styled';

function CreateItemBox({ value, onChange, createTodoItem }) {
  const handleInputValue = e => {
    onChange(e.target.value);
  };
  const enterKey = enter => {
    if (enter.key === 'Enter') {
      createTodoItem();
      console.log(enter);
    }
  };

  return (
    <S.InputBox>
      <S.Input
        value={value}
        placeholder='To do를 작성해주세요.'
        onChange={handleInputValue}
        onKeyUp={enterKey}
      />
      <Button onClick={createTodoItem}>등록</Button>
    </S.InputBox>
  );
}

export default CreateItemBox;
