import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // On redirige vers ton chemin secret défini dans le .env
    navigate(`/${import.meta.env.VITE_SECRET_AUTH_PATH}`);
  };

  return (
    <div className="grid grid-cols-[17%_83%] h-screen">
      {/* SIDEBAR - Ta couleur oklch conservée */}
      <div className="bg-[oklch(28.2% 0.091 267.935)] flex flex-col justify-between border-r border-white/5">
        
        {/* Menu Supérieur */}
        <div className="flex flex-col mt-20 gap-2">
          {[
            { to: "/admin/dashboard", label: "Dashboard" },
            { to: "/admin/cms", label: "CMS" },
            { to: "/admin/films", label: "Films" },
            { to: "/admin/utilisateurs", label: "Utilisateurs" },
            { to: "/admin/statistiques", label: "Statistiques" },
            { to: "/admin/parametres", label: "Paramètres" },
          ].map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'block w-full text-left px-6 py-3 font-medium transition-all border-l-4 border-[#f97316] text-[#f97316] bg-white/5'
                  : 'block w-full text-left px-6 py-3 font-medium transition-all border-l-4 border-transparent text-gray-500 hover:text-white hover:bg-white/5'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* SECTION DÉCONNEXION - Design "Mars AI" */}
        <div className="p-6 mb-4">
          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl border border-white/10 text-gray-400 hover:text-[#f97316] hover:border-[#f97316]/30 hover:bg-[#f97316]/5 transition-all duration-300 group"
          >
            <LogOut size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Quitter</span>
          </button>
        </div>
      </div>

      {/* ZONE DE CONTENU - Ta couleur oklch conservée */}
      <div className="bg-[oklch(28.2% 0.091 267.935)] overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}