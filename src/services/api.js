import { logements } from '../data/logements';

export const fetchLogements = async () => {
    try {
        // Simuler un délai réseau
        await new Promise(resolve => setTimeout(resolve, 500));
        return logements;
    } catch (error) {
        console.error('Erreur:', error);
        throw new Error('Impossible de récupérer les données des logements');
    }
}; 