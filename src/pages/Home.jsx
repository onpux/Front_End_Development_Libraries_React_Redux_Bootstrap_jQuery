// /src/pages/Home.jsx
import React from "react";
import MainLayout from "../layouts/MainLayout";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const proyectos = [
    {
      titulo: "To-Do List con React y Redux",
      descripcion: "Aplicación de lista de tareas con manejo de estado global usando Redux.",
      tecnologias: ["React", "Redux", "Bootstrap"],
      enlaceDemo: "#"
    },
    {
      titulo: "Calculadora en React",
      descripcion: "Una calculadora responsiva estilizada con Bootstrap, usando componentes React.",
      tecnologias: ["React", "Bootstrap"],
      enlaceDemo: "#"
    },
    {
      titulo: "Dashboard de Clima",
      descripcion: "Dashboard interactivo que muestra datos del clima usando una API pública.",
      tecnologias: ["React", "jQuery", "API REST"],
      enlaceDemo: "#"
    }
  ];

  return (
    <MainLayout>
      <section id="inicio" className="text-center mb-5">
        <h1>Bienvenido a mi Portafolio</h1>
        <p className="lead">Aquí encontrarás una muestra de mis proyectos con bibliotecas Front-End modernas.</p>
      </section>

      <section id="proyectos">
        <h2 className="mb-4">Proyectos Destacados</h2>
        <div className="row g-4">
          {proyectos.map((proyecto, index) => (
            <div className="col-md-4" key={index}>
              <ProjectCard {...proyecto} />
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
