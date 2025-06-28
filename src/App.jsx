// App.jsx : Composant principal de l'application Kasa
// Gère la structure globale, la navigation et l'affichage des pages

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CardsContainer from './components/CardsContainer'
import LogementDetail from './pages/LogementDetail'
import APropos from './pages/APropos'
import './App.css'

// Composant principal
function App() {
  return (
    // Router permet la navigation entre les pages (SPA)
    <Router>
      <div className="app">
        {/* Header affiché sur toutes les pages */}
        <Header />
        <main>
          {/* Définition des routes de l'application */}
          <Routes>
            {/* Page d'accueil : Hero + CardsContainer */}
            <Route path="/" element={
              <>
                <Hero />
                <CardsContainer />
              </>
            } />
            {/* Page de détail d'un logement */}
            <Route path="/logement/:id" element={<LogementDetail />} />
            {/* Page À propos */}
            <Route path="/about" element={<APropos />} />
          </Routes>
        </main>
        {/* Footer affiché sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  )
}

// Exportation du composant principal
export default App
