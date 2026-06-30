import React from 'react';
import './FormField.css';

const FormField = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  rightSlot,
  required = true,
}) => {
  return (
    <label className="field">
      <span className="field__label">{label}</span>
      <div className="field__control">
        <input
          className={`field__input${error ? ' field__input--error' : ''}`}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
        />
        {rightSlot}
      </div>
      {error && <span className="field__error">{error}</span>}
    </label>
  );
};

export default FormField;
