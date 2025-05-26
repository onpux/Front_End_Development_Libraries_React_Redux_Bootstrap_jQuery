// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">Mi Portafolio</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">ToDo App</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/weather">Clima</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculadora</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
