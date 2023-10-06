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
    removeTodo: (state, action: PayloadAction<number>) => {
        const index = state.todos.findIndex(({ id }) => id === action.payload);
        state.todos.splice(index, 1);
    },
    editTodo: (state, action: PayloadAction<TodoItem>) => {
        const index = state.todos.findIndex(({ id }) => id === action.payload.id);
        state.todos[index] = {
            ...state.todos[index],
            ...action.payload,
        };
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoListSlice.actions;

export default todoListSlice.reducer;