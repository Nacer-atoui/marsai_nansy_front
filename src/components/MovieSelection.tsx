import { Link } from 'react-router-dom';
export default function MovieSelection() {
  return (
    <div>
      <section className="bg-midnight py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="w-[30%] text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-10">
            films en{' '}
            <span className="text-mars-orange font-bold">compétition</span>
          </h2>
          <p className="text-[20px] w-[70%]">
            Découvrez une sélection d'œuvres pionnières qui explorent les
            nouvelles frontières de l'imaginaire assisté par l'Intelligence
            Artificielle.
          </p>
          <div className="flex mt-10 justify-between gap-20">
            <div className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 rounded-l-xl rounded-r-xl flex-col">
              <div className="rounded-xl">
                <img
                  src="ExempleFilm.webp"
                  alt="Exemple"
                  className="rounded-tl-xl rounded-tr-xl h-[300px] w-[100%]"
                />
              </div>
              <div className="flex mt-5 justify-between p-5 rounded-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="uppercase font-bold text-[25px] mb-5">
                    titre du film
                  </h3>
                  <p className="uppercase mb-2">réalisateur</p>
                  <p className="font-bold">Nom du réalisateur</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="text-red-900 p-1 pr-3 pl-3 bg-mars-orange font-bold text-[20px] rounded-lg mb-5">
                    60S
                  </p>
                  <p className="uppercase mb-2">Origine</p>
                  <div className="flex items-center">
                    <img className="w-[40px] mr-1" src="monde.png" alt="monde" />
                    <p>Pays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 rounded-l-xl rounded-r-xl flex-col">
              <div className="rounded-xl">
                <img
                  src="ExempleFilm.webp"
                  alt="Exemple"
                  className="rounded-tl-xl rounded-tr-xl h-[300px] w-[100%]"
                />
              </div>
              <div className="flex mt-5 justify-between p-5 rounded-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="uppercase font-bold text-[25px] mb-5">
                    titre du film
                  </h3>
                  <p className="uppercase mb-2">réalisateur</p>
                  <p className="font-bold">Nom du réalisateur</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="text-red-900 p-1 pr-3 pl-3 bg-mars-orange font-bold text-[20px] rounded-lg mb-5">
                    60S
                  </p>
                  <p className="uppercase mb-2">Origine</p>
                  <div className="flex items-center">
                    <img
                      className="w-[40px] mr-1"
                      src="monde.png"
                      alt="monde"
                    />
                    <p>Pays</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 rounded-l-xl rounded-r-xl flex-col">
              <div className="rounded-xl">
                <img
                  src="ExempleFilm.webp"
                  alt="Exemple"
                  className="rounded-tl-xl rounded-tr-xl h-[300px] w-[100%] "
                />
              </div>
              <div className="flex mt-5 justify-between p-5 rounded-xl">
                <div className="flex flex-col justify-between">
                  <h3 className="uppercase font-bold text-[25px] mb-5">
                    titre du film
                  </h3>
                  <p className="uppercase mb-2">réalisateur</p>
                  <p className="font-bold">Nom du réalisateur</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <p className="text-red-900 p-1 pr-3 pl-3 bg-mars-orange font-bold text-[20px] rounded-lg mb-5">
                    60S
                  </p>
                  <p className="uppercase mb-2">Origine</p>
                  <div className="flex items-center">
                    <img
                      className="w-[40px] mr-1"
                      src="monde.png"
                      alt="monde"
                    />
                    <p>Pays</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            to={'/movie'}
            className="text-mars-orange uppercase mt-10 flex text-[25px] w-[27%] hover:opacity-75"
          >
            voir toute la selection →
          </Link>
        </div>
      </section>
    </div>
  );
}
