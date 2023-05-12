import * as S from './styled';

function Checkbox({ onChange }) {
  const handleChecked = e => {
    onChange(e.target.checked);
  };

  return <S.input type='checkbox' onChange={handleChecked} />;
}

export default Checkbox;
