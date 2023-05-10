import { useEffect } from 'react';
import Button from '../../../components/Button/index';

import * as S from './styled';

function CreateItemBox({ value, onChange, createTodoItem }) {
  const handleInputValue = e => {
    onChange(e.target.value);
  };

  return (
    <S.InputBox>
      <S.Input value={value} placeholder='To do를 작성해주세요.' onChange={handleInputValue} />
      <Button onClick={createTodoItem}>등록</Button>
    </S.InputBox>
  );
}

export default CreateItemBox;
