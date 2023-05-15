// redux toolkit에서 제공하는 Store를 만들어주는 함수
import { configursStore } from '@reduxjs/toolkit';
// Reducer를 결합하는 redux 제공 함수
import { combineReducers } from 'redux';
// 만든 todos reducer
import todos from './todos';

// Reducer들
const rootReducar = combineReducers({
  todos,
});

// 사용할 store
export const store = configursStore({
  reducer: rootReducar,
});
