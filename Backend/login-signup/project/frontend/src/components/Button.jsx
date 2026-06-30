import React from 'react';
import './Button.css';

const Button = ({ children, loading, type = 'submit', variant = 'primary', ...rest }) => {
  return (
    <button
      type={type}
      className={`btn btn--${variant}${loading ? ' btn--loading' : ''}`}
      disabled={loading}
      {...rest}
    >
      {loading ? 'Please wait…' : children}
    </button>
  );
};

export default Button;
