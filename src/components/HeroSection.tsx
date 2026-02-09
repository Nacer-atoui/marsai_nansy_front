import Countdown, { type CountdownRenderProps } from 'react-countdown';
import { useTranslation } from 'react-i18next';

// On retire l'interface obligatoire qui posait problème dans HomePage
export default function HeroSection() {
  // On utilise les deux namespaces : translation (par défaut) et common
  const { t } = useTranslation(['translation', 'common']);

  // On définit la couleur en dur ou via une clé i18n si tu veux qu'elle soit modifiable en BDD
  const primaryColor = '#f97316'; 
  const eventDate = new Date('2026-06-13T00:00:00');

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
          {/* On mappe sur les unités pour éviter de répéter 4 fois le même code HTML */}
          {[
            { label: t('common:countdown.days'), value: days },
            { label: t('common:countdown.hours'), value: hours },
            { label: t('common:countdown.minutes'), value: minutes },
            { label: t('common:countdown.seconds'), value: seconds }
          ].map((unit, idx) => (
            <div key={idx} className="flex flex-col items-center border-2 rounded-xl w-24 border-[#00FFFF]/30 shadow-[0_0_15px_rgba(6,182,212,0.5)] p-3 bg-black/20">
              <span className="text-4xl font-light">{unit.value}</span>
              <span className="text-sm uppercase text-white/80">{unit.label}</span>
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="relative h-screen bg-[url('/bg_hero.avif')] bg-cover bg-center">
      {/* Overlay pour garantir la lisibilité du texte par-dessus l'image */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex h-screen items-center justify-around flex-col font-display text-white">
        
        {/* LOGO */}
        <div className="flex mt-24">
          <h1 className="text-7xl font-normal uppercase tracking-tighter">MARS</h1>
          <p className="text-7xl font-normal uppercase" style={{ color: primaryColor }}>
            AI
          </p>
        </div>
        
        <div className="flex-col space-y-10 text-center px-4">
          <p className="text-6xl font-normal max-w-5xl leading-tight">
            {t('hero_subtitle')}
          </p>

          <p className="text-4xl font-semibold" style={{ color: primaryColor }}>
            {t('intro_text')}
          </p>
        </div>

        <div className="font-display w-full text-center">
          <p className="text-4xl mb-10 font-light uppercase tracking-widest text-white/90">
            {t('common:countdown.starts_in')}
          </p>
          
          <Countdown date={eventDate} renderer={counter} />
          
          <button 
            className="mt-14 px-10 py-4 rounded-full text-white transition-all duration-300 font-semibold uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95"
            style={{ backgroundColor: primaryColor }}
          >
            {t('common:countdown.participate')}
          </button>
        </div>
      </div>
    </div>
  );
}