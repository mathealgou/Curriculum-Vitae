import React from "react";
import styles from "./styles.module.scss";
import { Paragraph } from "../../components/paragraph";
export function Home() {
  return (
    <div className={styles.container}>
      <h3>Experiência</h3>
      <Paragraph
        title="Devoz"
        text="Fui estagiário de julho a outubro de 2021. Sou extremamente grato pelo
        meu tempo lá. Foi onde aprendi sobre metodologias ágeis, docker, React,
        Vue, Nest, e tantos outros conhecimentos teóricos e práticos que me
        fizeram crescer muito como profissional."
      />
      <h3>Formação</h3>
      <Paragraph
        title="CDISC"
        text="Foi um curso que fiz em 2017. Apesar da curta duração, me deu uma base forte a respeito de lógica e solução de problemas, além de ser uma boa introdução a algumas tecnologias web."
      />
      <Paragraph
        title="Desenvolvimento de Sistemas - SENAI"
        text="Ainda estou cursando e, diga-se de passagem, aprendendo muito. Estou ataualmente no segundo período, e devo terminar até o final de 2022."
      />
    </div>
  );
}
