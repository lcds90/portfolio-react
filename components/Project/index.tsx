import { GoLinkExternal, GoGist } from 'react-icons/go';

import style from './style.module.css';
import { Slideshow } from '@components/Slideshow';

export const Project = ({ projectInfo }: any) => {
  const { title, description, info, techs, links, images } = projectInfo;
  const { deploy, github } = links;
  return (
    <section className={style.card}>
      <article className={style.info}>
        <section className={style.texts}>
          <article>
            <h1>{title}</h1>
            {description}
          </article>
          <article>{info}</article>
          <article>
            {techs.map((t: string, index: number) => (
              <span key={index}>{t}</span>
            ))}
          </article>
        </section>
        <a href={deploy} target='_blank' rel='noreferrer'>
          <GoLinkExternal /> Ver projeto
        </a>
        <a href={github} target='_blank' rel='noreferrer'>
          <GoGist /> Visualizar código
        </a>
      </article>
      <article className={style.images}>
        <Slideshow images={images} />
      </article>
    </section>
  );
};
