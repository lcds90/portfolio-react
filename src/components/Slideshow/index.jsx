import React, { useRef, useEffect } from 'react'
import Box from '@material-ui/core/Box';
import { gsap } from "gsap";

import { makeStyles } from '@material-ui/core/styles';

const UseStyles = makeStyles((theme) => ({
    img: {
        width: '100%',
        // display: 'none',
    }
}));


const Slideshow = () => {
    const classes = UseStyles();
    const imgRef = useRef([]);
    imgRef.current = [0, 0, 0].map(
        (ref, index) => imgRef.current[index] = React.createRef()
    );
    useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, defaults: { duration: 1 } });
    console.log(imgRef.current)
        timeline.fromTo(imgRef.current[0].current, { opacity: 0 }, { opacity: 1 })
        timeline.fromTo(imgRef.current[0].current, { opacity: 1 }, { opacity: 0 })
        timeline.fromTo(imgRef.current[1].current, { opacity: 0 }, { opacity: 1})
        timeline.fromTo(imgRef.current[1].current, { opacity: 1 }, { opacity: 0})
        timeline.fromTo(imgRef.current[2].current, { opacity: 0 }, { opacity: 1 })
        timeline.fromTo(imgRef.current[2].current, { opacity: 1 }, { opacity: 0 })
    }, [imgRef]);

    return (
        <section>
            <Box bgcolor="var(--theme-dark)" width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                <img ref={imgRef.current[0]} className={classes.img} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="" />
                <img ref={imgRef.current[1]} className={classes.img} src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" alt="" />
                <img ref={imgRef.current[2]} className={classes.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHbxufuw51m3-48-NxrDjWZw1ljkXtvoA4rw&usqp=CAU" alt="" />
            </Box>
        </section>
    )
}

export default Slideshow
