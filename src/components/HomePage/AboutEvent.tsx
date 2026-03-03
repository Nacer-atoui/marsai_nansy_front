import { useTranslation } from 'react-i18next';

export default function AboutEvent() {
  const { t } = useTranslation();

  // Tableau pour les étapes (plus propre que de répéter 3 fois le HTML)
  const steps = [
    { number: "1", text: t('about_step1', { defaultValue: 'Sélection des projets innovants.' }) },
    { number: "2", text: t('about_step2', { defaultValue: 'Accompagnement par des experts IA.' }) },
    { number: "3", text: t('about_step3', { defaultValue: 'Projection et remise des prix au festival.' }) }
  ];

  return (
    <section className="bg-midnight py-20 px-4 font-montserrat text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE PRINCIPAL */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider flex flex-wrap gap-x-3 items-baseline">
            <span>
              {t('about_title_part1', { defaultValue: 'Deux journées de' })}
            </span>
            <span className="text-[#f97316] font-bold">
              {t('about_title_highlight', { defaultValue: 'conférences' })}
            </span>
            <span>
              {t('about_title_part2', { defaultValue: 'gratuites' })}
            </span>
          </h2>
        </div>

        {/* LISTE DES ÉTAPES */}
        <div className="mt-10 space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center bg-[#0B0F23]/50 p-4 rounded-xl border border-transparent hover:border-[#00FFFF]/30 transition-all duration-300">
              <span className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#00FFFF] text-[#00FFFF] font-bold text-lg mr-4 shadow-[0_0_10px_rgba(0,255,255,0.3)]">
                {step.number}
              </span>
              <p className="text-lg md:text-xl text-gray-200">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* GRILLE : PROJECTION & WORKSHOPS */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          
          {/* Carte Projections */}
          <div className="flex-1 bg-[#0B0F23] border border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
            <img className="w-12 h-12 object-contain mb-6" src="projection.png" alt="projection icon" />
            <h3 className="font-bold text-2xl md:text-3xl mb-4 uppercase text-white">
              {t('about_proj_title', { defaultValue: 'Projections' })}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('about_proj_desc', { defaultValue: 'Découvrez les œuvres sélectionnées sur grand écran.' })}
            </p>
          </div>
          
          {/* Carte Workshops */}
          <div className="flex-1 bg-[#0B0F23] border border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] rounded-2xl p-8 hover:scale-[1.02] transition-transform duration-300">
            <img className="w-12 h-12 object-contain mb-6" src="computer-chip.png" alt="chip icon" />
            <h3 className="font-bold text-2xl md:text-3xl mb-4 uppercase text-white">
              {t('about_work_title', { defaultValue: 'Workshops' })}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              {t('about_work_desc', { defaultValue: 'Apprenez à maîtriser les outils IA avec des professionnels.' })}
            </p>
          </div>
        </div>

        {/* BANDEAU : REMISE DES PRIX */}
        <div className="mt-10 bg-gradient-to-r from-[#0B0F23] to-[#1a1f3d] border border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] rounded-2xl p-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          <img className="w-16 h-16 object-contain" src="price.png" alt="awards icon" />
          <div>
            <h3 className="font-bold text-2xl md:text-3xl mb-3 uppercase text-white text-center md:text-left">
              {t('about_prize_title', { defaultValue: 'Cérémonie de remise des prix' })}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed text-center md:text-left">
              {t('about_prize_desc', { defaultValue: 'Célébration des créateurs et annonce des grands gagnants de cette édition.' })}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}