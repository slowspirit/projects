import React from 'react';
import portrait from '../images/portrait.jpeg'
import cv from '../files/Frontend-Rechitskiy_A.pdf'

function Navbar() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    {/* <img className="header__logo" src="./images/logo.png" /> */}
                    <h1 className="header__title">Recent projects</h1>
                    <a className="name-box" href="https://github.com/slowspirit/" target="_blank">
                        <div className="name-box__title">Aleksei</div>

                        <img className="name-box__image" src={portrait} alt="" />

                        <div className="name-box__title">Rechitskiy</div>
                    </a>
                    <a className="header__cv-link" href={cv} target="_blank">CV</a>
                </div>
            </div>
        </header>
    )
}

export default Navbar;