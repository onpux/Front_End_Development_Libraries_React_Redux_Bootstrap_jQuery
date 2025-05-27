// /src/components/ToDoList.jsx
import React, { useState } from "react";

const ToDoList = () => {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");

  const agregarTarea = () => {
    if (texto.trim()) {
      setTareas([...tareas, texto]);
      setTexto("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index);
    setTareas(nuevas);
  };

  return (
    <div className="card p-3">
      <h3>To-Do List</h3>
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        className="form-control mb-2"
        placeholder="Nueva tarea"
      />
      <button className="btn btn-primary mb-3" onClick={agregarTarea}>
        Agregar
      </button>
      <ul className="list-group">
        {tareas.map((tarea, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {tarea}
            <button className="btn btn-danger btn-sm" onClick={() => eliminarTarea(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
