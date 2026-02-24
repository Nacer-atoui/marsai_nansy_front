import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MovieSelection() {
  const { t } = useTranslation();

  // 🛑 DONNÉES TEMPORAIRES (En attendant de les faire venir de ta base de données)
  const temporaryMovies = [
    {
      id: 1,
      title: "L'Aube de l'IA",
      director: "Jean Dupont",
      duration: "60S",
      origin: "France",
      img: "ExempleFilm.webp"
    },
    {
      id: 2,
      title: "Neon Dreams",
      director: "Sarah Connor",
      duration: "120S",
      origin: "USA",
      img: "ExempleFilm.webp"
    },
    {
      id: 3,
      title: "Cyberpunk 2026",
      director: "Akira Tanaka",
      duration: "90S",
      origin: "Japon",
      img: "ExempleFilm.webp"
    }
  ];

  return (
    <div>
      <section className="bg-midnight py-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          {/* EN-TÊTE DYNAMIQUE (Géré par le CMS Accueil) */}
          <h2 className="w-[30%] text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-10">
            {t('films.title.t1')}{' '}
            <span className="text-mars-orange font-bold">{t('films.title.t2')}</span>
          </h2>
          <p className="text-[20px] w-[70%] mb-10">
            {t('films.description')}
          </p>
          
          {/* BOUCLE SUR LA BASE DE DONNÉES (Ici notre tableau temporaire) */}
          <div className="flex justify-between gap-20">
            {temporaryMovies.map((movie) => (
              <div key={movie.id} className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 rounded-l-xl rounded-r-xl flex-col">
                <div className="rounded-xl">
                  <img
                    src={movie.img}
                    alt={movie.title}
                    className="rounded-tl-xl rounded-tr-xl h-[300px] w-[100%] object-cover"
                  />
                </div>
                <div className="flex mt-5 justify-between p-5 rounded-xl">
                  <div className="flex flex-col justify-between">
                    <h3 className="uppercase font-bold text-[25px] mb-5">
                      {movie.title}
                    </h3>
                    <p className="uppercase mb-2 text-sm text-gray-400">
                      {t('films.labels.director')} 
                    </p>
                    <p className="font-bold">{movie.director}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <p className="text-red-900 p-1 pr-3 pl-3 bg-mars-orange font-bold text-[20px] rounded-lg mb-5">
                      {movie.duration}
                    </p>
                    <p className="uppercase mb-2 text-sm text-gray-400">
                      {t('films.labels.origin')} 
                    </p>
                    <div className="flex items-center gap-2">
                      <img className="w-[20px]" src="monde.png" alt="monde" />
                      <p className="font-bold">{movie.origin}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LE BOUTON PIMPÉ */}
          <div className="flex justify-center mt-16">
            <Link
              to={'/movie'}
              className="group flex items-center gap-4 border-2 border-mars-orange px-10 py-4 rounded-xl text-xl font-black uppercase tracking-widest hover:bg-mars-orange hover:shadow-[0_0_30px_rgba(255,100,0,0.5)] transition-all duration-300 active:scale-95"
            >
              {/* Le texte */}
              <span className="text-mars-orange group-hover:text-white transition-colors duration-300">
                {t('films.link.text')}
              </span>
            
            </Link>
          </div>

        </div> 
      </section>
    </div>
  );
}