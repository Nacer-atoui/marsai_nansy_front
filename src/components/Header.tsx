import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../index.css'

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation('common');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Détermine la langue active (fr ou en)
  const currentLang = (i18n.language || 'fr').split('-')[0];

  const changeLanguage = (lng: string) => {
    lng === 'fr' 
      ? i18n.changeLanguage('fr-FR') 
      : i18n.changeLanguage('en-EN');
  };

  return (
    <header className="ml-7 mr-7 mt-3 relative z-50 text-white">
      <nav className="mb-5 flex items-center justify-between h-12">
        {/* LOGO - Retour à la taille et police du début */}
        <div
          onClick={() => navigate('/')}
          className="uppercase cursor-pointer font-bold text-xl z-50 relative"
        >
          Mars<span className="text-mars-orange font-bold">AI</span>
        </div>

        {/* NAVIGATION - Remise au centre exact avec absolute left-1/2 */}
        <div
          className={`
          fixed inset-0 bg-[#0B0F23] z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out
          lg:static lg:bg-transparent lg:flex-row lg:translate-x-0 lg:h-auto lg:w-auto lg:inset-auto
          lg:absolute lg:left-1/2 lg:-translate-x-1/2
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 text-xl lg:text-base font-medium">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[var(--primary-color)]'
                    : 'hover:text-[var(--primary-color)]'
                }
              >
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[var(--primary-color)]'
                    : 'hover:text-[var(--primary-color)]'
                }
              >
                {t('nav.about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[var(--primary-color)]'
                    : 'hover:text-[var(--primary-color)]'
                }
              >
                {t('nav.movies')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? 'text-[var(--primary-color)]'
                    : 'hover:text-[var(--primary-color)]'
                }
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* BLOC LANGUES - Nouveau sélecteur visuel à droite */}
        <div className="flex items-center gap-4 z-50">
          <div className="flex bg-white/5 border border-white/10 rounded-full p-1 shadow-2xl">
            <button
              onClick={() => changeLanguage('fr')}
              className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                currentLang === 'fr'
                  ? 'bg-[var(--primary-color)] text-white'
                  : 'text-slate-400 opacity-60'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/fr.png"
                className="w-4 h-3 object-cover rounded-[1px]"
                alt="FR"
              />
              <span className="text-[10px] font-bold uppercase">FR</span>
            </button>

            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all duration-300 ${
                currentLang === 'en'
                  ? 'bg-[var(--primary-color)] text-white'
                  : 'text-slate-400 opacity-60'
              }`}
            >
              <img
                src="https://flagcdn.com/w40/gb.png"
                className="w-4 h-3 object-cover rounded-[1px]"
                alt="EN"
              />
              <span className="text-[10px] font-bold uppercase">EN</span>
            </button>
          </div>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none ml-2"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>
    </header>
  );
}