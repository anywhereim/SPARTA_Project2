import React from "react";
import styles from "./Input.module.css";

export default function Input({
  deadline,
  type,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      className={styles.Inputs}
      type={type}
      deadline={deadline}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
