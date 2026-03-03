
import type { MovieType } from './MovieList/MovieList';

interface UserDetailVideoProps {
  movie?: MovieType | null;
}

export default function UserDetailVideo({ movie }: UserDetailVideoProps) {
  // 1. PROTECTION : Si le film est en cours de chargement, on affiche un squelette
  if (!movie) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse bg-slate-900 border border-slate-800 rounded-xl p-6 h-64"></div>
        <div className="animate-pulse bg-slate-900 border border-slate-800 rounded-xl p-6 h-32"></div>
      </div>
    );
  }

  // Initiales pour l'avatar
  const initials = `${movie.firstname?.charAt(0) || ''}${movie.lastname?.charAt(0) || ''}`;

  return (
    <>
      {/* Carte du Réalisateur */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-200px shadow-xl">
        <h3 className="text-[var(--primary-color)] font-bold uppercase mb-6 text-sm tracking-wider">
          À PROPOS DU RÉALISATEUR
        </h3>

        <div className="flex items-center gap-4 mb-4">
          {/* Avatar Dynamique */}
          <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center text-white font-bold text-xl shadow-inner">
            {initials || "?"}
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold leading-tight">
              {movie.firstname} {movie.lastname}
            </h4>
            <p className="text-xs text-gray-500 uppercase tracking-tighter mt-1">
              Réalisateur IA • #{movie.director_id}
            </p>
          </div>
        </div>
         
        {/*DECOMMENTER AU CAS OU ON VEUT UNE DESCRIPTION <p className="text-gray-400 text-sm leading-relaxed mb-6 italic border-l-2 border-[var(--primary-color)]/30 pl-3">
          S'exprime principalement en <span className="text-white uppercase">{movie.language}</span>.
        </p> */}

        {/* Réseaux Sociaux (Statiques pour l'instant) */}
        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
            <span className="text-white font-bold text-[10px]">IG</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-black border border-gray-700 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-white">
            <span className="font-bold text-[10px]">X</span>
          </div>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform text-white">
            <span className="font-bold text-[10px]">IN</span>
          </div>
        </div>
      </div>

      {/* Boutons de Partage Dynamiques */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 mt-6 shadow-xl">
        <h3 className="text-gray-300 font-bold uppercase mb-4 text-xs tracking-widest">
          PARTAGER CE FILM
        </h3>

        <div className="flex gap-3">
          <a
            href={`https://x.com/intent/tweet?text=Découvrez ${movie.original_title} sur MarsAI&url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-black hover:bg-gray-900 text-white py-2.5 px-4 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2 border border-slate-800"
          >
            Twitter / X
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-800 hover:bg-blue-700 text-white py-2.5 px-4 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-2"
          >
            Facebook
          </a>
        </div>
      </div>
    </>
  );
}