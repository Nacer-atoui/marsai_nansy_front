import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Movie.css'; // Tu peux créer un fichier CSS spécifique si besoin

// 1. DÉFINITION DU TYPE
export interface MovieType {
  id: number;
  original_title: string;
  cover_img?: string;
  description?: string;
  ia_tools: string;
  submitted_at: string;
  duration: number;
  language:string;
}
function Movie({movies, loading, error, moviesNew}: {movies: MovieType[], loading: boolean, error: string | null, moviesNew: MovieType[];}) {
  // 2. LE STATE
  

  // GESTION DES ÉTATS DE CHARGEMENT / ERREUR
  if (loading)
    return <div style={{ padding: '20px' }}>Chargement des films...</div>;
  if (error)
    return (
      <div style={{ padding: '20px', color: 'red' }}>Erreur : {error}</div>
    );

  // 4. LE RENDU (JSX)
  return (
    <div className="ml-10 mb-10">
      {/* Grille de films */}
      <div className="flex-wrap flex gap-[30px]  gap-[30px] ">
        {moviesNew.map(movie => (
          <Link className="w-[22%]" to={'/filmdetail/' + movie.id}>
            <div
              key={movie.id}
              className="focus:outline-1 focus:outline-[#00FFFF]/30 mx-5 w-full border-[#00FFFF]/30 border-2 rounded-lg bg-[#0B0F23] "
            >
              {/* Image */}

              {movie.cover_img ? (
                <div
                  className={
                    'w-[100%] h-[300px] bg-[url(' +
                    movie.cover_img +
                    ')] bg-cover  bg-size[auto] bg-center bg-contain '
                  }
                ></div>
              ) : (
                // Placeholder si pas d'image
                <div className="w-[100%] h-[300px] bg-[url(/public/Pasdimage.webp)] bg-size[auto] bg-center bg-contain"></div>
              )}

              {/* Titre */}
              <h3 className="m-5 text-left uppercase text-[19px]  ">
                {movie.original_title}
              </h3>
              <p className="mx-5 text-left flex justify-between">
                Par moi wesh • {movie.duration} sec
                <span className="text-gray-400">[{movie.language}] </span>
              </p>
              {/* <p className='text-center'> {movie.submitted_at}</p> */}
              <p className="text-center m-5 border-1 flex justify-center">
                {movie.ia_tools}
              </p>
              {/* Description (tronquée si trop longue, optionnel) */}
            </div>
          </Link>
        ))}
      </div>

      {/* Message vide */}
      {!loading && movies.length === 0 && (
        <p>Aucun film trouvé dans la base de données.</p>
      )}
    </div>
  );
}

export default Movie;
