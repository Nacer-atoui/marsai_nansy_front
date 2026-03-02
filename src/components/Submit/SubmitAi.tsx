import React from 'react';
import { Cpu } from 'lucide-react';
import { useTranslation } from 'react-i18next';
// Vérifie bien le chemin vers tes types
import type { Submit, Ia } from '../types';

// 1. On définit les classes ici pour qu'elles soient accessibles
const inputClasses =
  'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';

export default function SubmitAi({
  ia,
  handleChange,
}: {
  ia: Ia;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Submit
  ) => void;
}) {
  const { t } = useTranslation('submit_form');

  // Fonction helper pour les boutons radio (pour éviter le "any")
  const handleRadioChange = (value: boolean) => {
    const fakeEvent = {
      target: {
        name: 'method',
        value: value,
      },
    } as any;
    handleChange(fakeEvent, 'ia');
  };

  return (
    <section className="border border-[#364153] rounded-2xl p-5 my-10 font-display">
      <div className="flex px-5 pb-5 items-center">
        <Cpu className="mr-3 text-mars-orange" />
        <h1 className="text-white text-xl font-bold">
          {t('submit_ia.title', 'IA & Tech')}
        </h1>
      </div>

      <div className="mx-7">
        <h2 className="text-cyan-400 font-bold uppercase text-xs tracking-wider">
          {t('submit_ia.declaration', "Déclaration d'usage de l'IA*")}
        </h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center mt-8 gap-4 px-7">
        {/* RADIO : IA Intégrale */}
        <label
          className={`flex-1 p-5 border rounded-xl cursor-pointer transition-all ${ia.method === false ? 'border-mars-orange bg-white/5' : 'border-[#364153] hover:bg-white/5'}`}
        >
          <input
            type="radio"
            name="method"
            checked={ia.method === false}
            onChange={() => handleRadioChange(false)}
            className="hidden"
          />
          <h3 className="font-bold mb-1 text-sm">
            {t('submit_ia.full_ai_title', '100% IA')}
          </h3>
          <p className="text-xs text-gray-400">
            {t('submit_ia.full_ai_desc', 'Contenu entièrement généré')}
          </p>
        </label>

        {/* RADIO : Hybride */}
        <label
          className={`flex-1 p-5 border rounded-xl cursor-pointer transition-all ${ia.method === true ? 'border-mars-orange bg-white/5' : 'border-[#364153] hover:bg-white/5'}`}
        >
          <input
            type="radio"
            name="method"
            checked={ia.method === true}
            onChange={() => handleRadioChange(true)}
            className="hidden"
          />
          <h3 className="font-bold mb-1 text-sm">
            {t('submit_ia.hybrid_title', 'Production Hybride')}
          </h3>
          <p className="text-xs text-gray-400">
            {t('submit_ia.hybrid_desc', 'Réel + IA')}
          </p>
        </label>
      </div>

      {/* STACK TECHNOLOGIQUE */}
      <div className="mx-7 mt-8">
        <label className={labelClasses}>
          {t('submit_ia.stack_label', 'Stack Technologique')}
        </label>
        <textarea
          name="stack"
          value={ia.stack}
          onChange={e => handleChange(e, 'ia')}
          placeholder="Midjourney, Stable Diffusion..."
          className={inputClasses}
          rows={3}
        ></textarea>
      </div>

      {/* MÉTHODOLOGIE / PROCESS */}
      <div className="mx-7 mt-8">
        <label className={labelClasses}>
          {t('submit_ia.method_label', 'Méthodologie Créative')}
        </label>
        <textarea
          name="creative_process"
          value={ia.creative_process}
          onChange={e => handleChange(e, 'ia')}
          placeholder="Expliquez comment vous avez utilisé l'IA..."
          className={`${inputClasses} min-h-[120px]`}
          rows={4}
        ></textarea>
      </div>
    </section>
  );
}
