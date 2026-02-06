import { useTranslation } from 'react-i18next';

interface MarsProps {
  config: any;
}

export default function MarsSection({ config }: MarsProps) {
  const { t } = useTranslation();

  const events = [
    {
      id: 1,
      title: t('challenge_title', { defaultValue: 'DÉFI 1 MINUTE' }),
      description: t('section_50_text'),
      // Texte dynamique pour le bouton
      buttonText: t('btn_participate', { defaultValue: 'PARTICIPER AU DÉFI' }),
      themeColor: 'orange' as const,
      imageUrl: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop", 
    },
    {
      id: 2,
      title: "MASTERCLASS & LABS",
      description: t('section_prix_text'),
      // Texte dynamique pour le bouton
      buttonText: t('btn_reserve', { defaultValue: 'RÉSERVER MA PLACE' }),
      themeColor: 'cyan' as const,
      imageUrl: "https://images.unsplash.com/photo-1622979135228-5b1ed317b9bd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      title: t('future_cinema_title', { defaultValue: 'FUTUR DU CINÉMA' }),
      description: t('section_jury_text'),
      // Texte dynamique pour le bouton
      buttonText: t('btn_view_program', { defaultValue: 'DÉCOUVRIR LE PROGRAMME' }),
      themeColor: 'orange' as const,
      imageUrl: "https://images.unsplash.com/photo-1478720568477-152d9b164e63?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#07091D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
               <span className="mr-3">{t('hero_title', { defaultValue: 'LE PROJET' })}</span> 
               <span style={{ color: config.primary_color || '#f97316' }}>MARS.A.I</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl text-lg font-medium">
              {t('section_mars_subtitle')}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((card) => (
            <div key={card.id} className="relative h-96 rounded-3xl overflow-hidden group shadow-xl border border-slate-800">
              <img src={card.imageUrl} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight uppercase">{card.title}</h3>
                <p className="text-gray-300 text-sm mb-6 font-medium border-t border-gray-600/50 pt-4 w-full leading-relaxed">{card.description}</p>
                {/* Le bouton utilise maintenant card.buttonText qui est dynamique */}
                <span className={`inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer ${card.themeColor === 'orange' ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white' : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'}`}>
                  {card.buttonText}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}