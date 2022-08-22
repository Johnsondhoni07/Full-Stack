import React from "react";

const InputField = ({
  value,
  label,
  htmlFor,
  name,
  placeholder,
  type,
  onChange,
  className,
  onBlur,
}) => (
  <div className="form-group">
    {label && <label htmlFor={htmlFor}>{label}</label>}
    <input
      type={type}
      value={value}
      name={name}
      className={`form-control ${className}`}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
    />
  </div>
);

export default InputField;
