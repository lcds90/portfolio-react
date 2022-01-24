import Head from 'next/head';
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
		const anchor = document.querySelector(link);

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
			<Head>
				<title>LCDS | Portfólio</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta property='og:type' content='profile' />
				<meta property='og:title' content='LCDS | Portfólio' />
				<meta
					property='og:description'
					content='Portfólio de Leonardo Santos, Desenvolvedor Web'
				/>
				<meta property='og:url' content='' />
				<meta
					property='og:image'
					content='https://raw.githubusercontent.com/lcds90/portfolio-react/main/assets/img/profile2.png'
				/>
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/lcds90/portfolio-react/main/assets/img/profile2.png" type="image/x-icon" />
			</Head>
			<header className={styles.header}>
				<Navbar>{topics.map(generateNavItems)}</Navbar>
			</header>
			<section className={styles.main}>
				<span id='home'></span>
				<HomeInfo />
				<About />
				<span id='projects'></span>
				<Projects />
			</section>
		</main>
	);
}
