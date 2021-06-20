import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const UseStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontSize: '1.2rem',
  },
  heading: {
    margin: '40px 0',
    borderBottom: '2px double var(--theme-light)',
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'var(--theme-dark)',
  },
}));

const About = () => {
  const classes = UseStyles();
  return (
    <Box className={classes.root} flexGrow='1' margin='5vh 0'>
      <h1 className={classes.heading}>Sobre mim</h1>
      <ScrollAnimation
        offset={400}
        duration={1}
        animateIn='fadeInDown'
        animateOut='fadeOutUp'
      >
        <p>
          Desde cedo sempre fui apaixonado por tecnologia, e explorar-la só me
          faz cada vez mais estudar sobre o assunto.
        </p>
      </ScrollAnimation>
      <ScrollAnimation
        offset={400}
        duration={1}
        animateIn='fadeInUp'
        animateOut='fadeOutDown'
      >
        <p>
          Através da influência que tive desde cedo através de jogos, acabei me
          interessando por questões sobre o desenvolvimento de tecnologias.
        </p>

        <p>
          Seguindo dessa ambição que obtive e reflexão sobre os avanços da
          tecnologia com o tempo, busquei determinação para prosseguir e seguir
          minha formação voltado para a área do desenvolvimento.
        </p>

        <p>
          Bolsista do ProUni realizei tecnológo especializado em sistemas para
          internet e atualmente estou evoluindo estudando sobre Desenvolvimento
          Web na Trybe.
        </p>
      </ScrollAnimation>
    </Box>
  );
};

export default About;
