import React from 'react';
import { Link } from 'react-router-dom';

export default function FilmDetails() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      
      <div className="max-w-7xl mx-auto">
        
     
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


   
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* === COLUMNA IZQUIERDA (Ocupa 2 espacios) === */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* FORMA 1: El Video */}
            <div className="aspect-video bg-gray-900 border border-slate-700 rounded-xl flex items-center justify-center text-gray-500">
               [AQUÍ VA EL VIDEO]
            </div>

            {/* FORMA 2: Texto Descripción */}
            <div className="min-h-[100px] border border-dashed border-gray-700 p-4 rounded-xl text-gray-500">
               [AQUÍ VA LA DESCRIPCIÓN]
            </div>

            {/* FORMA 3: Ficha IA (Borde Naranja) */}
            <div className="border border-orange-500/50 rounded-xl p-6 min-h-[150px] bg-slate-900/30">
               [AQUÍ VA LA FICHA IA]
            </div>

          </div>


          {/* === COLUMNA DERECHA (Ocupa 1 espacio) === */}
          <div className="space-y-6">
            
            {/* FORMA 4: Director */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[200px]">
               [AQUÍ VA EL DIRECTOR]
            </div>

            {/* FORMA 5: Compartir */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[100px]">
               [AQUÍ VA COMPARTIR]
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}