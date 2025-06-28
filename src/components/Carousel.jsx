import React, { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
import './Carousel.css';

// Carousel.jsx : Composant réutilisable pour afficher une galerie d'images
// avec navigation par flèches et compteur

const Carousel = ({ images, altText = "Image" }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Fonction pour passer à l'image suivante
    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    // Fonction pour passer à l'image précédente
    const previousImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // Si pas d'images, ne rien afficher
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <div className="carousel">
            <img
                src={images[currentImageIndex]}
                alt={`${altText} ${currentImageIndex + 1}`}
                className="carousel-image"
            />

            {/* Afficher les flèches et le compteur seulement s'il y a plusieurs images */}
            {images.length > 1 && (
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
                        {currentImageIndex + 1}/{images.length}
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel; 