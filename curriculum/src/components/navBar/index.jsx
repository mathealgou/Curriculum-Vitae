import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
export function NavBar() {
  return (
    <div className={styles.wrapper}>
      <h2>Matheus Goulart</h2>
      <nav>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/competencies" className={styles.link}>
          Competências
        </Link>
      </nav>
    </div>
  );
}
