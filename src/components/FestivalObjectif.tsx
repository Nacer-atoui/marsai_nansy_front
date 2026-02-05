import { useTranslation } from 'react-i18next';

// On définit l'interface pour enlever le rouge sur "config"
interface ObjectifProps {
  config: any;
}

export default function FestivalObjectif({ config }: ObjectifProps) {
  const { i18n } = useTranslation();
  const isEn = i18n.language === 'en';

  // On prépare les données des 3 blocs
  const cards = [
    {
      img: "Fleche.png",
      title: isEn ? "Human at the center" : "L'Humain au centre",
      // Ici on utilise par exemple le champ "prix" de la BDD pour ce bloc
      desc: isEn 
        ? (config.section_prix_text_en || "Putting humans at the heart of AI-generated creation so as not to lose emotion.") 
        : (config.section_prix_text_fr || "Mettre l'humain au cœur de la création d'œuvres générées par IA pour ne pas perdre l'émotion.")
    },
    {
      img: "Foudre.png",
      title: isEn ? "Creative Challenge" : "Challenge Créatif",
      // Ici on utilise le texte "50 films" car il parle du format court
      desc: isEn 
        ? (config.section_50_text_en || "Challenging participants' creativity through a very short 60-second format.") 
        : (config.section_50_text_fr || "Challenger la créativité des participants grâce à un format très court de 60 secondes.")
    },
    {
      img: "Fusée.png",
      title: isEn ? "Desirable Futures" : "Futurs Souhaitables",
      // Ici on utilise le champ "jury" ou un autre texte de la BDD
      desc: isEn 
        ? (config.section_jury_text_en || "Leveraging the power of AI to illustrate a theme: Imagine desirable futures.") 
        : (config.section_jury_text_fr || "Mettre à profit la puissance de l'IA pour illustrer un thème : Imaginez des futurs souhaitables.")
    }
  ];

  return (
    <section className="bg-section-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            {isEn ? "Festival" : "Objectif Du"}{' '}
            <span style={{ color: config.primary_color || '#f97316' }} className="font-bold">
               {isEn ? "Objectives" : "Festival"}
            </span>
          </h2>
        </div>

        <div className="flex justify-between mt-10 gap-10">
          {cards.map((card, index) => (
            <div key={index} className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 p-10 rounded-xl">
              <img className="w-15" src={card.img} alt="icon" />
              <h3 className="font-bold text-[32px] mt-5 text-white">{card.title}</h3>
              <p className="text-gray-300 mt-2">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}