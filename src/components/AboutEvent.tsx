import { useTranslation } from 'react-i18next';

export default function AboutEvent() {
  const { t } = useTranslation();

  return (
    <section className="bg-midnight py-20 px-4 font-montserrat text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* TITRE PRINCIPAL */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider w-[70%]">
            {/* On sépare en deux clés pour garder le mot "conférences" en orange */}
            {t('about_title_part1', { defaultValue: 'Deux journées de ' })}
            <span className="text-mars-orange font-bold">
              {t('about_title_highlight', { defaultValue: 'conférences ' })}
            </span>
            {t('about_title_part2', { defaultValue: 'gratuites' })}
          </h2>
        </div>

        {/* LISTE DES ÉTAPES */}
        <div className="mt-10">
          <p className="my-7 flex items-center">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2 flex items-center justify-center min-w-[40px] h-[40px]">
              1
            </span>
            {t('about_step1')}
          </p>
          <p className="my-7 flex items-center">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2 flex items-center justify-center min-w-[40px] h-[40px]">
              2
            </span>
            {t('about_step2')}
          </p>
          <p className="my-7 flex items-center">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2 flex items-center justify-center min-w-[40px] h-[40px]">
              3
            </span>
            {t('about_step3')}
          </p>
        </div>

        {/* GRILLE : PROJECTION & WORKSHOPS */}
        <div className="flex gap-5 justify-between mt-10">
          <div className="border-3 bg-section-light w-[50%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-xl p-10">
            <img className="w-10" src="projection.png" alt="projection" />
            <h3 className="font-bold text-[32px] mt-5 mb-5">{t('about_proj_title')}</h3>
            <p className="text-[20px] w-[70%] opacity-90">
              {t('about_proj_desc')}
            </p>
          </div>
          <div className="border-3 bg-section-light w-[50%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-xl p-10">
            <img className="w-10" src="computer-chip.png" alt="workshops" />
            <h3 className="font-bold text-[32px] mt-5 mb-5">{t('about_work_title')}</h3>
            <p className="text-[20px] w-[70%] opacity-90">
              {t('about_work_desc')}
            </p>
          </div>
        </div>

        {/* BANDEAU : REMISE DES PRIX */}
        <div className="mt-10 border-3 bg-section-light w-[100%] border-[#00FFFF]/30 shadow-[0_0_15px_rgba(0,255,255,0.5)] rounded-xl p-10">
          <img className="w-10" src="price.png" alt="awards" />
          <h3 className="font-bold text-[32px] mt-5 mb-5">{t('about_prize_title')}</h3>
          <p className="text-[20px] opacity-90">
            {t('about_prize_desc')}
          </p>
        </div>

      </div>
    </section>
  );
}