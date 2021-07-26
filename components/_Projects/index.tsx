import { Project } from '@components/Project';

import style from './style.module.css';
import projects from './data';

export const Projects = () => {
  return (
    <>
    <section className={style.projectsContainer}>
      {projects.map((project) => {
          return (
            <article key={project.id}  className={style.presentation}>
                <Project projectInfo={project}/>
            </article>
          )
      })}
    </section>
    </>
  );
};