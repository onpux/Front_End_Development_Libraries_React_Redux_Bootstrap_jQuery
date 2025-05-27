// /src/components/Calculator.jsx
import React, { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const agregar = (valor) => {
    setInput(input + valor);
  };

  const calcular = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  const limpiar = () => setInput("");

  return (
    <div className="card p-3">
      <h3>Calculadora</h3>
      <input
        className="form-control mb-3"
        value={input}
        readOnly
      />
      <div className="btn-group mb-2">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "0", "/", "."].map((val) => (
          <button key={val} onClick={() => agregar(val)} className="btn btn-secondary">
            {val}
          </button>
        ))}
      </div>
      <div>
        <button onClick={calcular} className="btn btn-success me-2">=</button>
        <button onClick={limpiar} className="btn btn-danger">C</button>
      </div>
    </div>
  );
};

export default Calculator;
