import React, { useEffect } from "react";
import "./dashboard.css";
import { initializeDashboard } from "./dashboard.js";

export default function Dashboard() {
  useEffect(() => {
    initializeDashboard(); // Se ejecuta una vez montado el componente
  }, []);

  return (
    <div className="container mt-5 dashboard-container">
      <h2 className="text-center mb-4">Dashboard de Criptomonedas</h2>
      <div className="row" id="crypto-dashboard">
        {/* Aquí se renderizarán las tarjetas de criptomonedas vía jQuery */}
      </div>
    </div>
  );
}
