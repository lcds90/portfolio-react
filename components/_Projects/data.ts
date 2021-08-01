import pixelsart01 from '@projects/pixelsart01.png';
import pixelsart02 from '@projects/pixelsart02.png';
import playgroundFunctions01 from '@projects/playgroundFunctions1.png';
import playgroundFunctions02 from '@projects/playgroundFunctions2.png';
import trybewartsDesktop01 from '@projects/trybewarts01.png';
import trybewartsDesktop02 from '@projects/trybewarts02.png';
import trybewartsDesktop03 from '@projects/trybewarts03.png';
import trybewartsDesktop04 from '@projects/trybewarts04.png';
import trybewartsMobile01 from '@projects/trybewarts05.png';
import trybewartsMobile02 from '@projects/trybewarts06.png';
import todoDesktop from '@projects/todo-desktop.png';
import todoMobile from '@projects/todo-desktop.png';
import cotacoesFront from '@projects/cotacoes-front.png';
import cotacoesBack from '@projects/cotacoes-back.png';
import gameDinoOne from '@projects/game-dino.png';
import gameDinoTwo from '@projects/game-dino2.png';
import gameDinoThree from '@projects/game-dino3.png';
import gameGeniusOne from '@projects/game-genius.png';
import gameGeniusTwo from '@projects/game-genius2.png';
import gameRescueOne from '@projects/game-rescue.png';
import gameRescueTwo from '@projects/game-rescue2.png';
import gameRescueThree from '@projects/game-rescue3.png';
import gameMemoryDesktopOne from '@projects/game-memory-desktop.png';
import gameMemoryDesktopTwo from '@projects/game-memory-desktop2.png';
import gameMemoryMobileOne from '@projects/game-memory-mobile.png';
import gameMemoryMobileTwo from '@projects/game-memory-mobile2.png';
import netflixDesktopOne from '@projects/netflix-desktop2.png';
import netflixDesktopTwo from '@projects/netflix-desktop3.png';
import netflixDesktopThree from '@projects/netflix-desktop.png';
import netflixMobileOne from '@projects/netflix-mobile.png';
import netflixMobileTwo from '@projects/netflix-mobile2.png';
import instagramDesktop from '@projects/instagram-desktop.png';
import instagramMobile from '@projects/instagram-mobile.png';

