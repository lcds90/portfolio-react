import Image from 'next/image';

import style from './style.module.css';

import profilePic from '@img/profile.png';
import svg_html5 from '@svg/html5.svg';
import svg_css3 from '@svg/css3.svg';
import svg_javascript from '@svg/javascript.svg';
import svg_react from '@svg/react.svg';
import svg_node from '@svg/nodejs.svg';
import svg_ts from '@svg/typescript.svg';

export const HomeInfo = () => {
  type SVGImage = {
    classname: string;
    svg: any;
    alt: string;
  };

  const svgs: SVGImage[] = [
    {
      classname: style.html5,
      svg: svg_html5,
      alt: 'Logo com a tecnologia HTML5',
    },
    {
      classname: style.css3,
      svg: svg_css3,
      alt: 'Logo com a tecnologia CSS3',
    },
    {
      classname: style.js,
      svg: svg_javascript,
      alt: 'Logo com a linguagem de programação Javascript',
    },
    {
      classname: style.react,
      svg: svg_react,
      alt: 'Logo com a biblioteca React',
    },
    {
      classname: style.node,
      svg: svg_node,
      alt: 'Logo com o runtime Node JS',
    },
    {
      classname: style.ts,
      svg: svg_ts,
      alt: 'Logo com o superset Typescript',
    },
  ];

  const generateStacks = () => {
    return svgs.map((svgObj) => (
      <div className={`${style.stack} ${svgObj.classname}`}>
        <Image layout='fixed' src={svgObj.svg} alt={svgObj.alt} />
      </div>
    ));
  };

  return (
    <section className={style.section}>
      <article className={style.articleInfo}>
        <h1 className={style.nameProfile}>Leonardo Santos</h1>
        <Image
          className={style.profile}
          width='400px'
          height='400px'
          src={profilePic}
          alt='Picture of the author'
        />
      </article>
      <article>
        <h2 className={style.welcome}>
          Olá, seja bem vindo ao meu portfólio.
        </h2>
        <div className={style.grid}>
          <p className={style.description}>
            Aspirante á <b>Desenvolvedor Web Fullstack</b><br />
            <b>Apaixonado</b> por tecnologia <br />
            <b>Estudante</b> de Desenvolvimento Web Fullstack na <b>Trybe</b><br />
            Formado em <b>Tecnologia em Sistemas para Internet</b>
          </p>
          <p className={style.stacks}>{generateStacks()}</p>
        </div>
      </article>
    </section>
  );
};
