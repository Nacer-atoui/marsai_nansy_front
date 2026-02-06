import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Header() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <header className="ml-7 mr-7 mt-3 relative z-50 text-white">
      <nav className="mb-5 flex items-center justify-between h-12">
        {/* --- 1. GAUCHE : LOGO --- */}
        <div
          onClick={() => navigate('/')}
          className="cursor-pointer font-bold text-xl z-50 relative"
        >
          Mars<span className="text-mars-orange font-bold">AI</span>
        </div>

        {/* --- 2. CENTRE : NAVIGATION (Desktop) --- */}
        <div
          className={`
          fixed inset-0 bg-midnight z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out
          lg:static lg:bg-transparent lg:flex-row lg:translate-x-0 lg:h-auto lg:w-auto lg:inset-auto
          lg:absolute lg:left-1/2 lg:-translate-x-1/2
          ${isOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
        `}
        >
          <ul className="flex flex-col lg:flex-row items-center gap-8 lg:gap-6 text-xl lg:text-base font-medium">
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-mars-orange' : 'hover:text-mars-orange'
                }
                to="/"
              >
                {/* CHANGÉ : nav_home au lieu de nav.home */}
                {t('nav_home')}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-mars-orange' : 'hover:text-mars-orange'
                }
                to="/about"
              >
                {t('nav_about')}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-mars-orange' : 'hover:text-mars-orange'
                }
                to="/movie"
              >
                {t('nav_movies')}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-mars-orange' : 'hover:text-mars-orange'
                }
                to="/jury"
              >
                {t('nav_jury')}
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'text-mars-orange' : 'hover:text-mars-orange'
                }
                to="/contact"
              >
                {t('nav_contact')}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* --- 3. DROITE : LANGUES + BURGER --- */}
        <div className="flex items-center gap-4 z-50">
          <select
            className="bg-midnight border-none focus:ring-0 cursor-pointer text-sm lg:text-base text-white"
            value={i18n.language.split('-')[0]} 
            onChange={handleLanguageChange}
          >
            <option value="fr">🌐 FR</option>
            <option value="en">🌐 EN</option>
          </select>

          <button
            onClick={toggleMenu}
            className="lg:hidden text-white focus:outline-none ml-2"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}