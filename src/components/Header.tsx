import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../index.css'

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  // 1. On passe 'common' ici. Cela permet de ne plus écrire "common:" plus bas.
  const { t, i18n } = useTranslation('common');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  console.log(i18n.language);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.target.value == 'fr'
      ? i18n.changeLanguage('fr-FR')
      : i18n.changeLanguage('en-EN');
  };

  return (
    <header className="ml-7 mr-7 mt-3 relative z-50 text-white">
      <nav className="mb-5 flex items-center justify-between h-12">
        {/* LOGO */}
        <div
          onClick={() => navigate('/')}
          className="uppercase cursor-pointer font-bold text-xl z-50 relative"
        >
          Mars<span className="text-[#FF6600] font-bold">AI</span>
        </div>

        {/* NAVIGATION */}
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
                  isActive ? 'text-color-mars-orange' : 'hover:text-color-mars-orange'
                }
              >
                {/* Plus besoin de common: devant nav.home */}
                {t('nav.home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-color-mars-orange' : 'hover:text-color-mars-orange'
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
                  isActive ? 'text-color-mars-orange' : 'hover:text-color-mars-orange'
                }
              >
                {t('nav.movies')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/jury"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-color-mars-orange' : 'hover:text-color-mars-orange'
                }
              >
                {t('nav.jury')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-color-mars-orange' : 'hover:text-color-mars-orange'
                }
              >
                {t('nav.contact')}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* LANGUES */}
        <div className="flex items-center gap-4 z-50">
          <select
            className="bg-transparent border-none focus:ring-0 cursor-pointer text-sm lg:text-base text-white outline-none"
            /* On sécurise l'accès à split pour Firefox */
            value={(i18n.language || 'fr').split('-')[0]}
            onChange={handleLanguageChange}
          >
            <option value="fr" className="bg-[#0B0F23]">
              FR
            </option>
            <option value="en" className="bg-[#0B0F23]">
              EN
            </option>
          </select>

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
