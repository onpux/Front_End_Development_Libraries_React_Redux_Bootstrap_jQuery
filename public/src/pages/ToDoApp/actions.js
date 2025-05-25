// Acción para agregar una tarea
export const ADD_TASK = "ADD_TASK";

// Acción para eliminar una tarea
export const DELETE_TASK = "DELETE_TASK";

// Acción para marcar una tarea como completada
export const TOGGLE_TASK = "TOGGLE_TASK";

// Creadores de acciones
export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id,
});
