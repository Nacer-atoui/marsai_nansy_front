import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';

export default function Admin() {
  const navigate = useNavigate();
  
  // 1. On récupère le rôle et on le met EN MINUSCULES tout de suite
  const userRole = (localStorage.getItem('userRole') || '').toLowerCase().trim(); 

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole'); 
    // Redirection vers la route secrète de login
    navigate(`/${import.meta.env.VITE_SECRET_AUTH_PATH}`);
  };

  // 2. Configuration des liens (Rôles tous en minuscules !)
  const navigationConfig = [
    { to: "/admin/dashboard", label: "Dashboard", roles: ['super admin', 'admin'] },
    { to: "/admin/jury", label: "Espace Jury", roles: ['super admin', 'admin', 'jury'] },
    { to: "/admin/cms", label: "CMS", roles: ['super admin', 'admin'] },
    { to: "/admin/films", label: "Films", roles: ['super admin', 'admin'] },
    { to: "/admin/utilisateurs", label: "Utilisateurs", roles: ['super admin', 'admin'] }
  ];

  // 3. Le filtre intelligent qui vérifie si ton rôle est dans le tableau
  const authorizedLinks = navigationConfig.filter(link => 
    link.roles.includes(userRole)
  );

  return (
    <div className="grid grid-cols-[17%_83%] h-screen overflow-hidden">
      
      {/* --- SIDEBAR --- */}
      <div className="bg-[#07091D] flex flex-col justify-between border-r border-white/5">
        
        <div className="flex flex-col mt-20 gap-2">
          {/* Affichage automatique des liens autorisés */}
          {authorizedLinks.map((link) => (
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

        {/* --- SECTION DÉCONNEXION --- */}
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

      {/* --- ZONE DE CONTENU (Là où les pages s'affichent) --- */}
      <div className="bg-[#0B0F23] overflow-y-auto">
        <Outlet />
      </div>

    </div>
  );
}