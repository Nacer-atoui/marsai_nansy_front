import React from 'react';
import { useTranslation } from 'react-i18next'; // 👈 1. IMPORT
import type { Director, Submit } from '../components/types';

export default function SubmitRealisator({ 
  director, 
  handleChange
}: { 
  director: Director, 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, section: keyof Submit) => void
}) {

  // 👈 2. INITIALISATION
  const { t } = useTranslation();

  const inputStyle =
    'w-full bg-[#13162A] border border-[#364153] focus:outline-none focus:border-mars-orange focus:ring-1 focus:ring-[#f97316] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:border-mars-orange file:mr-4 file: file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';
  const rowClass = "mt-5 flex flex-wrap md:flex-nowrap gap-5";
  const colClass = "w-full md:w-1/2";
  const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';

  return (
    <div className='p-10 border-[#364153] rounded-xl border font-display'>
      <h3 className="text-white text-2xl font-bold border-b border-[#364153] pb-4">
        {t('submit_director.title', 'Coordonnées du réalisateur')}
      </h3>
      
      <div className={rowClass}>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.civility', 'Civilité*')}</label>
          <input 
            type="text" 
            name="civility"
            value={director.civility || ''}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder={t('submit_director.civility_placeholder', 'Mr / Mme / Autre')} 
          />
        </div>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.firstname', 'Prénom*')}</label>
          <input 
            type="text" 
            name="firstname"
            value={director.firstname} 
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="Adrien" 
          />
        </div>
      </div>

      <div className={rowClass}>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.lastname', 'Nom*')}</label>
          <input 
            type="text" 
            name="lastname" 
            value={director.lastname} 
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder={t('submit_director.lastname_placeholder', 'Le Relou')} 
          />
        </div>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.dob', 'Date de naissance*')}</label>
          <input 
            type="date" 
            name="birthday"
            value={director.birthday}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
          />
        </div>
      </div>

      <div className={rowClass}>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.email', 'Email*')}</label>
          <input 
            type="email" 
            name="email" 
            value={director.email} 
            onChange={(e) => handleChange(e, 'director')} 
            className={inputStyle} 
            placeholder="jean@test.com" 
          />
        </div>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.phone', 'Téléphone*')}</label>
          <input 
            type="text" 
            name="phone" 
            value={director.phone} 
            onChange={(e) => handleChange(e, 'director')} 
            className={inputStyle} 
            placeholder="0601020304" 
          />
        </div>
      </div>

      <div className={rowClass}>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.street', 'Rue*')}</label>
          <input 
            type="text" 
            name="address.street"
            value={director.address.street}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder={t('submit_director.street_placeholder', '123 rue de Marseille')} 
          />
        </div>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.zipcode', 'Code Postal*')}</label>
          <input 
            type="text" 
            name="address.zipcode"
            value={director.address.zipcode}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="13000" 
          />
        </div>
      </div>

      <div className={rowClass}>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.city', 'Ville*')}</label>
          <input 
            type="text" 
            name="address.city"
            value={director.address.city}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder={t('submit_director.city_placeholder', 'Marseille')} 
          />
        </div>
        <div className={colClass}>
          <label className={labelClasses}>{t('submit_director.country', 'Pays*')}</label>
          <input 
            type="text" 
            name="country" 
            value={director.country} 
            onChange={(e) => handleChange(e, 'director')} 
            className={inputStyle} 
            placeholder={t('submit_director.country_placeholder', 'France')} 
          />
        </div>
      </div>

      <div className="mt-5 flex items-center font-display">
        <div className="mt-10 w-[50%] mr-5 flex items-center gap-3">
            <input 
                type="checkbox" 
                name="newsletter"
                id="news"
                className="w-6 h-6 rounded border-[#00FFFF]/30 bg-[#0B0F23]/50 accent-[#00FFFF] cursor-pointer"
            />
            <label htmlFor="news" className="text-gray-300 cursor-pointer select-none">
                {t('submit_director.subscribe_check', 'Je souhaite m\'abonner')}
            </label>
        </div>
        <div className="mt-10 w-[50%] mr-5 flex justify-end">
            <a className='p-5 hover:cursor-pointer text-gray-400 hover:text-[#00FFFF] transition-colors'>
                {t('submit_director.subscribe_link', 'S\'inscrire à la newsLetter')}
            </a>
        </div>
      </div>
        
    </div>
  );
}