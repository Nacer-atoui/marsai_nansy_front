import React, { useState } from "react";



export default function SearchMovie() {
  const [SelectedOption, setSelectedOption] = useState('option1');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelectedOption(e.target.value);

  console.log(SelectedOption)
  return (
    <section className="py-20 px-4 font-montserrat text-white">
      <div className="text-center ">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
          La sélection officielle
        </h2>
        <p className="mt-5">
          Découvrez les 50 films finalistes retenus par le premier Jury MarsAI.
        </p>
        <input
          className="focus:outline-2 focus:outline-[#00FFFF]/30  mt-10 w-full lg:w-[33%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          type="text"
          placeholder="🔎   Rechercher un titre, un réalisateur..."
        />
      </div>
      <div className="text-center mt-20">
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30  mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value={SelectedOption}
          onChange={handleChange}
        >
          <option value="option1">Trier par : Plus récents</option>
          <option value="option2">Trier par : Plus ancients</option>
        </select>

        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30  mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value={SelectedOption}
          onChange={handleChange}
        >
          <option value="OptionP1">Filtrer par PAYS</option>
          <option value="OptionP2">France</option>
          <option value="OptionP3">USA</option>
          <option value="OptionP4">Anglais</option>
          <option value="OptionP5">Espagne</option>
          <option value="OptionP6">Colombie</option>
          <option value="OptionP7">Algérie</option>
        </select>
      </div>
    </section>
  );
}
