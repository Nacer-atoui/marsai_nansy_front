import { useTranslation } from 'react-i18next';

export default function EventFormat() {
  const { t } = useTranslation();

  const cards = [
    {
      title: t('format_card1_title', { defaultValue: '2 mois' }),
      label: t('format_card1_label', { defaultValue: 'appel à projet' }),
      desc: t('format_card1_desc', { defaultValue: 'Candidatures ouvertes aux créateurs du monde entier.' })
    },
    {
      title: t('format_card2_title', { defaultValue: '50 Films' }),
      label: t('format_card2_label', { defaultValue: 'Sélection Officielle' }),
      desc: t('format_card2_desc', { defaultValue: "Courts-métrages d'une minute retenus pour la compétition." })
    },
    {
      title: t('format_card3_title', { defaultValue: 'Web & RS' }),
      label: t('format_card3_label', { defaultValue: 'Diffusion Digitale' }),
      desc: t('format_card3_desc', { defaultValue: 'Visibilité mondiale via les réseaux et plateformes.' })
    },
    {
      title: t('format_card4_title', { defaultValue: 'Festival' }),
      label: t('format_card4_label', { defaultValue: 'Salles de Cinéma' }),
      desc: t('format_card4_desc', { defaultValue: 'Projection sur grand écran pour une immersion totale.' })
    }
  ];

  return (
    <section className="bg-[#07091D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider flex flex-wrap gap-x-[0.3em] mb-4">
          <span>{t('format_title_p1', { defaultValue: 'Format de la' })}</span>
          <span className="text-mars-orange">{t('format_title_p2', { defaultValue: 'sélection' })}</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl text-[25px]">
          {t('format_subtitle', { defaultValue: 'Le parcours des oeuvres' })}
        </p>

        <div className="flex justify-between mt-10 gap-6 flex-wrap">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className='p-10 rounded-xl w-full md:w-[23%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] border-2 bg-[#0B0F23]/50 transition-transform hover:scale-105'
            >
              <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">
                {card.title}
              </h3>
              <p className="uppercase pt-3 text-mars-orange font-bold text-sm tracking-widest">
                {card.label}
              </p>
              <p className="pt-3 text-gray-300 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}