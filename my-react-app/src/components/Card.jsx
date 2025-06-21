// Card.jsx : Composant qui affiche une carte de logement individuelle
// Utilisé dans CardsContainer pour chaque logement

import React from 'react';
import { Link } from 'react-router-dom'; // Pour la navigation vers la page de détail
import './Card.css'; // Styles du composant

// Composant principal
const Card = ({ logement }) => {
    return (
        // Lien vers la page de détail du logement
        <Link to={`/logement/${logement.id}`} className="card">
            {/* Image de couverture du logement */}
            <div className="card-image">
                <img src={logement.cover} alt={logement.title} />
            </div>
            {/* Titre du logement */}
            <h3 className="card-title">{logement.title}</h3>
        </Link>
    );
};

// Exportation du composant
export default Card; 