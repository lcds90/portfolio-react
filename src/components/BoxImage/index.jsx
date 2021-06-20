import React from 'react';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import FullScreenImage from '../FullScreenImage';
import { makeStyles } from '@material-ui/core/styles';

const BoxImage = (props) => {
  const UseStyles = makeStyles((theme) => ({
    box: {
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${props.project.images[0]})`,
      filter: 'blur(1px)',
    },
    boxBtn: {
      transform: 'translate(-50%, -50%)',
      top: '50%',
      left: '50%',
      position: 'absolute',
    }
  }));

  const classes = UseStyles();

  return (
    <section style={{ position: 'relative' }}>
      <Box
        overflow='hidden'
        width='100%'
        height='200px'
        display='flex'
        alignItems='center'
        justifyContent='center'
        boxShadow='0 5px 10px var(--theme-dark)'
        border='2px double var(--theme-light)'
        className={classes.box}
      ></Box>
      <Box className={classes.boxBtn}>
        <FullScreenImage project={props.project} />
      </Box>
    </section>
  );
};

BoxImage.propTypes = {
  project: PropTypes.any,
};

export default BoxImage;
