export default function SearchMovie() {
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
          className="focus:outline-2 focus:outline-[#00FFFF]/30   mt-10 w-full lg:w-[33%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          type="text"
          placeholder="🔎   Rechercher un titre, un réalisateur..."
        />
      </div>
      <div className="text-center mt-20">
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30   mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value="date"
        >
          <option>Trier par : Plus récents</option>
        </select>
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30 mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value="genre"
        >
          <option>Filtrer par GENRE</option>
        </select>
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30 mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value="ia tools"
        >
          <option>Filtrer par OUTILS IA</option>
        </select>
        <select
          className="focus:outline-1 focus:outline-[#00FFFF]/30  mx-5 w-full lg:w-[20%] border-[#00FFFF]/30 border-2 p-3 rounded-lg bg-[#0B0F23]"
          value="country"
        >
          <option>Filtrer par PAYS</option>
        </select>
      </div>
    </section>
  );
}
