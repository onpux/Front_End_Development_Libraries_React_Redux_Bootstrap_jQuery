// /src/projects/ToDoApp/components/TodoList.jsx
import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  if (todos.length === 0) {
    return <p className="text-muted">No hay tareas pendientes.</p>;
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
