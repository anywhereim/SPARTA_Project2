import React from "react";
import styles from "./Head.module.css";

export default function Head({ first, second }) {
  return (
    <div className={styles.MainTitle}>
      <h1>{first}</h1>
      <h3>{second}</h3>
    </div>
  );
}
