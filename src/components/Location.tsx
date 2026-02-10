import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="h-screen bg-midnight py-20 px-4 font-display">
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
          <div className="bg-footer text-white rounded-2xl p-8 mt-20 shadow-xl border border-white/5">
            <h2 className="py-2 text-blue-card text-xl font-bold uppercase">
              SALLE DES SUCRES
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
          <div className="bg-footer text-white rounded-2xl p-8 mt-20 shadow-xl border border-white/5">
            <h2 className="py-2 text-mars-orange text-xl font-bold uppercase">
              SALLE PLAZA
            </h2>
            <p className="text-gray-300 font-light">
              L'épicentre du festival : accueil, animations, workshops et
              restauration. Le point de rencontre de tous les participants.
            </p>
          </div>
          <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg border border-white/10"></div>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.003972515497!2d5.366207075862241!3d43.314176271120196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12c9c13ddc0211b9%3A0xd1642ae4b32c4bc4!2s%C3%89cole%20La%20Plateforme_%20Marseille%20-%20Entr%C3%A9e%20Sud!5e0!3m2!1sfr!2sfr!4v1770648071784!5m2!1sfr!2sfr"
          className="w-full h-full"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localisation La Plateforme Marseille">
          </iframe>
      </div>
    </section>
  );
}
