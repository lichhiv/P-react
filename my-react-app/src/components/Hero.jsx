import React from 'react';
import './Hero.css';
import heroImage from '../assets/coast.jpg';

const Hero = () => {
    return (
        <div className="hero">
            <img src={heroImage} alt="Paysage" className="hero-image" />
            <div className="hero-text">
                <span className="hero-text-line desktop">Chez vous, partout et ailleurs</span>
                <span className="hero-text-line mobile">Chez vous,</span>
                <span className="hero-text-line mobile">partout et ailleurs</span>
            </div>
        </div>
    );
};

export default Hero; 