import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import CardsContainer from './components/CardsContainer'
import LogementDetail from './pages/LogementDetail'
import APropos from './pages/APropos'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <CardsContainer />
              </>
            } />
            <Route path="/logement/:id" element={<LogementDetail />} />
            <Route path="/about" element={<APropos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
