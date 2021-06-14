import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Home = () => {
    return (
        <div className="home">
            <div className="title">
                <h1>
                    <p>Olá!</p>
                    <p>Sou Leonardo Santos</p>
                    <p>Bem vindo ao meu portfólio!</p>
                </h1>
                <Link to="about">
                    <button>Sobre mim</button>
                </Link>
            </div>
            <div className="person">
                <img
                    src={`${process.env.PUBLIC_URL}/profile.png`}
                    alt="Foto de Leonardo Santos"
                />
            </div>
        </div>
    )
}
export default Home;