import React, { useEffect, useState } from 'react';
import type { MovieType } from './MovieList';
import type { Dispatch } from 'react';
import type { SetStateAction } from 'react';

export default function SearchMovie({
  movies,
  setMoviesNew,
  moviesNew,
  pagination,
  actualPage,
  setActualPage,
  setPagination,
}: {
  movies: MovieType[];
  setMoviesNew: Dispatch<SetStateAction<MovieType[]>>;
  moviesNew: MovieType[];
  pagination: number;
  actualPage: number;
  setActualPage: Dispatch<SetStateAction<number>>;
  setPagination: Dispatch<SetStateAction<number>>;
}) {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [search, setSearch] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('All');

  console.log(selectedOption);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedOption(e.target.value);

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLanguage(e.target.value);
  };

  useEffect(() => {
    setMoviesNew(movies);
  }, [movies]);

  useEffect(() => {
    moviesNew = movies.filter(movie => {
      if (movie.original_title.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    });

    console.log('avant sortie : ', movies);

    moviesNew.sort(() => {
      if (selectedOption == 'option1') {
        return -1;
      } else {
        return 1;
      }
    });

    moviesNew = moviesNew.filter(movie => {
      if (selectLanguage == 'All') {
        return true;
      }

      if (movie.language.includes(selectLanguage)) {
        return true;
      }
      return false;
    });

    setPagination(Math.ceil(moviesNew.length / 20));

    let before = ((actualPage * 20)-20);
    let after = 20 * actualPage;

    moviesNew = moviesNew.slice(before, after);
    console.log(actualPage);

    setMoviesNew(moviesNew);
  }, [search, selectedOption, selectLanguage, movies, actualPage]);

  return (
    <section className="py-20 px-4 font-montserrat text-white">
      <div className="text-center ">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
          La sélection <span className="text-mars-orange"> officielle</span>
        </h2>
        <p className="mt-5">
          Découvrez les 50 films finalistes retenus par le premier Jury MarsAI.
        </p>
        <input
          value={search}
          onChange={handleChangeSearch}
          className="focus:outline-2 focus:outline-[#00FFFF]/30  mt-10 w-full lg:w-[33%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          type="text"
          placeholder="🔎   Rechercher un titre, un réalisateur..."
        />
      </div>
      <div className="text-center mt-20">
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30  mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="option1">Trier par : Plus récents</option>
          <option value="option2">Trier par : Plus ancien</option>
        </select>

        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30  mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value={selectLanguage}
          onChange={handleChangeLanguage}
        >
          <option value="All">Filtrer par Langue</option>
          <option value="FR">FR</option>
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="DE">DE</option>
          <option value="IT">IT</option>
          <option value="Other">Autre</option>
        </select>
      </div>
    </section>
  );
}
