import { Cpu } from 'lucide-react';

const inputClasses = "w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all";
const labelClasses = "block text-gray-400 text-sm mb-2 font-medium";

export default function SubmitAi() {
  return (
    <section className="border border-[#364153] rounded-2xl p-5 my-10 font-display ">
      <div className="flex px-5 pb-5">
        <Cpu className="mx-2" />
        <h1>IA & Tech</h1>
      </div>
      <div className='mx-7 '>
        <h2 className='text-cyan-400'>DÉCLARATION D'USAGE DE L'IA*</h2>
      </div>
      <div className='flex'>
      <div className='border border-[#364153] rounded-2xl w-xl mx-7 mt-8 p-4'>
        <h3 className='mb-3 font-bold'>Génération Intégrale (100% IA)</h3>
        <p className='text-gray-300'>Le contenu a été entièrement généré par intelligence artificielle</p>
      </div>
      <div className='border border-[#364153] rounded-2xl w-xl mx-7 mt-8 p-4'>
        <h3 className='mb-3 font-bold'>Génération Intégrale (100% IA)</h3>
        <p className='text-gray-300'>Le contenu a été entièrement généré par intelligence artificielle</p>
      </div>
      </div>
      <div className='mx-7 mt-8'>
        <label htmlFor="stack" className={labelClasses}>Stack Technologique (Liste des outils)</label>
        <textarea name="stack" id="stack_ia" placeholder='Midjourney v5, Stable Diffusion XL, Adobe After Effects, DaVinci Resolve...' className={inputClasses}></textarea>
      </div>
      <div className='mx-7 mt-8'>
        <label htmlFor="method" className={labelClasses}>Méthodologie Créative (Note d'intention)</label>
        <textarea name="method" id="method_ia" placeholder="Décrivez votre approche créative et l'utilisation de l'IA dans votre processus..." className={inputClasses}></textarea>
      </div>
    </section>
  );
}
