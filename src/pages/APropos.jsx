// APropos.jsx : Page d'informations sur l'application Kasa
// Affiche un texte de présentation et des informations utiles

import { useState } from 'react';
import Collapse from '../components/Collapse';
import '../styles/APropos.css'; // Styles de la page
import aproposImage from '../assets/apropos.png';

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
                    <Collapse
                        title="Fiabilité"
                        isOpen={openSections.fiabilite}
                        onToggle={(isOpen) => toggleSection('fiabilite')}
                    >
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
                    </Collapse>
                </li>

                <li className="about-item">
                    <Collapse
                        title="Respect"
                        isOpen={openSections.respect}
                        onToggle={(isOpen) => toggleSection('respect')}
                    >
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                    </Collapse>
                </li>

                <li className="about-item">
                    <Collapse
                        title="Service"
                        isOpen={openSections.service}
                        onToggle={(isOpen) => toggleSection('service')}
                    >
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                    </Collapse>
                </li>

                <li className="about-item">
                    <Collapse
                        title="Sécurité"
                        isOpen={openSections.securite}
                        onToggle={(isOpen) => toggleSection('securite')}
                    >
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                    </Collapse>
                </li>
            </ul>
        </div>
    );
}

// Exportation du composant
export default APropos; 