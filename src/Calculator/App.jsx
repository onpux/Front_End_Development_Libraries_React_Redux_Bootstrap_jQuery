// /src/Calculator/App.jsx
import React, { useState } from 'react';
import Button from './components/Button';
import './styles/calculator.css';

const App = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '=') {
      try {
        // Evalúa la expresión de forma segura
        // Nota: Para mayor seguridad en producción, reemplazar eval
        // con un parser matemático como mathjs
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  const botones = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C']
  ];

  return (
    <div className="calculator-container">
      <div className="display">{input || '0'}</div>
      {botones.map((fila, i) => (
        <div key={i} className="d-flex justify-content-center">
          {fila.map((btn) => (
            <Button
              key={btn}
              label={btn}
              onClick={handleClick}
              className={btn === 'C' ? 'btn-danger' : btn === '=' ? 'btn-success' : ''}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
