import { useTranslation } from 'react-i18next';
import HeroSection from '../components/HeroSection';
import MarsSection from '../components/MarsSection';
import FestivalObjectif from '../components/FestivalObjectif';
import AboutEvent from '../components/AboutEvent'
import Sponsors from '../components/Sponsors';
import EventFormat from '../components/EventFormat';
import Location from '../components/Location';
import NightEvent from '../components/NightEvent';
import MovieSelection from '../components/MovieSelection';

export default function HomePage() {
  const { t, ready } = useTranslation();

  // Si i18n n'est pas encore prêt (chargement du JSON ou de l'API)
  if (!ready) return <div className="text-white text-center mt-20">Chargement...</div>;

  return (
    <>
      {/* On ne passe plus config, les composants utiliseront t() directement */}
      <HeroSection />
      <MarsSection />
      <FestivalObjectif />
      <EventFormat />
      <AboutEvent/>
      <Location />
      <NightEvent/>
      <Sponsors/>
    </>
  );
}