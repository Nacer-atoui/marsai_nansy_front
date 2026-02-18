import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchMovie from '../components/MovieList/SearchMovie';
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

  console.log(movies);

  // GESTION DES ÉTATS DE CHARGEMENT / ERREUR
  if (loading)
    return <div style={{ padding: '20px' }}>Chargement des films...</div>;
  if (error)
    return (
      <div style={{ padding: '20px', color: 'red' }}>Erreur : {error}</div>
    );

  return (
    <div className="movie-page" style={{ padding: '20px' }}>
      <SearchMovie />

      {/* Grille de films */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
        }}
      >
        {movies.map(movie => (
          <Link to={'/filmdetail/' + movie.id}>
            <div
              key={movie.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px',
                background: '#fff',
              }}
            >
              {/* Image */}
              {movie.cover_img ? (
                <img
                  src={movie.cover_img}
                  alt={movie.original_title}
                  style={{
                    width: '100%',
                    height: '250px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                  }}
                />
              ) : (
                // Placeholder si pas d'image
                <div
                  style={{
                    width: '100%',
                    height: '250px',
                    background: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span>Pas d'image</span>
                </div>
              )}

              {/* Titre */}
              <h3 style={{ margin: '10px 0' }}>{movie.original_title}</h3>

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
