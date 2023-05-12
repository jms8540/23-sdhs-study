import styled from 'styled-components';

export const SearchInputBox = styled.div`
  display: flex;
  gap: 4px;
  width: 100%;
  border: 1px solid blue;
  border-radius: 10px;
`;

export const SearchInput = styled.input`
  flex-shrink: 1;
  width: 100%;
  padding: 4px;
  border: none;
  outline: none;
  &:focus {
    border-color: #b2b2b2;
    transition: 0.3s;
  }
`;
