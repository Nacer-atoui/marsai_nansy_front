import { useTranslation } from 'react-i18next';

export default function Sponsors() {
  const { t } = useTranslation();

  return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <img className="w-10 mr-5 " src="handshake.png" alt="handshake" />
          <p className="text-[30px] font-bold uppercase text-white">
            {t('sponsors_label', { defaultValue: 'Nos partenaires' })}
          </p>
        </div>

        <div className="flex justify-center mt-10">
          {/* J'ai ajouté 'flex gap-x-3' pour forcer l'espace entre les deux parties du titre */}
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider flex flex-wrap justify-center gap-x-3">
            <span>
              {t('sponsors_title_part1', { defaultValue: 'Ils soutiennent' })}
            </span>
            <span className="text-mars-orange font-bold">
              {t('sponsors_title_highlight', { defaultValue: 'le futur' })}
            </span>
          </h2>
        </div>

        <div className="flex justify-around mt-[50px] gap-10 flex-wrap ">
          {/* Tes logos restent identiques en dessous */}
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="topito.png" alt="topito logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[50%]" src="bioguia.jpg" alt="bioguida logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="Dotsub.png" alt="dotsub logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="bioaddict.png" alt="bioaddict logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="SensCritique.png" alt="sens critique logo" />
          </div>
          <div className="opacity-75 p-5 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="CNC.webp" alt="CNC logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="SACD.webp" alt="SACD logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="unric.png" alt="unric logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="sdg.png" alt="sdg logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="gybn.png" alt="gybn logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="psl.png" alt="psl logo" />
          </div>
          <div className="opacity-75 p-10 w-[20%] h-[220px] bg-white rounded-[20px] flex flex-col align-center justify-center">
            <img className="border-2 w-[100%]" src="undp.webp" alt="undp logo" />
          </div>
        </div>
      </div>
    </section>
  );
}