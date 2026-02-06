import { useTranslation } from 'react-i18next';
import H2 from './ui-kit/h2'

export default function EventFormat() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#07091D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
            {/* Titre et Sous-titre traduits */}
            <H2 texte={t('format_title', { defaultValue: 'Format de la sélection' })} />
            <p className="text-gray-400 mt-4 max-w-2xl text-[25px]">
              {t('format_subtitle', { defaultValue: 'Le parcours des oeuvres' })}
            </p>

            <div className="flex justify-between mt-10 gap-6">
              {/* CARTE 1 */}
              <div className='p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">
                    {t('format_card1_title', { defaultValue: '2 mois' })}
                </h3>
                <p className="uppercase pt-3 text-mars-orange">
                    {t('format_card1_label', { defaultValue: 'appel à projet' })}
                </p>
                <p className="pt-3 text-white">
                    {t('format_card1_desc', { defaultValue: 'Candidatures ouvertes aux créateurs du monde entier.' })}
                </p>
              </div>

              {/* CARTE 2 */}
              <div className='p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">
                    {t('format_card2_title', { defaultValue: '50 Films' })}
                </h3>
                <p className="uppercase pt-3 text-mars-orange">
                    {t('format_card2_label', { defaultValue: 'Sélection Officielle' })}
                </p>
                <p className="pt-3 text-white">
                    {t('format_card2_desc', { defaultValue: "Courts-métrages d'une minute retenus pour la compétition." })}
                </p>
              </div>

              {/* CARTE 3 */}
              <div className='p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">
                    {t('format_card3_title', { defaultValue: 'Web & RS' })}
                </h3>
                <p className="uppercase pt-3 text-mars-orange">
                    {t('format_card3_label', { defaultValue: 'Diffusion Digitale' })}
                </p>
                <p className="pt-3 text-white">
                    {t('format_card3_desc', { defaultValue: 'Visibilité mondiale via les réseaux et plateformes.' })}
                </p>
              </div>

              {/* CARTE 4 */}
              <div className='p-10 rounded-xl w-[22%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2'>
                <h3 className="text-[32px] font-bold text-white mb-3 leading-tight uppercase">
                    {t('format_card4_title', { defaultValue: 'Festival' })}
                </h3>
                <p className="uppercase pt-3 text-mars-orange">
                    {t('format_card4_label', { defaultValue: 'Salles de Cinéma' })}
                </p>
                <p className="pt-3 text-white">
                    {t('format_card4_desc', { defaultValue: 'Projection sur grand écran pour une immersion totale.' })}
                </p>
              </div>
            </div>
        </div>
    </section>
  )
}