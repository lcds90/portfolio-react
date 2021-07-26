import { Education } from '@components/Education';

import style from './style.module.css';

export const About = () => {
  return (
    <>
    <section id="about" className={style.aboutContainer}>
      <a href="./Curriculo_Leonardo_Santos.pdf" download="Curriculo_Leonardo_Santos_Dev" className={style.cv}>Download CV</a>
      <article  className={style.presentation}>
        Sou um profissional dedicado com muita paixão por tecnologia e trabalho
        em equipe, tenho prioridade em aprimorar meus conhecimentos em relação
        como desenvolvedor fullstack. Sou dedicado ao objetivo, e possuo
        facilidade de aprendizado para cumprir o que me é proposto e dar o meu
        melhor sempre.
      </article>
    </section>
    <section className={style.aboutContainer}>
      <Education />
    </section>
    </>
  );
};
