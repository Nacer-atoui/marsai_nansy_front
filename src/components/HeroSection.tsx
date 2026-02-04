import Countdown from 'react-countdown';

const EventDate = new Date('2026-06-13T00:00:00');

const counter = ({ days, hours, minutes, seconds, completed }: any) => {
  if (completed) {
    return <span className="text-mars-orange">Le festival a commencé !</span>;
  } else {
    return (
      <div className="flex gap-x-6 text-white justify-center">
        <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
          <span className="text-4xl font-bold">{days}</span>
          <span className="text-sm uppercase text-white">Jours</span>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
          <span className="text-4xl font-bold">{hours}</span>
          <span className="text-sm uppercase text-white">Heures</span>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
          <span className="text-4xl font-bold">{minutes}</span>
          <span className="text-sm uppercase text-white">Min</span>
        </div>
        <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
          <span className="text-4xl font-bold">{seconds}</span>
          <span className="text-sm uppercase text-white">Sec</span>
        </div>
      </div>
    );
  }
};

export default function HeroSection() {
  return (
    <div className="h-screen bg-[url('/bg_hero.png')] bg-cover">
      <div className="flex h-screen items-center justify-center flex-col gap-y-15 font-display">
        <div className="flex">
          <h1 className="text-7xl">MARS</h1>
          <p className="text-7xl text-mars-orange">AI</p>
        </div>
        <p className="text-4xl">Imaginer des futurs souhaitables</p>
        <p className="text-2xl text-mars-orange">
          Le 1er festival international du Court-Métrage IA - Marseille
        </p>
        <div className="text-4xl text-white font-display">
        <p className="text-4xl mb-5">Début de l’évènement dans : </p>
          <Countdown date={EventDate} renderer={counter} />
        </div>
      </div>
    </div>
  );
}
