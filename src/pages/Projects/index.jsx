import React from 'react'
import './style.css';
import projects from './data';
import Grid from '@material-ui/core/Grid';
import AccordionProject from '../../components/AccordionProject';
import Slideshow from '../../components/Slideshow';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

const UseStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    line: {
        margin: '10vh 0 30vh 0',
    }
}));

const locateProject = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(`#${event.target.attributes.anchor.textContent}`);

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

const renderProjectsTitle = (project) => {
    return <div onClick={locateProject} className="project-title" anchor={project.title.split('')[0]+project.id} key={project.id}>{project.title}</div>;
}

const renderProjects = (project) => {
    const classes = UseStyles();
    return (
        <li key={project.id} id={project.title.split('')[0]+project.id} className={classes.line}>
            <Grid justify="center" alignItems="center" container spacing={3}>
                <Grid item md={6} xs={12}>
                    <ScrollAnimation offset={500} duration={1} animateIn="backInLeft" animateOut="backOutRight">
                        <AccordionProject project={project} />
                    </ScrollAnimation>
                </Grid>
                <Grid item md={6} xs={12}>
                    <ScrollAnimation offset={500} duration={2} animateIn="backInRight " animateOut="backOutLeft">
                        <Slideshow />
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </li>
    );
}

function SetNavbar(props) {
    const { children } = props;
    console.log(window.screen.width);
    const isMobile = window.screen.width <= 768 ? true : false
    const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: isMobile ? 1000 : 800
    });
    return (
        <Slide direction="up"  in={trigger}>
            {children}
        </Slide>
    );
}

SetNavbar.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

const Projects = (props) => {
    return (
        <>
            <div className="projects">
                <h1>Projetos</h1>

                <ul>
                    {projects.map(renderProjects)}
                </ul>
            </div>
            <SetNavbar {...props}>
                <div className="navbar">
                    {projects.map(renderProjectsTitle)}
                </div>
            </SetNavbar>
        </>
    )
}

export default Projects