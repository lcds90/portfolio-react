import React, { useRef, useEffect } from 'react'

import Intro from './pages/Intro'
import Home from './pages/Home';
import About from './pages/About';

import Navbar from './components/Navbar';
import Projects from './pages/Projects';

import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fade from '@material-ui/core/Fade';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Toolbar from '@material-ui/core/Toolbar';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import "animate.css/animate.compat.css";
import { gsap } from "gsap";
import './App.css';

const UseStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    right: '0vw',
    bottom: 0,
    backgroundColor: 'var(--theme-alt-one)'
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Fade in={trigger}>
      <div onClick={handleClick} role="presentation" >
        {children}
      </div>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function App(props) {
  const classes = UseStyles();
  const introRef = useRef(null);
  const pageRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({ defaults: { duration: 2 } });

    timeline.set('.app', { overflow: 'hidden' });
    timeline.to(introRef.current, {opacity: 0, delay: 10, duration: 2});
    timeline.set(introRef.current, {display: 'none'});
    timeline.set(pageRef.current, {display: 'block'});
    timeline.set('.app', { overflow: 'normal' });
    timeline.from(pageRef.current, {opacity: 0, duration: 2});
  }, [introRef, pageRef]);
  return (
    <div className="app">
      <div id="intro" ref={introRef}>
        <Intro />
      </div>
      <div ref={pageRef} id="page">
        <Navbar />
        <Toolbar id="back-to-top-anchor" />
        <Home />
        <About />
        <Projects />
        <ScrollTop {...props}>
          <Fab className={classes.fab} size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </div>

    </div>
  );
}

export default App;
