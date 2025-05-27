// /src/components/Dashboard.jsx
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => res.json())
      .then((data) => setDatos(data.bpi));
  }, []);

  return (
    <div className="card p-3">
      <h3>Dashboard Criptomonedas</h3>
      {datos ? (
        <ul className="list-group">
          {Object.keys(datos).map((key) => (
            <li key={key} className="list-group-item">
              {key}: {datos[key].rate}
            </li>
          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default Dashboard;
