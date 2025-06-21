import React from 'react';
import './Hero.css';
import heroImage from '../assets/coast.jpg';

// Composant Hero : bannière principale de la page d'accueil
const Hero = () => {
    return (
        // Conteneur principal du Hero
        <div className="hero">
            {/* Image de fond */}
            <img src={heroImage} alt="Paysage" className="hero-image" />
            {/* Texte affiché sur l'image */}
            <div className="hero-text">
                {/* Version desktop du texte */}
                <span className="hero-text-line desktop">Chez vous, partout et ailleurs</span>
                {/* Version mobile du texte (découpée en deux lignes) */}
                <span className="hero-text-line mobile">Chez vous,</span>
                <span className="hero-text-line mobile">partout et ailleurs</span>
            </div>
        </div>
    );
};

// Exportation du composant pour l'utiliser ailleurs
export default Hero; 