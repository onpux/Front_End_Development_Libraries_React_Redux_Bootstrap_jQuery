// src/App.jsx

import React from "react";
import AppRouter from "./router/Router";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-4">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
