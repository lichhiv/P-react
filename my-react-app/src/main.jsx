// main.jsx : Point d'entrée de l'application React
// Monte le composant App dans la div #root du HTML

import { StrictMode } from 'react'; // Pour détecter les problèmes potentiels
import { createRoot } from 'react-dom/client'; // Pour créer la racine React
import './index.css'; // Styles globaux
import App from './App.jsx'; // Composant principal

// Création de la racine et rendu de l'application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
