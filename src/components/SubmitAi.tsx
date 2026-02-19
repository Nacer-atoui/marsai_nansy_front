import { Cpu } from 'lucide-react';
import { RadioButton } from 'primereact/radiobutton';
import { useState } from 'react';
import type { Submit } from './types';
import type { Ia } from './types';

const inputClasses =
  'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';

export default function SubmitAi({
      ia, 
    handleChange
  }: { 
    ia: Ia, 
    
    handleChange: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>, section: keyof Submit) => void
  }) 
 {

  return (
    <>
    <section className="border border-[#364153] rounded-2xl p-5 my-10 font-display ">
      <div className="flex px-5 pb-5">
        <Cpu className="mx-2" />
        <h1>IA & Tech</h1>
      </div>
      <div className="mx-7 ">
        <h2 className="text-cyan-400">DÉCLARATION D'USAGE DE L'IA*</h2>
      </div>

      <div className="flex justify-center mt-8 gap-3">
        <label
          htmlFor="ai"
          className="inline-flex  w-xl p-5 border border-[#364153] rounded-xl cursor-pointer transition delay-75 duration-300 ease-in-out hover:translate-y-0.5  hover:scale-103 hover:bg-footer has-checked:border-mars-orange"
        >
        <input
          type="radio"
          id="ai"
          name="ishybrid"
          value="false"
          className="hidden"
        />
          <div className="block">
            <h3 className="font-bold mb-1">Génération Intégrale (100% IA)</h3>
            <p className="text-sm text-gray-300">
              Le contenu a été entièrement généré par intelligence artificielle
            </p>
          </div>
        </label>

        <label
          htmlFor="hybrid"
          className="inline-flex w-xl p-5 border border-[#364153] rounded-xl cursor-pointer transition delay-75 duration-300 ease-in-out hover:translate-y-0.5  hover:scale-103 hover:bg-footer has-checked:border-mars-orange"
        >
        <input
          type="radio"
          id="hybrid"
          name="ishybrid"
          value="true"
          className="hidden"
        />
          <div className="block ">
            <div className="font-bold mb-1">Production Hybride (Réel + IA)</div>
            <div className="text-sm text-gray-300">
              Le contenu combine des éléments réels et générés par IA
            </div>
          </div>
        </label>
      </div>
      <div className="mx-7 mt-8">
        <label htmlFor="stack" className={labelClasses}>
          Stack Technologique (Liste des outils)
        </label>
        <textarea
          name="stack"
            id="stack_ia"
            value={ia.stack} 
            onChange={(e) => handleChange(e, 'ia')}
          placeholder="Midjourney v5, Stable Diffusion XL, Adobe After Effects, DaVinci Resolve..."
          className={inputClasses}
        ></textarea>
      </div>
      <div className="mx-7 mt-8">
        <label htmlFor="method" className={labelClasses}>
          Méthodologie Créative (Note d'intention)
        </label>
        <textarea
          name="method"
            id="method_ia"
            value={ia.method} 
            onChange={(e) => handleChange(e, 'ia')}
          placeholder="Décrivez votre approche créative et l'utilisation de l'IA dans votre processus..."
          className={inputClasses}
        ></textarea>
      </div>
      </section>
      </>
  );
}
