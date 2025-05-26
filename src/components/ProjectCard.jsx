import React from "react";

const ProjectCard = ({ titulo, descripcion, tecnologias, enlaceDemo }) => {
  return (
    <div className="card shadow-sm h-100">
      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <ul className="list-inline">
          {tecnologias.map((tech, index) => (
            <li key={index} className="list-inline-item badge bg-secondary me-1">{tech}</li>
          ))}
        </ul>
        {enlaceDemo && (
          <a href={enlaceDemo} className="btn btn-primary mt-3" target="_blank" rel="noopener noreferrer">
            Ver Proyecto
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

