import React from "react";
import Calculator from "../components/Calculator";
import Dashboard from "../components/Dashboard";
import ToDoList from "../components/ToDoList";

const Home = () => (
  <div>
    <h1>Bienvenido a mi portafolio SPA</h1>
    <section>
      <Calculator />
    </section>
    <section>
      <Dashboard />
    </section>
    <section>
      <ToDoList />
    </section>
  </div>
);

export default Home;
