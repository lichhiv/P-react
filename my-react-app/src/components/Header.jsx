// Importation des outils de navigation de React Router
import { Link, useLocation } from 'react-router-dom'
// Importation du style du header
import './Header.css'
// Importation du logo
import logoImage from '../assets/sans titre 4.png'

// Composant Header : barre de navigation principale
function Header() {
    // Hook pour connaître la page active
    const location = useLocation()

    return (
        // Balise header principale
        <header className="header">
            {/* Conteneur pour centrer le contenu */}
            <div className="header-container">
                {/* Logo de l'application */}
                <div className="logo">
                    <img src={logoImage} alt="Kasa" className="logo-image" />
                </div>
                {/* Navigation */}
                <nav className="nav">
                    {/* Lien vers la page d'accueil */}
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Accueil
                    </Link>
                    {/* Lien vers la page À propos */}
                    <Link
                        to="/about"
                        className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                    >
                        À propos
                    </Link>
                </nav>
            </div>
        </header>
    )
}

// Exportation du composant pour l'utiliser ailleurs
export default Header 