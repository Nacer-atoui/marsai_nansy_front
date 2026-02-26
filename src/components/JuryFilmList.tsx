import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Film {
  id: number;
  title: string;
  author: string;
  country: string;
  cover: string;
  isVoted?: boolean; 
}

const JuryFilmList: React.FC = () => {
  const navigate = useNavigate();
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

useEffect(() => {
    const fetchFilms = async () => {
      try {
        // 1. ON AJOUTE L'ID DU JURY DANS L'URL (Ici 1 pour tester, tu mettras l'ID réel plus tard)
        const response = await fetch('http://localhost:3000/movie?userId=1'); 
        const data = await response.json();

        const filmsFormates = data.map((filmBDD: any) => ({
          id: filmBDD.id,
          title: filmBDD.original_title || filmBDD.english_title,
          author: 'Réalisateur #' + filmBDD.director_id,
          country: filmBDD.language,
          cover: filmBDD.cover_img
            ? `${filmBDD.cover_img}?w=150&q=70`
            : 'https://via.placeholder.com/80x50/1e293b/ffffff',
            
          // 2. ON UTILISE LA DONNÉE DU BACKEND
          // Si has_voted est 1 (vrai dans la BDD), isVoted devient true
          isVoted: filmBDD.has_voted === 1 
        }));

        setFilms(filmsFormates);
      } catch (err) {
        console.error('Erreur:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, []);

  if (isLoading) return <div className="p-10 text-white text-center">Chargement des films...</div>;

  return (
    <div className="p-10 text-white font-display max-w-6xl mx-auto">
      <div className="mb-10">
        <h3 className="text-mars-orange font-bold tracking-[0.2em] text-xs mb-3 uppercase">
          Espace Jury
        </h3>
        <h1 className="text-3xl font-black mb-2">FILMS EN COMPÉTITION</h1>
        <p className="text-gray-400 text-sm">
          Sélectionnez un film pour le visionner et soumettre votre évaluation.
        </p>
      </div>

      <div className="bg-midnight p-6 rounded-2xl shadow-lg border border-[#364153]">
        <div className="flex flex-col gap-2 overflow-y-auto h-[calc(100vh-250px)] pr-2">
          {films.map(film => (
            <div 
              key={film.id} 
              className="flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-800 rounded-xl transition-colors border border-transparent hover:border-mars-orange/50"
            >
              <div className="flex items-center gap-4">
                <img src={film.cover} alt={film.title} loading="lazy" className="w-16 h-10 object-cover rounded-md shadow-sm" />
                <div>
                  <div className="font-bold text-white">{film.title}</div>
                  <div className="text-xs text-gray-400">{film.author} • {film.country}</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Badge d'état visuel */}
                {film.isVoted ? (
                  <span className="text-green-500 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Noté
                  </span>
                ) : (
                  <span className="text-orange-500 text-xs font-bold uppercase tracking-wider">
                    À évaluer
                  </span>
                )}
                <button
                  onClick={() => navigate(`/admin/jury/film/${film.id}`)}
                  className="px-4 py-2 bg-white/5 hover:bg-mars-orange text-white text-xs font-bold rounded-lg transition-colors uppercase tracking-wider"
                >
                  Visionner
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JuryFilmList;