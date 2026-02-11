import { Cpu } from 'lucide-react';

export default function SubmitAi() {
  return (
    <section className="border-1 rounded-xl p-5 font-display">
      <div className="flex px-5 pb-5">
        <Cpu className="mx-2" />
        <h1>IA & Tech</h1>
      </div>
      <div className='mx-7 '>
        <h2 className='text-cyan-400'>DÉCLARATION D'USAGE DE L'IA*</h2>
      </div>
      <div className='flex'>
      <div className='border-1 rounded-xl w-xl mx-7 mt-8 p-4'>
        <h3 className='mb-3 font-bold'>Génération Intégrale (100% IA)</h3>
        <p className='text-gray-300'>Le contenu a été entièrement généré par intelligence artificielle</p>
      </div>
      <div className='border-1  rounded-xl w-xl mx-7 mt-8 p-4'>
        <h3 className='mb-3 font-bold'>Génération Intégrale (100% IA)</h3>
        <p className='text-gray-300'>Le contenu a été entièrement généré par intelligence artificielle</p>
      </div>
      </div>
      <div className='mx-7 mt-8'>
        <h4 className=''>Stack Technologique (Liste des outils)</h4>
        <textarea name="stack" id="stack_ia" placeholder='Midjourney v5, Stable Diffusion XL, Adobe After Effects, DaVinci Resolve...' className='border-1 border-gray-400 rounded-xl mt-2 w-302 h-20 p-2'></textarea>
      </div>
      <div className='mx-7 mt-8'>
        <h4 className=''>Méthodologie Créative (Note d'intention)</h4>
        <textarea name="stack" id="stack_ia" placeholder="Décrivez votre approche créative et l'utilisation de l'IA dans votre processus..." className='border-1 border-gray-400 rounded-xl mt-2 w-302 h-20 p-2'></textarea>
      </div>
    </section>
  );
}
