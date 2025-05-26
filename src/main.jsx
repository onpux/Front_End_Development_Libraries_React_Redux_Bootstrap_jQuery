// /src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Estilos globales (opcional si usas Tailwind, Bootstrap, o CSS puro)
import "./styles/index.css"; // Asegúrate de que este archivo exista

// Punto de montaje en el DOM (el div con id="root" en index.html)
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No se encontró el elemento #root en index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
