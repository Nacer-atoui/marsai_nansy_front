import HeroSection from '../components/HeroSection';
import MarsSection from '../components/MarsSection';
import FestivalObjectif from '../components/FestivalObjectif';
import AboutEvent from '../components/AboutEvent';
import Sponsors from '../components/Sponsors';
import EventFormat from '../components/EventFormat';
import NightEvent from '../components/NightEvent';
// J'ai vu que tu avais MovieSelection, on le garde aussi
import MovieSelection from '../components/MovieSelection'; 

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarsSection />
      {/* MovieSelection n'était pas dans ta liste précédente, mais je le laisse ici */}
      <MovieSelection /> 
      <FestivalObjectif />
      <EventFormat />
      <AboutEvent />
      <NightEvent />
      <Sponsors />
    </>
  );
}