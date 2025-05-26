import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">Mi Portafolio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#inicio">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#proyectos">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
