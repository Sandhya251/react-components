import React from 'react';
import './input.css';

function Input({ label, value, onChange, placeholder = '', type = 'text', error = '' }) {
  return (
    <div className="input-group">
      {label && <label className="input-label">{label}</label>}
      <input
        className={`input-field ${error ? 'input-error' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
      />
      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Input;
