import Countdown, { type CountdownRenderProps } from 'react-countdown';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  config: any;
}

export default function HeroSection({ config }: HeroProps) {
  const { t } = useTranslation();

  const EventDate = new Date(config.event_date || '2026-06-13T00:00:00');

  const counter = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <span className="text-mars-orange text-2xl font-light">
          {t('common:countdown.event_started')}
        </span>
      );
    } else {
      return (
        <div className="flex gap-x-6 text-white justify-center">
          {/* Bloc Jours */}
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-light">{days}</span>
            <span className="text-sm uppercase text-white">
              {t('common:countdown.days')}
            </span>
          </div>

          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-light">{hours}</span>
            <span className="text-sm uppercase text-white">
              {t('common:countdown.hours')}
            </span>
          </div>

          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-light">{minutes}</span>
            <span className="text-sm uppercase text-white">
              {t('common:countdown.minutes')}
            </span>
          </div>

          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-light">{seconds}</span>
            <span className="text-sm uppercase text-white">
              {t('common:countdown.seconds')}
            </span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="h-screen bg-[url('/bg_hero.avif')] bg-cover">
      <div className="flex h-screen items-center justify-around flex-col font-display text-white">
        
        {/* TITRE : ABAISSÉ AVEC mt-24 ET COLLÉ */}
        <div className="flex mt-24">
          <h1 className="text-7xl font-normal uppercase tracking-tighter">MARS</h1>
          <p
            className="text-7xl font-normal uppercase"
            style={{ color: config.primary_color || '#f97316' }}
          >
            AI
          </p>
        </div>
        
        <div className="flex-col space-y-10 text-center px-4">
          {/* SUBTITLE : FONT-NORMAL */}
          <p className="text-6xl font-normal max-w-5xl leading-tight">
            {t('hero_subtitle')}
          </p>

          {/* INTRO TEXT : SEMIBOLD */}
          <p
            className="text-4xl font-semibold"
            style={{ color: config.primary_color || '#f97316' }}
          >
            {t('intro_text')}
          </p>
        </div>

        <div className="font-display w-full text-center">
          <p className="text-4xl mb-10 font-light uppercase tracking-widest text-white/90">
            {t('common:countdown.starts_in')}
          </p>
          
          <Countdown date={EventDate} renderer={counter} />
          
          {/* BOUTON : LARGEUR AJUSTÉE ET TEXTE SEMIBOLD */}
          <button 
            className="mt-14 px-10 py-4 rounded-full text-white transition-all duration-300 font-semibold uppercase tracking-widest shadow-xl"
            style={{ backgroundColor: config.primary_color || '#f97316' }}
          >
            {t('common:countdown.participate')}
          </button>
        </div>
        
      </div>
    </div>
  );
}