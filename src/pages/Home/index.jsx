import React from 'react';
import './style.css';

const Home = () => {
    return (
        <section>
        <div className="home">
            <div className="person">
                <img
                    src='/img/profile.png'
                    alt="Foto de Leonardo Santos"
                />
            </div>
            <div className="title">
                <h1>
                    <p>Olá!</p>
                    <p>Sou Leonardo Santos</p>
                    <p>Bem vindo ao meu portfólio!</p>
                </h1>
                
                
            </div>
        </div>
       
        </section>
    )
}
export default Home;