import { useTranslation } from 'react-i18next';

export default function NightEvent() {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
            {/* Conteneur principal avec image de fond et effet néon */}
            <div className="gap-10 p-12 border border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.3)] rounded-3xl bg-[url('/fond-night-opacity.png')] bg-cover bg-center relative overflow-hidden">
                
                {/* Overlay pour la lisibilité */}
                <div className="absolute inset-0 bg-[#07091D]/60 -z-10"></div>

                <button className="px-6 py-3 bg-[#f97316] text-white font-bold rounded-lg uppercase mb-10 hover:bg-orange-600 transition-all duration-300 w-full md:w-auto shadow-lg">
                    {t('night_label', { defaultValue: 'Cérémonie de clôture' })}
                </button>

                <div className='flex flex-col lg:flex-row gap-10 relative z-10'>
                    {/* Partie Gauche : Titre et Description */}
                    <div className="flex flex-col w-full lg:w-[55%] gap-6">
                        <h2 className="text-white text-5xl md:text-7xl lg:text-[100px] font-bold leading-none tracking-tighter">
                            MARS<span className='text-[#f97316]'>AI</span> <br />NIGHT
                        </h2>
                        <p className="mt-4 text-gray-200 text-lg md:text-2xl max-w-2xl leading-relaxed">
                            {t('night_description', { defaultValue: 'Fête Électro mêlant IA et futurs souhaitables. Une expérience immersive sonore et visuelle.' })}
                        </p>
                    </div>

                    {/* Partie Droite : Carte Date & Pass */}
                    <div className="flex flex-col md:flex-row gap-6 w-full lg:w-[45%]">
                        <div className="flex-1 bg-[#0B0F23]/80 backdrop-blur-md border border-slate-700 rounded-2xl p-8 shadow-2xl">
                            <div className='flex items-center flex-col justify-center gap-6'>
                                <img src="/calendrier.png" alt="Calendrier" className='w-16 opacity-90'/>
                                
                                <div className="text-center">
                                    <p className='text-5xl md:text-6xl font-bold text-white uppercase'>
                                        {t('night_date', { defaultValue: '13 JUIN' })}
                                    </p>
                                    <p className='text-2xl text-[#f97316] font-medium mt-2'>
                                        {t('night_time', { defaultValue: 'à partir de 19h' })}
                                    </p>
                                </div>

                                <button className="mt-4 px-8 py-4 bg-[#f97316] text-white font-bold rounded-xl uppercase hover:bg-orange-600 hover:scale-105 transition-all duration-300 w-full shadow-orange-500/20 shadow-lg">
                                    {t('night_btn_pass', { defaultValue: 'Prendre mon pass' })}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
}