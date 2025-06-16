import React from 'react';
import './Footer.css';
import footerLogo from '../assets/footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <img src={footerLogo} alt="Kasa" className="footer-logo-image" />
                <div className="footer-copyright">© 2020 Kasa. All rights reserved</div>
            </div>
        </footer>
    );
};

export default Footer; 