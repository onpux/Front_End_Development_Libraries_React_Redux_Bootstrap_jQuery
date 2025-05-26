// /src/Calculator/components/Button.jsx
import React from 'react';

const Button = ({ label, onClick, className = '' }) => {
  return (
    <button
      className={`btn btn-lg btn-outline-secondary ${className}`}
      style={{ width: '70px', height: '70px', margin: '5px', fontSize: '1.5rem' }}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

export default Button;
