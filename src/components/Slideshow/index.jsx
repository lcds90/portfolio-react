import React from 'react';
import Box from '@material-ui/core/Box';
// import { gsap } from "gsap";
import PropTypes from 'prop-types';
/* 
import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const renderProjectsImages = (image) => {
  const classes = UseStyles();
  return <img className={classes.img} src={image} alt='' />;
}; */

const Slideshow = (props) => {
  console.log(typeof props);
    return (
    <section>
      <Box
        bgcolor='var(--theme-dark)'
        overflow='hidden'
        width='100%'
        height='200px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        boxShadow='0 5px 10px var(--theme-dark)'
        border='2px double var(--theme-light)'
      >
        {/* {props.images.map(renderProjectsImages)}; */}
      </Box>
    </section>
  );
};

Slideshow.propTypes = {
  images: PropTypes.any,
};

export default Slideshow;
