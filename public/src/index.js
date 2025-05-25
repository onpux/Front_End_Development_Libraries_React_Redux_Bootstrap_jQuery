import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Importar estilos globales si existen
import "./styles/global.css";

// React 18 usa createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
