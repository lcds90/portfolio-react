import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import HttpTwoToneIcon from '@material-ui/icons/HttpTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
    background: 'var(--theme-dark)',
    color: 'white'
  },
  actions: {
    background: 'var(--theme-alt-one)'
  },
  buttons: {
    background: 'grey',
    borderRadius: '5px'
  },
  column: {
    flexBasis: '50%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

function AccordionProject({ project }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{project.title}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{project.description}</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <div className={classes.column}>
            {project.info}
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              {project.techs}
            </Typography>
          </div>
        </AccordionDetails>
        <Divider />
        <AccordionActions className={classes.actions}>
          <Button className={classes.buttons} size="small">
            <HttpTwoToneIcon />
          </Button>
          <Button className={classes.buttons} size="small" >
            <GitHubIcon />
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

AccordionProject.propTypes = {
  project: PropTypes.object,
}

export default AccordionProject;
