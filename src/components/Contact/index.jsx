import React from 'react';
import './style.css';

const Contact = () => {
    return (
        <footer>
            <div><em>Contato</em></div>
            <div className="circle-img">
                <a rel="noopener noreferrer" target="_blank" href="http://github.com/lcds90">
                    <img src={`${process.env.PUBLIC_URL}/svg/github.svg`} alt="Github" />
                </a>
            </div>

            <div className="circle-img">
                <a rel="noopener noreferrer" target="_blank" href="mailto:lcds90@gmail.com">
                    <img src={`${process.env.PUBLIC_URL}/svg/gmail.svg`} alt="Gmail" />
                </a>
            </div>

            <div className="circle-img">
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/lcds90/">
                    <img src={`${process.env.PUBLIC_URL}/svg/linkedin.svg`} alt="Linkedin" />
                </a>
            </div>

            <div className="circle-img">
                <img src={`${process.env.PUBLIC_URL}/svg/telegram.svg`} alt="Telegram" />
            </div>

            <div className="circle-img">
                <img src={`${process.env.PUBLIC_URL}/svg/whatsapp.svg`} alt="Whatsapp" />
            </div>
        </footer>
    )
}

export default Contact
