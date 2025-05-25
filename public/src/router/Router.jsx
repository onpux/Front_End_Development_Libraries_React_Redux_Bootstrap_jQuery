import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "../pages/Calculator/Calculator";
import Dashboard from "../pages/Dashboard/Dashboard";
import ToDoApp from "../pages/ToDoApp/ToDoApp";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo" element={<ToDoApp />} />
        <Route path="*" element={<ToDoApp />} /> {/* Ruta por defecto */}
      </Routes>
    </Router>
  );
}
