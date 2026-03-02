import HeroSection from '../components/HomePage/HeroSection';
import MarsSection from '../components/HomePage/MarsSection';
import FestivalObjectif from '../components/HomePage/FestivalObjectif';
import AboutEvent from '../components/HomePage/AboutEvent';
import Sponsors from '../components/HomePage/Sponsors';
import EventFormat from '../components/HomePage/EventFormat';
import Location from '../components/HomePage/Location';
import NightEvent from '../components/HomePage/NightEvent';
import MovieSelection from '../components/HomePage/MovieSelection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MarsSection />
      <MovieSelection />
      <FestivalObjectif />
      <EventFormat />
      <AboutEvent />
      <NightEvent />
      <Location />
      <Sponsors />
    </>
  );
}
