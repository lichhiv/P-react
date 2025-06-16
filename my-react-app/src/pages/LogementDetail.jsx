import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchLogements } from '../services/api';
import arrowUp from '../assets/arrow-up.svg';
import arrowDown from '../assets/arrow-down.svg';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import './LogementDetail.css';

const LogementDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEquipments, setShowEquipments] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

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

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === logement.pictures.length - 1 ? 0 : prev + 1
        );
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? logement.pictures.length - 1 : prev - 1
        );
    };

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
            <div className="carousel">
                <img
                    src={logement.pictures[currentImageIndex]}
                    alt={`Vue ${currentImageIndex + 1} du logement`}
                    className="carousel-image"
                />
                {logement.pictures.length > 1 && (
                    <>
                        <img
                            src={arrowLeft}
                            alt="Image précédente"
                            className="carousel-arrow carousel-arrow-left"
                            onClick={previousImage}
                        />
                        <img
                            src={arrowRight}
                            alt="Image suivante"
                            className="carousel-arrow carousel-arrow-right"
                            onClick={nextImage}
                        />
                        <div className="carousel-counter">
                            {currentImageIndex + 1}/{logement.pictures.length}
                        </div>
                    </>
                )}
            </div>
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
                <div className="logement-description">
                    <div className="description-header" onClick={() => setShowDescription(!showDescription)}>
                        Description {showDescription ? <img src={arrowUp} alt="Flèche vers le haut" /> : <img src={arrowDown} alt="Flèche vers le bas" />}
                    </div>
                    {showDescription && <p>{logement.description}</p>}
                </div>
                <div className="logement-equipments">
                    <div className="equipments-header" onClick={() => setShowEquipments(!showEquipments)}>
                        Équipements {showEquipments ? <img src={arrowUp} alt="Flèche vers le haut" /> : <img src={arrowDown} alt="Flèche vers le bas" />}
                    </div>
                    {showEquipments && (
                        <ul>
                            {logement.equipments.map((equipment, index) => (
                                <li key={index}>{equipment}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LogementDetail; 