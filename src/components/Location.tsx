import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import pour la traduction

export default function Location() {
  const { t } = useTranslation(); // Initialisation de la fonction t

  return (
    <section className=" bg-midnight py-20 px-4 font-display">
      {/* 1. max-w-7xl mx-auto : Centre le contenu sur les grands écrans
         2. grid-cols-1 md:grid-cols-2 : 1 colonne sur mobile, 2 colonnes égales sur PC
         3. gap-20 : Crée l'espace entre la gauche et la droite (mieux que des margins)
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        {/* --- COLONNE GAUCHE --- */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="text-cyan-400" />
              <p className="uppercase tracking-widest font-bold text-sm">
                {t('location.badge')}
              </p>
            </div>

            <div className="text-8xl font-bold leading-none">
              <h1>{t('location.name.part1')}</h1>
              <h1 className="text-mars-orange">{t('location.name.part2')}</h1>
            </div>

            <p className="mt-4 text-sm font-mono opacity-60 tracking-wider">
              {t('location.old.name')}
            </p>
          </div>

          {/* Bloc sombre gauche */}
          <div className="bg-footer text-white rounded-2xl p-8 mt-20 border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2">
            <div className="flex">
              <h2 className="py-2 text-xl font-bold uppercase mx-1.5">
                {t('location.room.sucres.t1')}
              </h2>
              <h2 className="py-2 text-xl font-bold uppercase text-mars-orange">
                {t('location.room.sucres.t2')}
              </h2>
            </div>
            <p className="text-gray-300 font-light">
              {t('location.room.sucres.desc')}
            </p>
          </div>
        </div>

        {/* --- COLONNE DROITE --- */}
        <div className="flex flex-col justify-between pt-10 md:pt-0 items-end">
          <p className="text-xl leading-relaxed font-light w-90">
            {t('location.main.desc')}
          </p>

          {/* Bloc sombre droite */}
          <div className="bg-footer text-white rounded-2xl p-8 mt-20 border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2">
            <div className="flex">
              <h2 className="py-2 text-xl font-bold uppercase mx-1.5">
                {t('location.room.plaza.t1')}
              </h2>
              <h2 className="py-2 text-xl font-bold uppercase text-mars-orange">
                {t('location.room.plaza.t2')}
              </h2>
            </div>
            <p className="text-gray-300 font-light">
              {t('location.room.plaza.desc')}
            </p>
          </div>
        </div>
      </div>
      <div className="w-320 h-[450px] m-auto mt-8 rounded-2xl overflow-hidden shadow-lg border border-white/10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.003972515497!2d5.366207075862241!3d43.314176271120196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c13ddc0211b9%3A0xd1642ae4b32c4bc4!2s%C3%89cole%20La%20Plateforme_%20Marseille%20-%20Entr%C3%A9e%20Sud!5e0!3m2!1sfr!2sfr!4v1770648071784!5m2!1sfr!2sfr"
          className="w-full h-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation La Plateforme Marseille"
        ></iframe>
      </div>
    </section>
  );
}