import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { MovieType } from '../components/MovieList/MovieList';
import UserDetailVideo from '../components/UserDetailVideo';

export default function FilmDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieType>();
  const [youtubeId, setYoutubeId] = useState<string>();

  useEffect(() => {
    fetch('http://localhost:3000/movie/' + id)
      .then(res => {
        if (!res.ok) throw new Error('Erreur réseau ou 404');
        return res.json();
      })
      .then(data => {
        setMovie(data[0]);
        setYoutubeId(data[0].youtube_url.split('v=')[1]);
      });
  }, [id]);

  if (movie == undefined) return <div className="min-h-screen bg-slate-950 text-white p-12 text-center">Chargement...</div>;

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center mb-8">
          <Link to="/movie" className="mb-1">
            <h3 className="underline text-orange-500 hover:text-white transition-colors duration-300 text-sm font-bold uppercase">
              RETOUR À LA LISTE DES VIDEOS
            </h3>
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold uppercase leading-none">
            {movie.original_title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="aspect-video bg-gray-900 border border-slate-700 rounded-xl flex items-center justify-center text-gray-500">
              <iframe
                className="w-full h-full"
                src={'https://www.youtube.com/embed/' + youtubeId}
                title="YouTube video"
                allow="fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                loading="lazy"
              ></iframe>
            </div>

            <div className="min-h-100px border border-dashed border-gray-700 p-4 rounded-xl text-gray-500 space-y-5">
              <div className="flex flex-wrap gap-x-10">
                <p className="text-xl">Réalisé par: {movie.original_title}</p> {/* Attention, ici tu affiches le titre au lieu du réalisateur ! */}
                <p className="text-xl">Durée: {movie.duration} min</p>
                <p className="text-xl">Pays: {movie.language}</p>
              </div>
              <div>
                <h2 className="text-base">{movie.original_synopsis}</h2>
              </div>
            </div>

            {/* Fiche technique IA Publique */}
            <div className="border border-orange-500/50 rounded-xl p-6 min-h-150px bg-slate-900/30">
              <h3 className="text-orange-500 font-bold uppercase text-sm tracking-wider mb-2">FICHE D'IDENTITE IA</h3>
              <p className="text-gray-400 text-sm mb-4">Outils IA utilisés :</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm font-mono text-gray-300">
                <div><span className="text-gray-500">IA Tool :</span><span className="ml-2">Gemini pro</span></div>
                <div className="md:col-span-2"><span className="text-gray-500">IA Post-Prod :</span><span className="ml-2">Topaz Labs</span></div>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE (UNIQUEMENT VISITEUR) */}
          <div className="space-y-6">
            <UserDetailVideo />
          </div>
        </div>
      </div>
    </div>
  );
}