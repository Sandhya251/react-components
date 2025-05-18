import React from "react";
import './button.css';
function Button( {children,onClick, variant ="primary", disabled = false}){
    return (
      <button
      className={`btn ${variant} ${disabled ? 'disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}>
      {children}
      </button>
    );
}
export default Button;
