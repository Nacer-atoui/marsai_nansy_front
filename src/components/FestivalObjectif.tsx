import { useTranslation } from 'react-i18next';

export default function FestivalObjectif() {
  // On récupère t pour les textes et i18n pour la langue actuelle si besoin
  const { t } = useTranslation();

  const marsOrange = '#f97316';

  const cards = [
    {
      img: "Fleche.png",
      // Les clés correspondent aux content_key dans ta table SQL translations
      title: t('objectif_card1_title', { defaultValue: "L'Humain au centre" }),
      desc: t('section_prix_text') 
    },
    {
      img: "Foudre.png",
      title: t('objectif_card2_title', { defaultValue: "Challenge Créatif" }),
      desc: t('section_50_text')
    },
    {
      img: "Fusée.png",
      title: t('objectif_card3_title', { defaultValue: "Futurs Souhaitables" }),
      desc: t('section_jury_text')
    }
  ];

  return (
    <section className="bg-[#07091D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            {t('objectif_main_title_part1', { defaultValue: "Objectif Du" })}{' '}
            <span style={{ color: marsOrange }} className="font-bold">
               {t('objectif_main_title_part2', { defaultValue: "Festival" })}
            </span>
          </h2>
        </div>

        {/* Ajout de flex-wrap pour le responsive mobile */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between mt-10 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="w-full lg:w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] border-2 p-10 rounded-xl bg-[#0B0F23]">
              <img className="w-12 h-12 object-contain" src={card.img} alt="icon" />
              <h3 className="font-bold text-2xl mt-5 text-white uppercase">{card.title}</h3>
              <p className="text-gray-300 mt-4 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}