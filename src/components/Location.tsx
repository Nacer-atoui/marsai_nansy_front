import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <section className="bg-section-light py-20 px-4 font-display ">
      <div className="flex">
        {/* div coté gauche */}
        <div className="max-w-7xl mx-30">
          <div className="flex gap-2">
            <MapPin />
            <p>Le lieu</p>
          </div>
          <div className="text-6xl mt-8">
            <h1 className="text-mars-orange">LA</h1>
            <h1>PLATEFORME</h1>
          </div>
            <p className='mt-20 text-xs'>(EX DOCKS DES SUDS)</p>
            <div className='bg-midnight rounded-2xl mt-20 p-10'>
                <h2 className='py-2 text-mars-orange text-xl '>SALLE DES SUCRES</h2>
                <p>Futur sanctuaire des conférences et de la remise des prix de Mars.A.I. Un espace majestueux alliant patrimoine et technologie.</p>
            </div>
        </div>
        {/* div coté droit */}
        <div className="mx-136">
          <p className="w-50 text-xs">
            4 000 m² d'espaces modulables dans le centre de Marseille, au cœur
            de l'écosystème numérique.
          </p>
        </div>
      </div>
    </section>
  );
}
