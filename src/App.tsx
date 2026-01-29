import { useEffect, useState } from 'react';
import './App.css'; // Si tu as du CSS

// 1. DÉFINITION DU TYPE (Le contrat)
// Cette interface doit correspondre aux colonnes de ta table MySQL
interface Movie {
  id: number;
  original_title: string;
  cover_img?: string;   // Le "?" veut dire que le champ peut être vide
  description?: string;
  release_date?: string;
}

function App() {
  // 2. LE STATE (La mémoire du composant)
  // On dit à React : "movies est un tableau d'objets de type Movie"
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 3. LE FETCH (L'appel réseau)
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        // On appelle ton Back-end sur le port 3000
        const response = await fetch('http://localhost:3000/movie');
        
        if (!response.ok) {
          throw new Error('Erreur réseau');
        }

        const data = await response.json();
        
        // On met à jour le state avec les données reçues
        setMovies(data); 
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); 

  
  if (loading) return <p>Chargement des films...</p>;
  if (error) return <p style={{ color: 'red' }}>Erreur : {error}</p>;

  return (
    <div className="App" style={{ padding: '20px' }}>
      <h1>Liste des Films</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '8px' }}>
            {/* Image (si elle existe) */}
            {movie.cover_img && (
              <img 
                src={movie.cover_img} 
                alt={movie.original_title} 
                style={{ width: '100%', height: '250px', objectFit: 'cover' }}
              />
            )}
            
            {/* Titre */}
            <h3>{movie.original_title}</h3>
            
            {/* Autres infos */}
            {movie.description && <p>{movie.description}</p>}
          </div>
        ))}
      </div>
      
      {movies.length === 0 && <p>Aucun film trouvé dans la base de données.</p>}
    </div>
  );
}

export default App;