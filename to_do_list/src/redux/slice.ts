import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { TodoItem } from '../components/types';

interface TodoListState {
  todos: TodoItem[];
}

const initialState: TodoListState = {
  todos: [],
};

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state: TodoListState, action: PayloadAction<TodoItem>) => {
      state.todos.push(action.payload);
    },
  },
});

export const { addTodo } = todoListSlice.actions;

export default todoListSlice.reducer;