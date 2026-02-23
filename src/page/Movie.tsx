import { useState, useEffect } from "react";
import MovieList from "../components/MovieList/MovieList";
import SearchMovie from "../components/MovieList/SearchMovie";
import type { MovieType } from "../components/MovieList/MovieList";
import Pagination from "../components/MovieList/Pagination";

export default function Movie() {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [moviesNew, setMoviesNew] = useState<MovieType[]>([]);
  const [pagination,setPagination] = useState<number>(0);
  const [actualPage, setActualPage] = useState<number>(1);

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
      <SearchMovie movies={movies} setMoviesNew={setMoviesNew} moviesNew={moviesNew} pagination={pagination} actualPage={actualPage} setActualPage={setActualPage} setPagination={setPagination} />
      <MovieList movies={movies} loading={loading} error={error} moviesNew={moviesNew}/>
      <Pagination actualPage={actualPage} pagination={pagination} setActualPage={setActualPage} />
    </>
  );
}