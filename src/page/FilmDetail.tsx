import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // 💡 Importation du hook de traduction
import type { MovieType } from '../components/MovieList/MovieList';
import UserDetailVideo from '../components/UserDetailVideo';

export default function FilmDetails() {
  const { id } = useParams();
  const { i18n } = useTranslation(); // 💡 Pour connaître la langue actuelle du site
  const [movie, setMovie] = useState<MovieType | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/movie/' + id)
      .then(res => res.json())
      .then(data => {
        if (data && data.original_title) {
          setMovie(data);
        }
      })
      .catch(err => console.error("Erreur chargement film:", err));
  }, [id]);

  if (!movie) return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
       <div className="animate-pulse tracking-widest uppercase">Chargement du film #{id}...</div>
    </div>
  );

  // 💡 LOGIQUE DE LANGUE : Détermine si on affiche la version EN ou FR
  const isEn = i18n.language.startsWith('en');
  
  const displayTitle = isEn ? movie.english_title : movie.original_title;
  const displaySynopsis = isEn ? movie.english_synopsis : movie.original_synopsis;
  const displayCreative = isEn ? movie.english_creative_process : movie.creative_process;

  const cleanCover = movie.cover_img?.replace('.cloud//', '.cloud/');
  const cleanVideo = movie.youtube_url?.replace('.cloud//', '.cloud/');

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center mb-8">
          <Link to="/movie" className="mb-1">
            <h3 className="underline text-[var(--primary-color)] hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-widest">
              {isEn ? 'BACK TO MOVIES LIST' : 'RETOUR À LA LISTE DES VIDEOS'}
            </h3>
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none">
            {displayTitle} {/* 💡 Titre dynamique */}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* 🎬 LECTEUR SCALEWAY */}
            <div className="aspect-video bg-black border border-slate-800 rounded-xl overflow-hidden shadow-2xl">
              <video 
                controls 
                className="w-full h-full"
                poster={cleanCover}
                key={cleanVideo}
              >
                <source src={cleanVideo} type="video/mp4" />
                Votre navigateur ne supporte pas la lecture de vidéos.
              </video>
            </div>

            {/* INFOS FILMS */}
            <div className="min-h-100px border border-dashed border-gray-700 p-4 rounded-xl text-gray-500 space-y-5">
              <div className="flex flex-wrap gap-x-10 text-slate-300 font-medium">
                <p>
                  {isEn ? 'Director' : 'Réalisateur'} : 
                  <span className="text-[var(--primary-color)] ml-2 font-bold uppercase tracking-wider">
                    {movie.firstname} {movie.lastname}
                  </span>
                </p>
                <p>{isEn ? 'Duration' : 'Durée'}: <span className="text-white">{movie.duration} min</span></p>
                <p>{isEn ? 'Language' : 'Langue'}: <span className="text-white font-bold">{movie.language.toUpperCase()}</span></p>
              </div>
              
              <p className="text-lg italic leading-relaxed text-slate-400 border-t border-white/5 pt-4">
                "{displaySynopsis}" {/* 💡 Synopsis dynamique */}
              </p>
            </div>

            {/* FICHE IA */}
            <div className="border border-orange-500 rounded-xl p-6 bg-slate-900/40">
              <h3 className="text-[var(--primary-color)] font-bold uppercase text-xs tracking-[0.2em] mb-4">
                {isEn ? 'AI IDENTITY CARD' : "FICHE D'IDENTITE IA"}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1">
                    {isEn ? 'Tools used' : 'Outils utilisés'}
                  </span>
                  <span className="text-slate-200 font-mono">{movie.ia_tools}</span>
                </div>
                <div>
                  <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1">Type</span>
                  <span className="text-slate-200">{movie.ishybrid ? 'Hybride' : 'Full AI'}</span>
                </div>
                <div className="md:col-span-2">
                  <span className="text-slate-500 block uppercase text-[10px] font-bold mb-1">
                    {isEn ? 'Creative Process' : 'Processus Créatif'}
                  </span>
                  <p className="text-slate-300 leading-relaxed text-xs">
                    {displayCreative} {/* 💡 Processus dynamique */}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <UserDetailVideo movie={movie} />
          </div>
        </div>
      </div>
    </div>
  );
}