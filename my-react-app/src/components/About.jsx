import React, { useState } from 'react';
import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';
import './About.css';

const About = () => {
    const [openSections, setOpenSections] = useState({
        fiabilite: false,
        respect: false,
        service: false,
        securite: false
    });

    const toggleSection = (section) => {
        setOpenSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    return (
        <div className="about-container">
            <ul className="about-list">
                <li className="about-item">
                    <div className="about-header" onClick={() => toggleSection('fiabilite')}>
                        <span>Fiabilité</span>
                        <img
                            src={openSections.fiabilite ? arrowUp : arrowDown}
                            alt={openSections.fiabilite ? "Flèche vers le haut" : "Flèche vers le bas"}
                        />
                    </div>
                    {openSections.fiabilite && (
                        <div className="about-content">
                            <p>Exemple de texte</p>
                        </div>
                    )}
                </li>

                <li className="about-item">
                    <div className="about-header" onClick={() => toggleSection('respect')}>
                        <span>Respect</span>
                        <img
                            src={openSections.respect ? arrowUp : arrowDown}
                            alt={openSections.respect ? "Flèche vers le haut" : "Flèche vers le bas"}
                        />
                    </div>
                    {openSections.respect && (
                        <div className="about-content">
                            <p>Exemple de texte</p>
                        </div>
                    )}
                </li>

                <li className="about-item">
                    <div className="about-header" onClick={() => toggleSection('service')}>
                        <span>Service</span>
                        <img
                            src={openSections.service ? arrowUp : arrowDown}
                            alt={openSections.service ? "Flèche vers le haut" : "Flèche vers le bas"}
                        />
                    </div>
                    {openSections.service && (
                        <div className="about-content">
                            <p>Exemple de texte</p>
                        </div>
                    )}
                </li>

                <li className="about-item">
                    <div className="about-header" onClick={() => toggleSection('securite')}>
                        <span>Sécurité</span>
                        <img
                            src={openSections.securite ? arrowUp : arrowDown}
                            alt={openSections.securite ? "Flèche vers le haut" : "Flèche vers le bas"}
                        />
                    </div>
                    {openSections.securite && (
                        <div className="about-content">
                            <p>Exemple de texte</p>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default About; 