import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { fetchLogements } from '../services/api';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import './LogementDetail.css';

// LogementDetail.jsx : Composant qui affiche les détails d'un logement sélectionné
// Utilise l'identifiant dans l'URL pour afficher le bon logement

// Composant principal
function LogementDetail() {
    // Récupère l'identifiant du logement depuis l'URL
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [logement, setLogement] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLogement = async () => {
            try {
                setLoading(true);
                const data = await fetchLogements();
                const foundLogement = data.find(l => l.id === id);
                if (foundLogement) {
                    setLogement(foundLogement);
                } else {
                    setError("Oups! La page que vous demandez n'existe pas.");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadLogement();
    }, [id]);

    if (loading) {
        return <div className="loading">Chargement...</div>;
    }

    if (error) {
        return (
            <div className="error">
                <p>404</p>
                <p>{error}</p>
                <button onClick={() => navigate('/')} className="retry-button">
                    Retourner sur la page d'accueil
                </button>
            </div>
        );
    }

    if (!logement) {
        return null;
    }

    return (
        <div className="logement-detail">
            {/* Utilisation du composant Carousel */}
            <Carousel
                images={logement.pictures}
                altText="Vue du logement"
            />

            <div className="logement-header">
                <div className="logement-header-left">
                    <h1 className="logement-title">{logement.title}</h1>
                    <p className="logement-location">{logement.location}</p>
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="logement-header-right">
                    <div className="host-info">
                        <div className="host-name">
                            <span>{logement.host.name.split(' ')[0]}</span>
                            <span>{logement.host.name.split(' ')[1]}</span>
                        </div>
                        <img src={logement.host.picture} alt={logement.host.name} className="host-picture" />
                    </div>
                    <div className="logement-rating">
                        {[...Array(5)].map((_, index) => (
                            <span
                                key={index}
                                className={`star ${index < logement.rating ? 'filled' : ''}`}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="logement-info">
                {/* Utilisation du composant Collapse pour la description */}
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>

                {/* Utilisation du composant Collapse pour les équipements */}
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipment, index) => (
                            <li key={index}>{equipment}</li>
                        ))}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
}

// Exportation du composant
export default LogementDetail; 