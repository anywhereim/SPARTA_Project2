import React from "react";

export default function Input({ type, placeholder, value, onChange }) {
  const className = "Inputs";

  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
