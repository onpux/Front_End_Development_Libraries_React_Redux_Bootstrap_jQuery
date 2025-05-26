// /src/projects/ToDoApp/store/todoSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    agregarTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        texto: action.payload,
        completado: false
      });
    },
    eliminarTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      if (todo) todo.completado = !todo.completado;
    }
  }
});

export const { agregarTodo, eliminarTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
