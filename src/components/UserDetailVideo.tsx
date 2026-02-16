import React from 'react';

export default function UserDetailVideo() {
  return (
    <>
      {/* Carte du Réalisateur (Statique) */}
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

      {/* Boutons de Partage (Statique) */}
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
    </>
  );
}
