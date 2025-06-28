import React, { useState } from 'react';
import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';
import './Collapse.css';

// Collapse.jsx : Composant réutilisable pour créer des sections accordéon
// Utilisé dans LogementDetail et APropos

const Collapse = ({ title, children, isOpen = false, onToggle }) => {
    const [isExpanded, setIsExpanded] = useState(isOpen);

    // Fonction pour gérer l'ouverture/fermeture
    const handleToggle = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);

        // Appel du callback parent si fourni
        if (onToggle) {
            onToggle(newState);
        }
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={handleToggle}>
                <span className="collapse-title">{title}</span>
                <img
                    src={isExpanded ? arrowUp : arrowDown}
                    alt={isExpanded ? "Flèche vers le haut" : "Flèche vers le bas"}
                    className="collapse-arrow"
                />
            </div>
            {isExpanded && (
                <div className="collapse-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapse; 