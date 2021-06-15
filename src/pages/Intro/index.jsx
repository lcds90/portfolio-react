import React, { useRef, useEffect } from 'react'
import { gsap } from "gsap";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


const UseStyles = makeStyles((theme) => ({
    message: {
        width: '50vw',
        height: '25vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: 'var(--theme-alt-one)',
        fontSize: '2.5rem',
        borderRadius: '25px',
        transition: 'background-color 2s'
    }
}));

const time = () => {
    let time = new Date();
    time = time.getHours();
    if (time >= 6 && time <= 12) return 'Bom Dia!'
    if (time > 12 && time <= 18) return 'Boa Tarde!'
    if (time > 18 && time <= 23) return 'Boa Noite!'
    return 'Olá!'
}


const Intro = () => {

    const lineUpRef = useRef(null);
    const lineDownRef = useRef(null);
    const introductionRef = useRef(null);
    const messageRef = useRef(null);
    const classes = UseStyles();

    useEffect(() => {
        const timelineMessage = gsap.timeline({ defaults: { duration: 2, ease: 'power2' } });
        const timelineWelcome = gsap.timeline({ defaults: { duration: 3, ease: 'power3' } });
        const timelineLine = gsap.timeline({ defaults: { duration: 2, ease: 'linear' } });

        timelineMessage.from(messageRef.current, { opacity: 0, backgroundColor: 'var(--theme-dark)', duration: 2.5, x: 200 });
        timelineMessage.to(messageRef.current, { backgroundColor: '', duration: 2.5 });
        timelineMessage.to(messageRef.current, { x: 25, y: 25, ease: 'bounce', duration: 2.5 });
        timelineWelcome.from(introductionRef.current, { opacity: 0, backgroundColor: '', duration: 2.5, x: 200 });
        timelineWelcome.to(introductionRef.current, { backgroundColor: 'var(--theme-dark)', duration: 2.5 });
        timelineWelcome.to(introductionRef.current, { x: -25, y: -25, ease: 'bounce', backgroundColor: '', duration: 2.5 });
        
        timelineLine.fromTo(lineDownRef.current, { duration: 4, width: '100vw', height: '2px', backgroundColor: 'var(--theme-light)', borderWidth: 0 }, { width: '0%' })
        timelineLine.fromTo(lineUpRef.current, { duration: 4, width: '100vw', height: '2px', backgroundColor: 'var(--theme-alt-one)', borderWidth: 0 }, { width: '0%' }, '-=1')
        timelineLine.fromTo(lineUpRef.current, { duration: 4, width: '0%', height: '2px', backgroundColor: 'var(--theme-alt-one)', borderWidth: 0 }, { width: '100%', opacity: 0 })
        timelineLine.fromTo(lineDownRef.current, { duration: 4, width: '0%', height: '2px', backgroundColor: 'var(--theme-alt-one)', borderWidth: 0 }, { width: '100%' , opacity: 0}, '-=1')
        timelineLine.set(lineDownRef.current, { display: 'none'});
        timelineLine.set(lineUpRef.current, { display: 'none'});
    }, [messageRef, lineDownRef, lineUpRef, introductionRef]);
    return (
        <div>
            <Box display="flex" flexDirection="column" alignItems="center" width="100vw" height="80vh" justifyContent="center">
                <hr ref={lineUpRef} />
                <span className={classes.message} ref={messageRef}>
                    {time()}
                </span>
                <hr ref={lineDownRef} />
                <span className={classes.message} ref={introductionRef}>
                    Seja bem vindo ao meu portfólio!
                </span>

            </Box>
        </div>
    )
}

export default Intro
