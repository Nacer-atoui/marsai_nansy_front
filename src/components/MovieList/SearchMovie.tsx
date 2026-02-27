import React, { useEffect, useState } from 'react';
import type { MovieType } from './MovieList';
import type { Dispatch, SetStateAction } from 'react';

export default function SearchMovie({
  movies,
  setMoviesNew,
  setActualPage,
  setPagination,
  actualPage
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

  // Handlers pour réinitialiser la page à 1 lors d'une modification des filtres
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setActualPage(1);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setActualPage(1);
  };

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectLanguage(e.target.value);
    setActualPage(1);
  };

  useEffect(() => {
    // 1. Copie des films pour le filtrage
    let filteredResults = [...movies];

    // 2. Filtre par recherche (Titre)
    if (search) {
      filteredResults = filteredResults.filter(movie => 
        movie.original_title.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 3. Filtre par langue
    if (selectLanguage !== 'All') {
      filteredResults = filteredResults.filter(movie => 
        movie.language.toUpperCase().includes(selectLanguage.toUpperCase())
      );
    }

    // 4. Tri par ID (Plus récent / Plus ancien)
    filteredResults.sort((a, b) => {
      return selectedOption === 'option1' ? b.id - a.id : a.id - b.id;
    });

    // 5. Mise à jour de la pagination globale
    setPagination(Math.ceil(filteredResults.length / 20));

    // 6. Slicing pour l'affichage (les "Cards" que tu veux garder)
    const before = (actualPage - 1) * 20;
    const after = actualPage * 20;
    const paginatedResults = filteredResults.slice(before, after);

    // 7. Envoi des résultats vers le composant parent qui affiche les cards
    setMoviesNew(paginatedResults);

  }, [search, selectedOption, selectLanguage, movies, actualPage, setMoviesNew, setPagination]);

  return (
    <section className="py-20 px-4 font-montserrat text-white">
      <div className="text-center">
        {/* Titre dynamique avec ta variable CMS */}
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider">
          La sélection <span className="text-[var(--primary-color)]"> officielle</span>
        </h2>
        <p className="mt-5 text-gray-300">
          Découvrez les films finalistes retenus par le Jury MarsAI.
        </p>
        
        {/* Barre de recherche Style Code 1 (Cyber) */}
        <input
          value={search}
          onChange={handleChangeSearch}
          className="focus:outline-2 focus:outline-[#00FFFF]/30 mt-10 w-full lg:w-[45%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23] transition-all"
          type="text"
          placeholder="🔎   Rechercher un titre, un réalisateur..."
        />
      </div>

      {/* Sélecteurs Style Code 1 (Cyber) */}
      <div className="text-center mt-10 space-y-4 md:space-y-0 md:space-x-5">
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23] outline-none transition-all cursor-pointer"
          value={selectedOption}
          onChange={handleChange}
        >
          <option value="option1" className="bg-[#0B0F23]">Trier par : Plus récents</option>
          <option value="option2" className="bg-[#0B0F23]">Trier par : Plus ancien</option>
        </select>

        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23] outline-none transition-all cursor-pointer"
          value={selectLanguage}
          onChange={handleChangeLanguage}
        >
          <option value="All" className="bg-[#0B0F23]">Filtrer par Langue</option>
          <option value="FR" className="bg-[#0B0F23]">FR</option>
          <option value="EN" className="bg-[#0B0F23]">EN</option>
          <option value="ES" className="bg-[#0B0F23]">ES</option>
          <option value="DE" className="bg-[#0B0F23]">DE</option>
          <option value="IT" className="bg-[#0B0F23]">IT</option>
        </select>
      </div>
    </section>
  );
}