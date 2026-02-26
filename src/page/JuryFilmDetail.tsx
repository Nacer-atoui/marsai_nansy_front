import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import type { MovieType } from '../components/MovieList/MovieList';
import JuryVideoDetail from '../components/JuryVideoDetail';

export default function JuryFilmDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieType>();
  const [youtubeId, setYoutubeId] = useState<string>();
  const [youtubeUrl, setYoutubeUrl] = useState("")

  useEffect(() => {
    fetch('http://localhost:3000/movie/' + id)
      .then(res => {
        if (!res.ok) throw new Error('Erreur réseau');
        return res.json();
      })
      .then(data => {
        setMovie(data[0]);
        setYoutubeUrl(data[0].youtube_url)
        setYoutubeId(data[0].youtube_url.split('v=')[1]);
      });
  }, [id]);

  if (movie == undefined) return <div className="min-h-screen bg-slate-950 text-white p-12 text-center">Chargement...</div>;

  return (
    <div className="min-h-screen bg-midnight text-white p-6 md:p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start justify-center mb-8">
          {/* Le retour renvoie vers la page liste du jury, pas vers le site public */}
          <Link to="/admin/jury" className="mb-1">
            <h3 className="underline text-mars-orange hover:text-white transition-colors duration-300 text-sm font-bold uppercase tracking-widest">
              ← RETOUR À L'ESPACE JURY
            </h3>
          </Link>

          <h1 className="text-4xl md:text-5xl font-black uppercase leading-none mt-2">
            {movie.original_title}
          </h1>
          <p className="text-gray-400 mt-2 font-mono text-sm">ID Soumission: #{movie.id}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            
            {/* Lecteur Vidéo */}
            <div className="aspect-video bg-black border border-[#364153] rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
              {/* <iframe
                className="w-full h-full"
                src={'https://www.youtube.com/embed/' + youtubeId}
                title="YouTube video"
                allow="fullscreen"
                loading="lazy"
              ></iframe> */}
              <video controls width="800">

                <source src={youtubeUrl} type="video/mp4" />

                Télécharger la vidéo
                <a href="/shared-assets/videos/flower.webm">WEBM</a>
                ou
                <a href={youtubeUrl}>MP4</a>
                .
              </video>
            </div>

            {/* Infos techniques pour le jury (plus pro/épuré) */}
            <div className="bg-slate-900/50 border border-[#364153] p-6 rounded-xl space-y-4">
              <h3 className="text-white font-bold uppercase tracking-wider border-b border-slate-700 pb-2">Informations Techniques</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div><span className="block text-gray-500 text-xs">Réalisateur</span><span className="font-bold">{movie.director_id}</span></div>
                <div><span className="block text-gray-500 text-xs">Durée</span><span className="font-bold">{movie.duration} min</span></div>
                <div><span className="block text-gray-500 text-xs">Pays</span><span className="font-bold">{movie.language}</span></div>
                <div><span className="block text-gray-500 text-xs">Outils IA</span><span className="font-bold text-mars-orange">{movie.ia_tools || 'Non spécifié'}</span></div>
              </div>

              <div className="pt-4">
                <span className="block text-gray-500 text-xs mb-1">Synopsis</span>
                <p className="text-gray-300 text-sm leading-relaxed">{movie.original_synopsis}</p>
              </div>
            </div>
          </div>

          {/* COLONNE DROITE (UNIQUEMENT LE FORMULAIRE JURY) */}
          <div className="space-y-6">
            <JuryVideoDetail movieId={id} />
          </div>
        </div>
      </div>
    </div>
  );
}