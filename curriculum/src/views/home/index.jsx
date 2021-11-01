import React from "react";
import styles from "./styles.module.scss";
import { Paragraph } from "../../components/paragraph";
export function Home() {
  return (
    <div className={styles.container}>
      <h3>Experience</h3>
      <Paragraph
        title="Devoz"
        text="Development intern, 07/2021 - 10/2021 (React, Extjs, Vue.js, Nest, Docker, Express, Node-Red)"
      />
      <h3>Education</h3>
      <Paragraph
        title="CDISC"
        text="A short, introductory course to programming and web technologies."
      />
      <Paragraph
        title="Systems Development - SENAI"
        text="I'm still studying and, by the way, learning a lot. I'm currently in the second period, and should finish by the end of 2022."
      />
    </div>
  );
}
