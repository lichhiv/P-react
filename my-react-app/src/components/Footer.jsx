// Footer.jsx : Composant pour le pied de page de l'application
// Affiche le logo et le texte de copyright

import React from 'react';
// Importation du style du footer
import './Footer.css';
// Importation de l'image du footer
import footerImage from '../assets/footer.png';

// Composant principal
function Footer() {
    return (
        // Conteneur principal du footer
        <footer className="footer">
            <div className="footer-content">
                {/* Logo du footer */}
                <img src={footerImage} alt="Kasa" className="footer-logo-image" />
                {/* Texte de copyright */}
                <div className="footer-copyright">© 2024 Kasa. All rights reserved.</div>
            </div>
        </footer>
    );
}

// Exportation du composant pour l'utiliser ailleurs
export default Footer; 