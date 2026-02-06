import { useTranslation } from 'react-i18next';

export default function AboutEvent() {
  const { t } = useTranslation();

  return (
    <section className="bg-midnight py-20 px-4 font-montserrat text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE PRINCIPAL : Correction de l'espacement ici */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider w-full md:w-[80%] flex flex-wrap gap-x-[0.3em] items-baseline">
            <span>
              {t('about_title_part1', { defaultValue: 'Deux journées de' })}
            </span>
            <span className="text-mars-orange font-bold">
              {t('about_title_highlight', { defaultValue: 'conférences' })}
            </span>
            <span>
              {t('about_title_part2', { defaultValue: 'gratuites' })}
            </span>
          </h2>
        </div>

        {/* LISTE DES ÉTAPES */}
        <div className="mt-10">
          <p className="my-7 flex items-center">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2 flex items-center justify-center min-w-[40px] h-[40px]">
              1
            </span>
            {t('about_step1', { defaultValue: 'Sélection des projets innovants.' })}
          </p>
          <p className="my-7 flex items-center">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2 flex items-center justify-center min-w-[40px] h-[40px]">
              2
            </span>
            {t('about_step2', { defaultValue: 'Accompagnement par des experts IA.' })}
          </p>
          <p className="my-7 flex items-center">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2 flex items-center justify-center min-w-[40px] h-[40px]">
              3
            </span>
            {t('about_step3', { defaultValue: 'Projection et remise des prix au festival.' })}
          </p>
        </div>

        {/* GRILLE : PROJECTION & WORKSHOPS */}
        <div className="flex flex-col md:flex-row gap-10 justify-between mt-10">
          <div className="border-3 bg-section-light w-full md:w-[50%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-xl p-10">
            <img className="w-10" src="projection.png" alt="projection" />
            <h3 className="font-bold text-[32px] mt-5 mb-5 uppercase">
              {t('about_proj_title', { defaultValue: 'Projections' })}
            </h3>
            <p className="text-[20px] w-full md:w-[80%] opacity-90">
              {t('about_proj_desc', { defaultValue: 'Découvrez les œuvres sélectionnées sur grand écran.' })}
            </p>
          </div>
          
          <div className="border-3 bg-section-light w-full md:w-[50%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-xl p-10">
            <img className="w-10" src="computer-chip.png" alt="workshops" />
            <h3 className="font-bold text-[32px] mt-5 mb-5 uppercase">
              {t('about_work_title', { defaultValue: 'Workshops' })}
            </h3>
            <p className="text-[20px] w-full md:w-[80%] opacity-90">
              {t('about_work_desc', { defaultValue: 'Apprenez à maîtriser les outils IA avec des professionnels.' })}
            </p>
          </div>
        </div>

        {/* BANDEAU : REMISE DES PRIX */}
        <div className="mt-10 border-3 bg-section-light w-full border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-xl p-10">
          <img className="w-10" src="price.png" alt="awards" />
          <h3 className="font-bold text-[32px] mt-5 mb-5 uppercase">
            {t('about_prize_title', { defaultValue: 'Cérémonie de remise des prix' })}
          </h3>
          <p className="text-[20px] opacity-90">
            {t('about_prize_desc', { defaultValue: 'Célébration des créateurs et annonce des grands gagnants de cette édition.' })}
          </p>
        </div>

      </div>
    </section>
  );
}