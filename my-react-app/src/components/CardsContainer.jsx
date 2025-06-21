// CardsContainer.jsx : Composant qui affiche la liste des logements sous forme de cartes
// Gère le chargement, les erreurs et l'affichage dynamique des logements

import { useState, useEffect } from 'react'; // Hooks React pour l'état et les effets
import Card from './Card'; // Composant pour afficher une carte individuelle
import { fetchLogements } from '../services/api'; // Fonction pour récupérer les logements
import './CardsContainer.css'; // Styles du composant

// Composant principal
const CardsContainer = () => {
    // États pour stocker les logements, l'état de chargement, l'erreur et l'affichage complet ou non
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);

    // Effet pour charger les logements au montage du composant
    useEffect(() => {
        let isMounted = true;

        // Fonction asynchrone pour charger les données
        const loadLogements = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchLogements(); // Récupération des logements
                if (isMounted) {
                    setLogements(data);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        loadLogements();

        // Nettoyage lors du démontage du composant
        return () => {
            isMounted = false;
        };
    }, []);

    // Affichage pendant le chargement
    if (loading) {
        return (
            <div className="loading">
                <p>Chargement des logements...</p>
            </div>
        );
    }

    // Affichage en cas d'erreur
    if (error) {
        return (
            <div className="error">
                <p>404</p>
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="retry-button">
                    Réessayer
                </button>
            </div>
        );
    }

    // Affichage si aucun logement n'est disponible
    if (!logements || logements.length === 0) {
        return (
            <div className="no-data">
                <p>Aucun logement disponible</p>
            </div>
        );
    }

    // Détermine les logements à afficher (6 ou tous)
    const displayedLogements = showAll ? logements : logements.slice(0, 6);

    return (
        <div className="cards-container">
            {/* Affiche chaque logement sous forme de carte */}
            {displayedLogements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))}
            {/* Bouton pour voir plus de logements si besoin */}
            {!showAll && logements.length > 6 && (
                <button className="voir-plus-button" onClick={() => setShowAll(true)}>
                    Voir plus
                </button>
            )}
            {showAll && (
                <button
                    className="voir-plus-button"
                    onClick={() => setShowAll(false)}
                >
                    Voir moins
                </button>
            )}
        </div>
    );
};

// Exportation du composant principal
export default CardsContainer; 