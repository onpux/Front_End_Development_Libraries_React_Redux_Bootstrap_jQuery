// /src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "./layouts/MainLayout";

// Página principal
import Home from "./pages/Home";

// Proyectos embebidos
import ToDoApp from "./projects/ToDoApp/App";
import CalculatorApp from "./Calculator/App";
import WeatherDashboardApp from "./WeatherDashboard/App";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<ToDoApp />} />
          <Route path="/calculator" element={<CalculatorApp />} />
          <Route path="/weather" element={<WeatherDashboardApp />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
