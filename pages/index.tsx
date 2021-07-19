import { useState } from 'react';

import styles from '@styles/Home.module.css';

import { HomeInfo } from '@components/_HomeInfo';
import { About } from '@components/_About';
import { Navbar } from '@components/Navbar';
import { Button } from '@components/Button'

type Topic = {
  name: string;
  link: string;
  color: string;
};

type TopicToSelect = {
  [key: string]: JSX.Element;
};

export default function Home() {

  const topics: Topic[] = [
    { name: 'Home', link: '', color: 'primary' },
    { name: 'About', link: 'about', color: 'light' },
  ];

  const generateNavItems = (topic: Topic) => {
    return (
      <li key={topic.name} onClick={() => console.log(topic)}>
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
          <HomeInfo />
          <About />
      </section>
      <footer className={styles.footer}>
        Bons estudos e sempre acredite em você!
      </footer>
    </main>
  );
}
