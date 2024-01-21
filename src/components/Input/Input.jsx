import React from "react";
import styles from "./Input.module.css";

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      className={styles.Inputs}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
