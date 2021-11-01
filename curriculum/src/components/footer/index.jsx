import React from "react";
import styles from "./styles.module.scss";
import { Paragraph } from "../paragraph";

export function Footer() {
  return (
    <div className={styles.container}>
      <h4>Contact</h4>
      <p>
        mathealgou@gmail.com <br />
        (48) 99818-9938
      </p>
    </div>
  );
}
