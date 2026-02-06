import Countdown, { type CountdownRenderProps } from 'react-countdown';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  config: {
    event_date?: string;
    primary_color?: string;
  };
}

export default function HeroSection({ config }: HeroProps) {
  const { t } = useTranslation();

  const EventDate = new Date(config.event_date || '2026-06-13T00:00:00');

  const counter = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    if (completed) {
      return (
        <span className="text-mars-orange">
          {t('hero_event_started', { defaultValue: 'Le festival a commencé !' })}
        </span>
      );
    } else {
      return (
        <div className="flex gap-x-6 text-white justify-center">
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-bold">{days}</span>
            <span className="text-sm uppercase text-white">{t('days', { defaultValue: 'Jours' })}</span>
          </div>
          <div className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3">
            <span className="text-4xl font-bold">{hours}</span>
            <span className="text-sm uppercase text-white">{t('hours', { defaultValue: 'Heures' })}</span>
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

  return (
    <div className="h-screen bg-[url('/bg_hero.png')] bg-cover">
      {/* On utilise font-montserrat pour s'assurer que c'est bien la bonne police */}
      <div className="flex h-screen items-center justify-center flex-col gap-y-15 text-white font-montserrat">
        
        {/* TITRE : Structure originale avec Montserrat */}
        <div className="flex">
          <h1 className="text-7xl">MARS</h1>
          <p className="text-7xl" style={{ color: config.primary_color || '#f97316' }}>AI</p>
        </div>

        <p className="text-4xl text-center px-4">
          {t('hero_subtitle')}
        </p>

        <p className="text-2xl text-center px-4" style={{ color: config.primary_color || '#f97316' }}>
          {t('intro_text')}
        </p>

        <div className="text-4xl text-center mt-8">
          <p className="text-4xl mb-5">
            {t('event_starts_in', { defaultValue: 'Début de l’évènement dans :' })}
          </p>
          <Countdown date={EventDate} renderer={counter} />
        </div>

      </div>
    </div>
  );
}