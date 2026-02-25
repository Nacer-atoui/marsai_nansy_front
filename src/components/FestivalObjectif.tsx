import { useTranslation } from 'react-i18next';

export default function FestivalObjectif() {
  const { t } = useTranslation();

  const marsOrange = '#f97316';

  const cards = [
    {
      img: "Fleche.png",
      // On utilise les clés uniques définies pour les Objectifs
      title: t('objectif_card1_title', { defaultValue: "L'Humain au centre" }),
      desc: t('objectif_card1_desc', { defaultValue: "Promouvoir une IA qui soutient et sublime la vision artistique sans la remplacer." }) 
    },
    {
      img: "Foudre.png",
      title: t('objectif_card2_title', { defaultValue: "Challenge Créatif" }),
      desc: t('objectif_card2_desc', { defaultValue: "Offrir un terrain de jeu inédit pour explorer les nouvelles formes de narration." })
    },
    {
      img: "Fusée.png",
      title: t('objectif_card3_title', { defaultValue: "Futurs Souhaitables" }),
      desc: t('objectif_card3_desc', { defaultValue: "Utiliser la technologie pour imaginer et construire des mondes positifs et inspirants." })
    }
  ];

  return (
    <section className="bg-midnight py-20 px-4 font-montserrat">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            {t('objectif_main_title_part1', { defaultValue: "Objectif Du" })}{' '}
            <span style={{ color: marsOrange }} className="font-bold">
              {t('objectif_main_title_part2', { defaultValue: "Festival" })}
            </span>
          </h2>
        </div>

        {/* Grille responsive : 1 colonne mobile, 3 colonnes desktop */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between mt-10 gap-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="w-full lg:w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] border-2 p-10 rounded-xl bg-[#0B0F23] transition-transform duration-300 hover:scale-[1.02]"
            >
              <img 
                className="w-12 h-12 object-contain" 
                src={card.img} 
                alt={card.title} 
              />
              <h3 className="font-bold text-2xl mt-5 text-white uppercase">
                {card.title}
              </h3>
              <p className="text-gray-300 mt-4 leading-relaxed text-lg">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}