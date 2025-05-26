// /src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";

// Slices (importar aquí los reductores)
import todoReducer from "../projects/ToDoApp/store/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    // Aquí podrías agregar más slices (ej. clima, autenticación, etc.)
  },
  devTools: process.env.NODE_ENV !== "production", // Habilita Redux DevTools en desarrollo
});

export default store;
