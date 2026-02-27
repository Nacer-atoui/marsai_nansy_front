import { Link } from 'react-router-dom';

// 1. DÉFINITION DU TYPE (Mis à jour avec tes champs réels)
export interface MovieType {
 id: number;
  original_title: string;
  english_title: string; 
  cover_img?: string;
  ia_tools: string;
  creative_process: string; 
  english_creative_process?: string; 
  duration: number;
  language: string;
  original_synopsis: string;
  english_synopsis?: string; 
  director_id: number;
  youtube_url: string;
  ishybrid: boolean | number;
  firstname?: string;
  lastname?: string;
  
}

function Movie({ 
  movies, 
  loading, 
  error, 
  moviesNew 
}: { 
  movies: MovieType[], 
  loading: boolean, 
  error: string | null, 
  moviesNew: MovieType[] 
}) {

  // GESTION DES ÉTATS DE CHARGEMENT / ERREUR
  if (loading) {
    return <div className="p-20 text-white text-center animate-pulse text-xl uppercase tracking-widest">Chargement de la sélection...</div>;
  }

  if (error) {
    return (
      <div className="p-20 text-red-500 text-center font-bold">
        ⚠️ Erreur de connexion : {error}
      </div>
    );
  }

  return (
    <div className="ml-10 mb-10">
      {/* Grille de films */}
      <div className="flex flex-wrap gap-[30px] justify-start">
        {moviesNew.map((movie) => {
          
          // 💡 CORRECTION SCALEWAY : Supprime le double slash "//" qui cause l'erreur 403
          // On remplace 'cloud//' par 'cloud/' si présent
          const cleanImageUrl = movie.cover_img?.replace('.cloud//', '.cloud/') || "/Pasdimage.webp";

          return (
            /* 💡 RÉSOLUTION ERREUR KEY : La clé doit être sur l'élément PARENT de la boucle (le Link) */
            <Link 
              key={movie.id} 
              className="w-[22%] group no-underline" 
              to={'/filmdetail/' + movie.id}
            >
              <div className="h-full border-2 border-[#00FFFF]/20 rounded-xl bg-[#0B0F23] overflow-hidden transition-all duration-300 group-hover:border-[var(--primary-color)] group-hover:scale-[1.03] group-hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                
                {/* Image avec Fallback */}
                <div className="relative h-[320px] w-full overflow-hidden">
                  <img 
                    src={cleanImageUrl} 
                    alt={movie.original_title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // 💡 Secours si Scaleway bloque toujours malgré le fix de l'URL
                      e.currentTarget.src = "/Pasdimage.webp";
                    }}
                  />
                  {/* Overlay dégradé sur l'image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F23] to-transparent opacity-60"></div>
                </div>

                {/* Contenu de la carte */}
                <div className="p-5">
                  <h3 className="text-left uppercase text-[17px] font-bold leading-tight mb-3 text-white line-clamp-2">
                    {movie.original_title}
                  </h3>
                  
                  <div className="flex justify-between items-center text-[12px] text-gray-400 font-medium">
                    <span className="uppercase tracking-tighter">Film • {movie.duration} MIN</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-[var(--primary-color)] font-bold">
                      {movie.language.toUpperCase()}
                    </span>
                  </div>

                  {/* Badge IA Dynamique */}
                  <div className="mt-5 pt-4 border-t border-white/5">
                    <p className="text-[10px] uppercase text-gray-500 mb-1 font-bold">Stack IA :</p>
                    <p className="text-center py-2 px-3 rounded-lg bg-white/5 border border-white/10 text-[var(--primary-color)] font-mono text-[11px] truncate shadow-inner">
                      {movie.ia_tools || "Generative AI"}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Message si aucun résultat après filtrage */}
      {!loading && moviesNew.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg italic">Aucun film ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
}

export default Movie;