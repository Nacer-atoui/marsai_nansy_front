import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmDetails() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        
        {/* === TU ENCABEZADO (NO MODIFICADO) === */}
        <div className="flex flex-col items-start justify-center mb-8">
          <Link to="/movie" className="mb-1">
            <h3 className="underline !text-orange-500 hover:!text-white transition-colors duration-300 text-sm font-bold uppercase">
              RETOUR À LE LISTE DES VIDEOS
            </h3>
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none">
            WAITING FOR THE BACKEND
          </h1>
        </div>

        {/* === TU GRID PRINCIPAL === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* === COLUMNA IZQUIERDA (Ocupa 2 espacios) === */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* FORMA 1: Tu Video  */}
            <div className="aspect-video bg-gray-900 border border-slate-700 rounded-xl flex items-center justify-center text-gray-500">
              <video className="h-full w-full rounded-lg" controls>
                <source src="https://docs.material-tailwind.com/demo.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* FORMA 2: Tu Descripción  */}
            <div className="min-h-[100px] border border-dashed border-gray-700 p-4 rounded-xl text-gray-500 space-y-5">
              <div className="flex flex-nowrap gap-x-30 ">
                <div>
                  <p className="text-xl">Reslisate par:</p>{' '}
                </div>
                <div>
                  <p className="text-xl">Durée:</p>{' '}
                </div>
                <div>
                  <p className="text-xl">Pays:</p>{' '}
                </div>
              </div>
              <div> </div>
              <div> </div>
              <div> </div>
              <div>
                {' '}
                <h2 className="text-base">
                  Expression qui signifie littéralement: « d’une main large ».
                  Elle est composée de l’adjectif largus ( larga au féminin
                  ablatif) = large et du substantif manus (manu à l’ablatif) =
                  main. L’ablatif indique ici le moyen. Donner quelque chose
                  larga manu veut dire donner sans retenue, abondamment. Sur le
                  plan de la construction, l’expression est à rapprocher de manu
                  militari, même si ici l’adjectif est placé avant le nom.
                </h2>
              </div>
            </div>

            {/* FORMA 3: Ficha IA (RELLENADO) */}
            <div className="border border-orange-500/50 rounded-xl p-6 min-h-[150px] bg-slate-900/30">
              <h3 className="text-orange-500 font-bold uppercase text-sm tracking-wider mb-2">
                FICHE D'IDENTITE IA
              </h3>
              
              <p className="text-gray-400 text-sm mb-4">Outils IA utilisés :</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm font-mono text-gray-300">
                <div>
                  <span className="text-gray-500">IA scénario :</span> 
                  <span className="ml-2">Gemini pro</span>
                </div>
                <div>
                  <span className="text-gray-500">IA Videos :</span> 
                  <span className="ml-2">Gen-3 Alpha</span>
                </div>
                <div>
                  <span className="text-gray-500">IA Images :</span> 
                  <span className="ml-2">Mid Journey</span>
                </div>
                <div>
                  <span className="text-gray-500">IA Son :</span> 
                  <span className="ml-2">Udio & Eleven Labs</span>
                </div>
                <div className="md:col-span-2">
                   <span className="text-gray-500">IA Post-Prod :</span> 
                   <span className="ml-2">Topaz Labs</span>
                </div>
              </div>
            </div>
          </div>

          {/* === COLUMNA DERECHA (Ocupa 1 espacio) === */}
          <div className="space-y-6">
            
            {/* FORMA 4: Director (RELLENADO) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[200px]">
              <h3 className="text-orange-500 font-bold uppercase mb-6 text-sm tracking-wider">
                A PROPOS DU REALISATEUR
              </h3>

              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop" 
                  alt="Adrien Nacer" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-600"
                />
                <div>
                  <h4 className="text-white text-lg font-bold">Adrien Nacer</h4>
                  <p className="text-xs text-gray-500">Réalisateur IA</p>
                </div>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Passionné d'IA générative, explore les futurs possibles à travers le cinéma.
              </p>

              <div className="flex gap-3">
                 <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-xs">IG</span>
                 </div>
                 <div className="w-8 h-8 rounded-lg bg-black border border-gray-700 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-white">
                    <span className="font-bold text-xs">Tk</span>
                 </div>
                 <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-white">
                    <span className="font-bold text-xs">in</span>
                 </div>
              </div>
            </div>

            {/* FORMA 5: Compartir (RELLENADO) */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[100px]">
              <h3 className="text-gray-300 font-bold uppercase mb-4 text-sm tracking-wider">
                PARTAGER CE FILM
              </h3>

              <div className="flex gap-3">
                <button className="flex-1 bg-sky-500 hover:bg-sky-400 text-white py-2 px-4 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  Twitter
                </button>
                <button className="flex-1 bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-bold text-sm transition-colors flex items-center justify-center gap-2">
                  Facebook
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}