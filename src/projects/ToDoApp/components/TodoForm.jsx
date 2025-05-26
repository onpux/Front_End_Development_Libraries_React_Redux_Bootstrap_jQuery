// /src/projects/ToDoApp/components/TodoForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarTodo } from '../store/todoSlice';

const TodoForm = () => {
  const [texto, setTexto] = useState('');
  const dispatch = useDispatch();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (texto.trim() === '') return;
    dispatch(agregarTodo(texto));
    setTexto('');
  };

  return (
    <form onSubmit={manejarEnvio} className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Escribe una tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button className="btn btn-primary" type="submit">Agregar</button>
    </form>
  );
};

export default TodoForm;
