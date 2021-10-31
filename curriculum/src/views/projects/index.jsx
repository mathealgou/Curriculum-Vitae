import React from "react";
import styles from "./styles.module.scss";
import { Paragraph } from "../../components/paragraph";
import { GithubProjectList } from "../../components/githubProjectList";

export function Projects() {
  return (
    <div className={styles.container}>
      <h3>Projetos</h3>
      <GithubProjectList />
    </div>
  );
}
