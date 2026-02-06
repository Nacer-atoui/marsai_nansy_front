import React from 'react'
import H2 from './ui-kit/h2'

export default function EventFormat() {
  return (
    <section className="bg-[#07091D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
            <H2 texte="Format de la sélection" />
            <p className="text-gray-400 mt-4 max-w-2xl text-[25px]">Le parcours des oeuvres</p>

            <div className="flex justify-between mt-10 gap-6">
              <div className='p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">2 mois</h3>
                <p className="uppercase pt-3 text-mars-orange">appel à projet</p>
                <p className=" pt-3">Candidatures ouvertes aux créateurs du monde entier.</p>
              </div>

              <div className='p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">50 Films</h3>
                <p className="uppercase pt-3 text-mars-orange">Sélection Officielle</p>
                <p className=" pt-3">Courts-métrages d'une minute retenus pour la compétition.</p>
              </div>

              <div className=' p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">Web & RS</h3>
                <p className="uppercase pt-3 text-mars-orange">Diffusion Digitale</p>
                <p className="pt-3">Visibilité mondiale via les réseaux et plateformes.</p>
              </div>

              <div className=' p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">Festival</h3>
                <p className="uppercase pt-3 text-mars-orange">Salles de Cinéma</p>
                <p className="pt-3">Projection sur grand écran pour une immersion totale.</p>
              </div>
            </div>
        </div>
    </section>
  )
}