const projects = [
  {
    id: 'todo',
    title: '[Projeto] To Do List',
    description: 'Lista de tarefas com Javascript',
    info: 'Este projeto consiste em uma lista de tarefas, onde é possível selecionar tarefas, marcar como finalizadas e salvar em local storage, utilizado bibliotecas: sweerAlert (alertas) e GSAP (animações).',
    techs: ['HTML', 'CSS', 'Javascript', 'Greensock', 'sweetAlert2'],
    links: {
      deploy: 'http://todo-list.lcds.me/',
      github: 'https://github.com/lcds90/project-todo-list',
    },
    images: [todoDesktop, todoMobile],
  },
  {
    id: 'trybewarts',
    title: '[Projeto] Trybewarts',
    description: 'Projeto em grupo realizado na Trybe, praticando e exercendo conceitos de formulários HTML e CSS com responsividade',
    info: 'Este projeto consiste em um simples formulário onde é aplicado conceitos relacionados a semântica HTML e responsividade (mobile first) com CSS, onde ainda pude aplicar conceitos relacionados a transições e animações.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'https://lcds90.github.io/project-trybewarts/',
      github: 'https://github.com/lcds90/project-trybewarts',
    },
    images: [trybewartsDesktop01, trybewartsDesktop02, trybewartsDesktop03, trybewartsDesktop04, trybewartsMobile01, trybewartsMobile02],
  },
  {
    id: 'playground',
    title: '[Projeto] Playground Functions',
    description: 'Projeto realizado na Trybe',
    info: 'Exercicios de logica de Javascript, porem no projeto foi implementado uma visualizacao para as funcoes.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'https://lcds90.github.io/project-playground-functions/',
      github: 'https://github.com/lcds90/project-playground-functions',
    },
    images: [playgroundFunctions01, playgroundFunctions02],
  },
  {
    id: 'pixelsart',
    title: '[Projeto] Pixels Art',
    description: 'Projeto realizado na Trybe',
    info: 'O projeto foi construindo praticando e exercendo conceitos de HTML e CSS, com manipulacao do DOM Javascript.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'https://lcds90.github.io/project-pixels-art/',
      github: 'https://github.com/lcds90/project-pixels-art',
    },
    images: [pixelsart01, pixelsart02],
  },
  {
    id: 'cotacoes',
    title: '[Projeto] Cotações Financeiras',
    description: 'Dashboard de cotações com Angular e Spring Boot',
    info: 'Este projeto consiste em um dashobard de lista de cotações, o projeto foi realizado com o framework front-end Angular e tendo como back end Java, através de uma API realizada com Spring Boot. (Demora um pouco a carregar, pois API esta em modo de sleep)',
    techs: ['Angular', 'Java (Spring Boot)'],
    links: {
      deploy: 'https://lcds90.github.io/cotacoes-santander-ng/dashboard',
      github: 'https://github.com/lcds90/cotacoes-santander-ng',
    },
    images: [cotacoesFront, cotacoesBack],
  },
  {
    id: 'gameDino',
    title: '[Jogo] Dino Run',
    description:
      'Jogo baseado no jogo do dinossauro do navegador Google Chrome',
    info: 'Este projeto consiste em um jogo do dinossauro com tecnologias Web, recriando com o cores o clássico do navegador Google Chrome quando não há conexão disponível para navegar na internet.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'http://game-dino.lcds.me/',
      github: 'https://github.com/lcds90/game-dino',
    },
    images: [gameDinoOne, gameDinoTwo, gameDinoThree],
  },
  {
    id: 'gameGenius',
    title: '[Jogo] Genius',
    description: 'Recriação web baseado no jogo Genius',
    info: 'Este projeto consiste na recriação do jogo Genius com tecnologias Web, possui trilha sonora própria e auxílio da biblioteca sweetalert para alertas.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'http://game-genius.lcds.me/',
      github: 'https://github.com/lcds90/game-genius',
    },
    images: [gameGeniusOne, gameGeniusTwo],
  },
  {
    id: 'gameRescue',
    title: '[Jogo] Rescue',
    description: 'Jogo espacial contra naves espaciais',
    info: 'Este projeto consiste em um jogo onde você controla uma espacionave, precisa sempre estar atento para proteger seu companheiro espacial e acabar com os inimigos, construido com tecnologias web.',
    techs: ['HTML', 'CSS', 'Javascript', 'Jquery'],
    links: {
      deploy: 'http://game-rescue.lcds.me/',
      github: 'https://github.com/lcds90/game-resgate',
    },
    images: [
      gameRescueOne,
      gameRescueTwo,
      gameRescueThree,
    ],
  },
  {
    id: 'gameMemory',
    title: '[Jogo] Memória Web',
    description: 'Jogo de memória realizado sobre tecnologias Web',
    info: 'Este projeto consiste em um jogo de memória com tecnologias Web, utilizando as tecnologias padrões com manipulação de DOM e identifação de padrões para reconhecimento da mesma tecnologia ao ser escolhida.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'http://game-memory.lcds.me/',
      github: 'https://github.com/lcds90/game-memory',
    },
    images: [
      gameMemoryDesktopOne,
      gameMemoryDesktopTwo,
      gameMemoryMobileOne,
      gameMemoryMobileTwo,
    ],
  },
  {
    id: 'netflix',
    title: '[Réplica] Netflix',
    description: 'Clone de interface do Netflix',
    info: 'Este projeto consiste em um clone da interface do serviço de streaming Netflix, porém no projeto foi utilizado a API do themoviedb para mostrar o catalogo de filmes e séries exibidas',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'http://netflix.lcds.me/',
      github: 'https://github.com/lcds90/project-netflix',
    },
    images: [
      netflixDesktopOne,
      netflixDesktopTwo,
      netflixDesktopThree,
      netflixMobileOne,
      netflixMobileTwo,
    ],
  },
  {
    id: 'instagram',
    title: '[Réplica] Instagram',
    description: 'Clone de interface de Login do Instagram',
    info: 'Este projeto consiste em um clone da interface da tela de login do Instagram.',
    techs: ['HTML', 'CSS', 'Javascript'],
    links: {
      deploy: 'http://instagram.lcds.me/',
      github: 'https://github.com/lcds90/project-instagram',
    },
    images: [
      instagramDesktop,
      instagramMobile
    ],
  },
];

export default projects;
