import HeroSection from '../components/HeroSection';
import MarsSection from '../components/MarsSection';
import FestivalObjectif from '../components/FestivalObjectif';
import AboutEvent from '../components/AboutEvent';
import Sponsors from '../components/Sponsors';
import EventFormat from '../components/EventFormat';
import Location from '../components/Location';
import NightEvent from '../components/NightEvent';
import MovieSelection from '../components/MovieSelection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarsSection />
      <MovieSelection />
      <FestivalObjectif />
      <EventFormat />
      <AboutEvent />
      <Location />
      <NightEvent />
      <Sponsors />
    </>
  );
}
