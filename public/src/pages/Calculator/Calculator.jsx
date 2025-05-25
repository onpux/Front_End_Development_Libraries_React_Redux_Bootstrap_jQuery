import React, { useState } from "react";
import "./calculator.css";
import { evaluateExpression } from "./utils";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const deleteLast = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      const res = evaluateExpression(input);
      setResult(res);
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container calculator-container mt-5">
      <h2 className="text-center mb-4">Calculadora</h2>
      <div className="calculator-display mb-3">
        <input
          type="text"
          className="form-control text-end"
          value={input}
          readOnly
          placeholder="0"
        />
        <div className="result-display text-end text-secondary">{result}</div>
      </div>

      <div className="calculator-buttons row gx-2 gy-2">
        {[
          ["7", "8", "9", "/"],
          ["4", "5", "6", "*"],
          ["1", "2", "3", "-"],
          ["0", ".", "=", "+"],
          ["C", "←"],
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="col-12 d-flex justify-content-between">
            {row.map((btn, i) => (
              <button
                key={i}
                className={`btn btn-${btn === "=" ? "success" : btn === "C" ? "danger" : "primary"} flex-fill mx-1`}
                onClick={() => {
                  if (btn === "=") calculate();
                  else if (btn === "C") clearInput();
                  else if (btn === "←") deleteLast();
                  else handleClick(btn);
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
