// /src/projects/ToDoApp/App.jsx
import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Provider } from 'react-redux';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container py-4">
        <h2 className="mb-4">Lista de Tareas</h2>
        <TodoForm />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;
