import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function HeroSection() {
  const { t } = useTranslation();

  // DATE CIBLE : 13 Juin 2025 à 19h00
  // On la fixe ici directement au lieu de l'attendre depuis la base de données
  const targetDate = new Date("2025-06-13T19:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* --- IMAGE DE FOND --- */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.jpg" // Assure-toi que cette image existe dans /public
          alt="Mars AI Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07091D]/80 via-transparent to-[#07091D]"></div>
      </div>

      {/* --- CONTENU --- */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        
        {/* Sous-titre */}
        <p className="text-[#00FFFF] text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-4 animate-pulse">
          {t('hero_subtitle', { defaultValue: 'Imaginer des futurs désirables' })}
        </p>

        {/* Grand Titre */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-6 tracking-tighter shadow-neon">
          MARS<span className="text-[#f97316]">.AI</span>
        </h1>

        <p className="text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light">
          {t('intro_text', { defaultValue: 'Le 1er Festival International du Court-Métrage IA - Marseille' })}
        </p>

        {/* --- COMPTE À REBOURS --- */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12">
          {/* Jours */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold text-white font-mono">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2">
              {t('common.countdown.days', { defaultValue: 'Jours' })}
            </span>
          </div>

          <span className="text-4xl md:text-6xl text-[#f97316] font-light">:</span>

          {/* Heures */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold text-white font-mono">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2">
              {t('common.countdown.hours', { defaultValue: 'Heures' })}
            </span>
          </div>

          <span className="text-4xl md:text-6xl text-[#f97316] font-light">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-6xl font-bold text-white font-mono">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="text-xs md:text-sm text-gray-400 uppercase tracking-widest mt-2">
              {t('common.countdown.minutes', { defaultValue: 'Minutes' })}
            </span>
          </div>
        </div>

        {/* Bouton d'action */}
        <button className="px-8 py-4 bg-[#f97316] text-white font-bold text-lg rounded-full uppercase tracking-wider hover:bg-orange-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(249,115,22,0.4)]">
          {t('btn_participate', { defaultValue: 'Participer au défi' })}
        </button>

      </div>
    </section>
  );
}