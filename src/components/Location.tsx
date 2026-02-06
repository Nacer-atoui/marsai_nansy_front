import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="h-screen bg-section-light py-20 px-4 font-display">
      {/* 1. max-w-7xl mx-auto : Centre le contenu sur les grands écrans
         2. grid-cols-1 md:grid-cols-2 : 1 colonne sur mobile, 2 colonnes égales sur PC
         3. gap-20 : Crée l'espace entre la gauche et la droite (mieux que des margins)
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
        {/* --- COLONNE GAUCHE --- */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin className="text-mars-orange" />
              <p className="uppercase tracking-widest font-bold text-sm">
                Le lieu
              </p>
            </div>

            <div className="text-6xl font-bold leading-none">
              <h1 className="text-mars-orange">LA</h1>
              <h1>PLATEFORME</h1>
            </div>

            <p className="mt-4 text-sm font-mono opacity-60 tracking-wider">
              (EX DOCKS DES SUDS)
            </p>
          </div>

          {/* Bloc sombre gauche */}
          <div className="bg-midnight text-white rounded-2xl p-8 mt-20 shadow-xl border border-white/5">
            <h2 className="py-2 text-mars-orange text-xl font-bold uppercase">
              Salle des Sucres
            </h2>
            <p className="text-gray-300 font-light">
              Futur sanctuaire des conférences et de la remise des prix de
              Mars.A.I. Un espace majestueux alliant patrimoine et technologie.
            </p>
          </div>
        </div>

        {/* --- COLONNE DROITE --- */}
        <div className="flex flex-col justify-between pt-10 md:pt-0 items-end">
          <p className="text-xs leading-relaxed font-light w-50">
            4 000 m² d'espaces modulables dans le centre de Marseille, au cœur
            de l'écosystème numérique.
          </p>

          {/* Bloc sombre droite */}
          <div className="bg-midnight text-white rounded-2xl p-8 mt-20 shadow-xl border border-white/5">
            <h2 className="py-2 text-mars-orange text-xl font-bold uppercase">
              Le Rooftop
            </h2>
            <p className="text-gray-300 font-light">
              Un espace extérieur unique pour le networking avec une vue
              imprenable sur le port autonome. (J'ai varié le texte ici pour
              l'exemple)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
