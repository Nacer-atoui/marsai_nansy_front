import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import JuryVideoDetail from '../components/JuryVideoDetail';

export default function JuryFilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [film, setFilm] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(`http://localhost:3000/movie/${id}`);
        if (response.ok) {
          const data = await response.json();
          setFilm(data);
        } else {
          console.error("Film non trouvé");
        }
      } catch (error) {
        console.error("Erreur", error);
      } finally {
        setIsLoading(false);
      }
    };
    if (id) fetchFilm();
  }, [id]);

  // États de chargement avec la nouvelle couleur de fond
  if (isLoading) return <div className="min-h-screen bg-[#07091D] text-cyan-500 p-10 flex items-center justify-center font-bold animate-pulse">Chargement du film...</div>;
  if (!film) return <div className="min-h-screen bg-[#07091D] text-red-500 p-10 flex items-center justify-center">Film introuvable.</div>;

  return (
    // FOND GLOBAL EXACT (#07091D) + Centrage vertical (items-center) et horizontal (justify-center)
    <div className="min-h-screen bg-[#07091D] p-8 text-white font-sans flex justify-center items-center">
      <div className="max-w-[1400px] w-full flex flex-col lg:flex-row gap-8 items-stretch">
        
        {/* COLONNE GAUCHE (Vidéo + Infos) */}
        <div className="flex-1 flex flex-col gap-8">
          
          {/* 🎬 LECTEUR VIDÉO (Pleine taille, object-cover) */}
          <div className="bg-black border border-[#1E293B] rounded-xl overflow-hidden aspect-video shadow-2xl relative">
            {film.youtube_url ? (
              <video 
                src={film.youtube_url} 
                controls 
                className="w-full h-full object-cover"
                controlsList="nodownload"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                Vidéo non disponible
              </div>
            )}
          </div>

          {/* 📊 BLOC INFORMATIONS AVEC TITRE */}
          <div className="bg-[#0F1423] border border-[#1E293B] rounded-xl p-8 shadow-xl flex-1">
            
            {/* AJOUT DU TITRE ICI */}
            <h1 className="text-3xl font-bold text-cyan-400 uppercase mb-2 tracking-wider drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              {film.original_title || "TITRE INCONNU"}
            </h1>
            
            <hr className="border-[#1E293B] mb-6 opacity-50" />

            {/* Grille des infos techniques */}
            <div className="grid grid-cols-4 gap-6 mb-8">
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Réalisateur ID</p>
                <p className="font-bold text-lg text-white">{film.director_id || '--'}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Durée</p>
                <p className="font-bold text-lg text-white">{film.duration ? `${film.duration} min` : '--'}</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Pays</p>
                <p className="font-bold text-lg text-white">FR</p>
              </div>
              <div className="text-center md:text-left">
                <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">Outils IA</p>
                <span className="font-bold text-sm text-orange-500 bg-orange-500/10 px-2 py-1 rounded inline-block">
                  [{film.ia_tools || 'Aucun'}]
                </span>
              </div>
            </div>

            {/* Synopsis */}
            <div>
              <p className="text-xs text-slate-500 mb-2 uppercase tracking-wider">Synopsis</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                {film.original_synopsis || "Aucun synopsis fourni pour ce film."}
              </p>
            </div>
          </div>

        </div>

        {/* COLONNE DROITE (Composant de Vote) */}
        <div className="shrink-0 lg:w-[400px] flex">
          <JuryVideoDetail movieId={id} />
        </div>

      </div>
    </div>
  );
}