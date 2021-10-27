import React from "react";
import styles from "./styles.module.scss";
import { Paragraph } from "../../components/paragraph";

export function Competencies() {
  return (
    <div className={styles.container}>
      <h3>Competências</h3>
      <Paragraph
        title="Front-end"
        text={
          "React  \nVue.Js \nExt.Js\nMaterial-UI \nHTML \nCSS \nSass \nElectron"
        }
      />
      <Paragraph title="Back-end" text={"Node  \nExpress \nNest \nREST"} />
      <Paragraph
        title="Outras habilidades"
        text={"Node  \nExpress \nNest \nREST"}
      />
    </div>
  );
}
