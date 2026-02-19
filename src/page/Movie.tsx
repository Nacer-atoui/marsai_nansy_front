import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import SearchMovie from "../components/MovieList/SearchMovie";
import type { MovieType } from "../components/MovieList/MovieList";

export default function Movie() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [moviesNew, setMoviesNew] = useState<MovieType[]>([]);

  // console.log(movies)

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

  return (
    <>
      <SearchMovie movies={movies} setMoviesNew={setMoviesNew} moviesNew={moviesNew} />
      <MovieList movies={movies} loading={loading} error={error} moviesNew={moviesNew}/>
    </>
  );
}