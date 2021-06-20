import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Carousel from 'react-material-ui-carousel';
import PropTypes from 'prop-types';
import { Fade, Box } from '@material-ui/core';

const UseStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
    backgroundColor: 'var(--theme-dark)'
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  img: {
    width: 'auto',
    height: 'auto',
    maxWidth: '100%',
    maxHeight: '700px'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Fade ref={ref} {...props} />;
});

const renderProjectsImages = (image, index) => {
  const classes = UseStyles();
  return (
    <Box
    marginTop="25px"
    display="flex"
    justifyContent="center">
    <img
      id={'image' + index}
      key={index}
      className={classes.img}
      src={image}
      alt=''
    />
    </Box>
  );
};

export default function FullScreenImage(props) {
  const classes = UseStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Abrir imagens do projeto
      </Button>
      <Dialog disableScrollLock={true} open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.project.title} - {props.project.description}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box maxWidth="550px" minHeight="700px">
        <Carousel fullHeightHover={false} animation='fade' indicators={false} navButtonsAlwaysVisible='true'>
          {props.project.images.map(renderProjectsImages)}
        </Carousel>
        </Box>
      </Dialog>
    </div>
  );
}
FullScreenImage.propTypes = {
  project: PropTypes.any,
};