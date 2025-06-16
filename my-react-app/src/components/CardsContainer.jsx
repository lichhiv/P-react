import { useState, useEffect } from 'react';
import Card from './Card';
import { fetchLogements } from '../services/api';
import './CardsContainer.css';

const CardsContainer = () => {
    const [logements, setLogements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        let isMounted = true;

        const loadLogements = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await fetchLogements();
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

        return () => {
            isMounted = false;
        };
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <p>Chargement des logements...</p>
            </div>
        );
    }

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

    if (!logements || logements.length === 0) {
        return (
            <div className="no-data">
                <p>Aucun logement disponible</p>
            </div>
        );
    }

    const displayedLogements = showAll ? logements : logements.slice(0, 6);

    return (
        <div className="cards-container">
            {displayedLogements.map((logement) => (
                <Card
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
            {!showAll && logements.length > 6 && (
                <button
                    className="voir-plus-button"
                    onClick={() => setShowAll(true)}
                >
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

export default CardsContainer; 