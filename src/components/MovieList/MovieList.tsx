import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Movie.css'; // Tu peux créer un fichier CSS spécifique si besoin

// 1. DÉFINITION DU TYPE
export interface MovieType {
  id: number;
  original_title: string;
  cover_img?: string;
  description?: string;
  release_date?: string;
}

function Movie() {
  // 2. LE STATE
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. LE FETCH
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('http://localhost:3000/movie');

        if (!response.ok) {
          throw new Error('Erreur réseau');
        }

        const data = await response.json();
        setMovies(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

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
        {movies.map(movie => (
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
                    ')] bg-cover  bg-size[auto] bg-center bg-contain'
                  }
                ></div>
              ) : (
                // Placeholder si pas d'image
                <div className="w-[100%] h-[300px] bg-[url(/public/Pasdimage.webp)] bg-size[auto] bg-center bg-contain"></div>
              )}
              {/* {movie.cover_img ? (
                <img
                  src={movie.cover_img}
                  alt={movie.original_title}
                  className="w-[100%] h-[250px] object-contain rounded-md "
                />
              ) : (
                // Placeholder si pas d'image
                <div>
                  <img
                    className="w-[100%] h-[250px] rounded-md"
                    src="PasD'image.webp"
                    alt="pas d'image"
                  />
                </div>
              )} */}

              {/* Titre */}
              <h3 className="m-5 text-center">{movie.original_title}</h3>

              {/* Description (tronquée si trop longue, optionnel) */}
              {movie.description && (
                <p style={{ fontSize: '14px', color: '#555' }}>
                  {movie.description.length > 100
                    ? movie.description.substring(0, 100) + '...'
                    : movie.description}
                </p>
              )}
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
