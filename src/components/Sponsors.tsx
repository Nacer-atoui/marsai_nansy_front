import { useTranslation } from 'react-i18next';

export default function Sponsors() {
  const { t } = useTranslation();

  // Liste des logos
  const partners = [
    { src: "topito.png", alt: "Topito", size: "w-[80%]" },
    { src: "bioguia.jpg", alt: "Bioguia", size: "w-[60%]" },
    { src: "Dotsub.png", alt: "Dotsub", size: "w-[80%]" },
    { src: "bioaddict.png", alt: "Bioaddict", size: "w-[80%]" },
    { src: "SensCritique.png", alt: "SensCritique", size: "w-[80%]" },
    { src: "CNC.webp", alt: "CNC", size: "w-[70%]" },
    { src: "SACD.webp", alt: "SACD", size: "w-[70%]" },
    { src: "unric.png", alt: "UNRIC", size: "w-[70%]" },
    { src: "sdg.png", alt: "SDG", size: "w-[70%]" },
    { src: "gybn.png", alt: "GYBN", size: "w-[70%]" },
    { src: "psl.png", alt: "PSL", size: "w-[60%]" },
    { src: "undp.webp", alt: "UNDP", size: "w-[60%]" },
  ];

  return (
    <section className="bg-#07091D py-24 px-4 relative">
      
      {/* Fond lumineux orange discret derrière le titre */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-600px h-400px bg-[#f97316]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Label avec icône */}
        <div className="flex justify-center items-center mb-10">
          <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm mr-4 border border-white/20">
             <img className="w-8" src="handshake.png" alt="handshake" />
          </div>
          <p className="text-2xl font-bold uppercase text-white tracking-[0.2em]">
            {t('sponsors_label', { defaultValue: 'Nos partenaires' })}
          </p>
        </div>

        {/* Titre Principal */}
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider text-center leading-tight">
            {t('sponsors_title_part1', { defaultValue: 'Ils soutiennent' })}{' '}
            <span className="text-[#f97316]">
              {t('sponsors_title_highlight', { defaultValue: 'le futur' })}
            </span>
          </h2>
        </div>

        {/* Grille des Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {partners.map((logo, index) => (
            <div 
              key={index} 
              // ICI : bg-white pur, pas d'opacité, pas de filtre.
              className="group h-32 md:h-40 bg-white rounded-xl flex items-center justify-center p-4 
                         border-2 border-transparent transition-all duration-300
                         hover:border-[#00FFFF] hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] hover:-translate-y-2"
            >
              <img 
                // ICI : J'ai retiré 'grayscale' et 'opacity'. L'image est brute.
                className={`${logo.size} object-contain transition-transform duration-300 group-hover:scale-110`} 
                src={logo.src} 
                alt={logo.alt} 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}