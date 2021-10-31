import React, { useState, useEffect } from "react";
import { GithubProject } from "../githubProject";
import styles from "./styles.module.scss";

export function GithubProjectList() {
  const [projects, setProjects] = useState([]);
  useEffect(async () => {
    const data = await fetch("https://api.github.com/users/mathealgou/repos");
    const parsedData = await data.json();
    console.log(parsedData);
    await setProjects(parsedData);
  }, []);

  return (
    <div className={styles.container}>
      {projects
        ? projects.map((project) => (
            <GithubProject key={project.url} project={project} />
          ))
        : null}
    </div>
  );
}
