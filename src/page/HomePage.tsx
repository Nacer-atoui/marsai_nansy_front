import { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import MarsSection from '../components/MarsSection';
import FestivalObjectif from '../components/FestivalObjectif';
import EventFormat from '../components/EventFormat'

export default function HomePage() {
  const [siteConfig, setSiteConfig] = useState<any>(null);

  useEffect(() => {
    // On appelle ton API
    axios.get('http://localhost:3000/api/home-config')
      .then(res => {
        setSiteConfig(res.data);
      })
      .catch(err => console.error("Erreur de connexion au Back :", err));
  }, []);

  // Si la BDD n'a pas encore répondu, on affiche un petit message
  if (!siteConfig) return <div className="text-white text-center mt-20">Chargement des données...</div>;

  return (
    <>
      {/* On passe l'objet siteConfig au composant HeroSection */}
      <HeroSection config={siteConfig} />
      <MarsSection config={siteConfig} />
      <FestivalObjectif config={siteConfig} />
      <EventFormat />
      {/* On rajoutera les autres (MarsSection, etc.) une fois que le Hero marche */}
    </>
  );
}