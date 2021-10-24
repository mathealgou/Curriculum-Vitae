import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export function Paragraph(props) {
  return (
    <div className={styles.paragraph}>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
}
