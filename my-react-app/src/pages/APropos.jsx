// APropos.jsx : Page d'informations sur l'application Kasa
// Affiche un texte de présentation et des informations utiles

import { useState } from 'react';
import '../styles/APropos.css'; // Styles de la page
import aproposImage from '../assets/apropos.png';
import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';

// Composant principal
function APropos() {
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
        <div className="apropos-container">
            {/* Titre de la page */}
            {/* <h1>À propos de Kasa</h1> */}
            {/* Contenu d'information */}
            {/* <p>Bienvenue sur Kasa, la plateforme de location d'appartements entre particuliers.</p> */}
            <div className="apropos-hero">
                <img src={aproposImage} alt="Paysage montagneux" className="apropos-hero-image" />
            </div>
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
                            <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
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
                            <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
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
                            <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
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
                            <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}

// Exportation du composant
export default APropos; 