import { Link, useLocation } from 'react-router-dom'
import './Header.css'
import logoImage from '../assets/sans titre 4.png'

function Header() {
    const location = useLocation()

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <img src={logoImage} alt="Kasa" className="logo-image" />
                </div>
                <nav className="nav">
                    <Link
                        to="/"
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Accueil
                    </Link>
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

export default Header 