
import { NavLink, Outlet } from 'react-router-dom';

export default function Admin() {
  return (
    <div className="grid grid-cols-[17%_83%] h-screen">
      <div className="bg-[oklch(28.2% 0.091 267.935)]">
        <div className="flex flex-col mt-20 gap-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              isActive
                ? 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-orange-500 text-orange-500 bg-white/5'
                : 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/cms"
            className={({ isActive }) =>
              isActive
                ? 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-orange-500 text-orange-500 bg-white/5'
                : 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }
          >
            CMS
          </NavLink>

          <NavLink
            to="/admin/films"
            className={({ isActive }) =>
              isActive
                ? 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-orange-500 text-orange-500 bg-white/5'
                : 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }
          >
            Films
          </NavLink>

          <NavLink
            to="/admin/utilisateurs"
            className={({ isActive }) =>
              isActive
                ? 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-orange-500 text-orange-500 bg-white/5'
                : 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }
          >
            Utilisateurs
          </NavLink>

          <NavLink
            to="/admin/statistiques"
            className={({ isActive }) =>
              isActive
                ? 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-orange-500 text-orange-500 bg-white/5'
                : 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }
          >
            Statistiques
          </NavLink>

          <NavLink
            to="/admin/parametres"
            className={({ isActive }) =>
              isActive
                ? 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-orange-500 text-orange-500 bg-white/5'
                : 'block w-full text-left px-6 py-3 font-medium transition-colors border-l-4 border-transparent text-gray-400 hover:text-white hover:bg-white/5'
            }
          >
            Paramètres
          </NavLink>
        </div>
      </div>

      <div className="bg-[oklch(28.2% 0.091 267.935)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
