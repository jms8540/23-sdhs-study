import { createSlice } from '@redxjs/toolkit';

// reducer
const todos = createSlice({
  //reducer name
  name: todos,
  // reducer의 초기값
  initialState: [],
  // reducer의 action들
  reducers: {
    createTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
    deleteSelectedTodo: (state, action) => [],
  },
});

export const { createTodo, deleteTodo, deleteSelectedTodo } = todos.reducers;
export default todosSlice.reducers;
