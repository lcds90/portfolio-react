import React from 'react';
import './style.css';
import projects from './data';
import Grid from '@material-ui/core/Grid';
import AccordionProject from '../../components/AccordionProject';
import Slideshow from '../../components/Slideshow';
import { makeStyles } from '@material-ui/core/styles';
import ScrollAnimation from 'react-animate-on-scroll'

const UseStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    line: {
        margin: '40px 0',
    }
}));

const renderRow = (project) => {
    const classes = UseStyles();
    return (
        <li key={project.id} className={classes.line}>
            <Grid justify="center" alignItems="center" container spacing={3}>
                <Grid item md={6} xs={12}>
                    <ScrollAnimation offset={120} duration={1} animateIn="backInLeft" animateOut="backOutRight">
                        <AccordionProject project={project} />
                    </ScrollAnimation>
                </Grid>
                <Grid item md={6} xs={12}>
                    <ScrollAnimation offset={300} duration={2} animateIn="backInRight " animateOut="backOutLeft">
                        <Slideshow />
                    </ScrollAnimation>
                </Grid>
            </Grid>
        </li>
    );
}

const Projects = () => {
    return (
        <div className="projects">
            <h1>Projetos</h1>
            <ul>{projects.map(renderRow)}</ul>
        </div>
    )
}

export default Projects
