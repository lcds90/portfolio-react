import { useState } from 'react';

import styles from '@styles/Home.module.css';

import { HomeInfo } from '@components/_HomeInfo';
import { About } from '@components/_About';
import { Projects } from '@components/_Projects';
import { Navbar } from '@components/Navbar';
import { Button } from '@components/Button';
type Topic = {
  name: string;
  link: string;
  color: string;
};

export default function Home() {
  const topics: Topic[] = [
    { name: 'LCDS', link: '#home', color: 'primary' },
    { name: 'Sobre mim', link: '#about', color: 'light' },
    { name: 'Projetos', link: '#projects', color: 'light' },
  ];

  const locateProject = (link: any) => {
    const anchor = document.querySelector(link)

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const generateNavItems = (topic: Topic) => {
    return (
      <li key={topic.name} onClick={() => locateProject(topic.link)}>
        <Button text={topic.name} color={topic.color} />
      </li>
    );
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Navbar>{topics.map(generateNavItems)}</Navbar>
      </header>
      <section className={styles.main}>
        <span id="home"></span>
        <HomeInfo />
        <About />
        <span id="projects"></span>
        <Projects />
      </section>
    </main>
  );
}
