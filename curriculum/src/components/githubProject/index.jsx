import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export function GithubProject(props) {
  return (
    <div className={styles.container}>
      <a
        href={props.project.html_url}
        className={styles.link}
        target="_blank"
        rel="noopener noreferrer">
        {props.project.name.replace(/-/g, " ")}
      </a>
      <p>{props.project.description}</p>
    </div>
  );
}
