import { useNavigate, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const navigate = useNavigate();
  
  // En passant 'common' ici, on n'a plus besoin de l'écrire dans chaque t()
  const { t, i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const getLinkClass = ({ isActive }: { isActive: boolean }) => {
    return `text-sm transition-colors ${
      isActive 
        ? 'text-[#FF6600] font-medium'  
        : 'text-gray-400 hover:text-[#FF6600]' 
    }`;
  };

  return (
    <footer className="w-full bg-[#0B0F23] text-white py-12 border-t border-gray-800 text-center md:text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Colonne 1 : Logo & Description */}
          <div className="flex flex-col items-center md:items-start"> 
             <div
              onClick={() => navigate('/')}
              className="cursor-pointer font-bold text-xl z-50 relative"
            >
              Mars<span className="text-[#FF6600] font-bold">AI</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs md:max-w-none mt-2">
              {t('footer.description')}
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">
              {t('footer.nav_title')}
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className={getLinkClass}>{t('nav.home')}</NavLink></li>
              <li><NavLink to="/about" className={getLinkClass}>{t('nav.about')}</NavLink></li>
              <li><NavLink to="/movie" className={getLinkClass}>{t('nav.movies')}</NavLink></li>
              <li><NavLink to="/jury" className={getLinkClass}>{t('nav.jury')}</NavLink></li>
              <li><NavLink to="/contact" className={getLinkClass}>{t('nav.contact')}</NavLink></li>
            </ul>
          </div>

          {/* Colonne 3 : Légal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">
              {t('footer.legal_title')}
            </h4>
            <ul className="space-y-2">
              <li><NavLink to="/mentions" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">{t('footer.legal.mentions')}</NavLink></li>
              <li><NavLink to="/privacy" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">{t('footer.legal.privacy')}</NavLink></li>
              <li><NavLink to="/terms" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">{t('footer.legal.terms')}</NavLink></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">
              {t('footer.contact_title')}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FF6600]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@marsai-festival.com" className="hover:text-white transition-colors">
                  contact@marsai-festival.com
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#FF6600]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>+33 (0)1 23 45 67 89</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bas de page */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-200 text-sm">
            {t('footer.copyright')}
          </p>

          <div className="flex gap-4">
            <button 
              onClick={() => changeLanguage('fr')} 
              className={`text-sm ${i18n.language.startsWith('fr') ? 'text-[#FF6600] font-bold' : 'text-gray-400'}`}
            >
              FR
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => changeLanguage('en')} 
              className={`text-sm ${i18n.language.startsWith('en') ? 'text-[#FF6600] font-bold' : 'text-gray-400'}`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};