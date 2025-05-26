// /src/projects/ToDoApp/components/TodoItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, eliminarTodo } from '../store/todoSlice';

const TodoItem = ({ id, texto, completado }) => {
  const dispatch = useDispatch();

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${completado ? 'list-group-item-success' : ''}`}>
      <span onClick={() => dispatch(toggleTodo(id))} style={{ cursor: 'pointer' }}>
        {completado ? <s>{texto}</s> : texto}
      </span>
      <button className="btn btn-sm btn-danger" onClick={() => dispatch(eliminarTodo(id))}>
        Eliminar
      </button>
    </li>
  );
};

export default TodoItem;
