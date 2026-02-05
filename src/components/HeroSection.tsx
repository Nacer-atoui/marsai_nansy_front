import Countdown from 'react-countdown';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  config: any;
}

export default function HeroSection({ config }: HeroProps) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  // 1. On récupère la date de la BDD, ou on garde ta date par défaut
  const EventDate = new Date(config.event_date || '2026-06-13T00:00:00');

  // 2. Le moteur du compteur avec les textes traduits
  const counter = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return (
        <span className="text-mars-orange">
          {isEn ? 'The festival has started!' : 'Le festival a commencé !'}
        </span>
      );
    } else {
      return (
        <div className="flex gap-x-6 text-white justify-center">
          {/* Bloc Jours */}
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-bold">{days}</span>
            <span className="text-sm uppercase text-white">
              {isEn ? 'Days' : 'Jours'}
            </span>
          </div>
          {/* Bloc Heures */}
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-bold">{hours}</span>
            <span className="text-sm uppercase text-white">
              {isEn ? 'Hours' : 'Heures'}
            </span>
          </div>
          {/* Bloc Minutes */}
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-bold">{minutes}</span>
            <span className="text-sm uppercase text-white">
              {isEn ? 'Min' : 'Min'}
            </span>
          </div>
          {/* Bloc Secondes */}
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-bold">{seconds}</span>
            <span className="text-sm uppercase text-white">
              {isEn ? 'Sec' : 'Sec'}
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-screen bg-[url('/bg_hero.avif')] bg-cover">
      <div className="flex h-screen items-center justify-center flex-col gap-y-10 font-display text-white">
        <div className="flex">
          <h1 className="text-7xl">MARS</h1>
          <p
            className="text-7xl"
            style={{ color: config.primary_color || '#f97316' }}
          >
            AI
          </p>
        </div>

        <p className="text-4xl text-center">
          {isEn ? config.hero_subtitle_en : config.hero_subtitle_fr}
        </p>

        <p
          className="text-2xl text-center"
          style={{ color: config.primary_color || '#f97316' }}
        >
          {isEn ? config.intro_text_en : config.intro_text_fr}
        </p>

        <div className="font-display w-full text-center">
          <p className="text-4xl mb-5">
            {isEn ? 'Event starts in:' : 'Début de l’évènement dans :'}
          </p>
          <div className="flex justify-around items-center">
            <Countdown date={EventDate} renderer={counter} />
          </div>
          <button className="rounded-full p-1.5 px-10 mt-8 bg-mars-orange hover:opacity-90">
              Participez en envoyant votre film !
            </button>
        </div>
      </div>
    </div>
  );
}
