import { useState } from 'react';
import DashBoard from '../components/Admin/DashBoard';
import AdminTranslations from '../components/Admin/CmsEditor'; 

export default function Admin() {
  // État pour contrôler quel bouton est actif
  const [activeTab, setActiveTab] = useState('traductions');

  // Clases base (Ton CSS d'origine)
  const baseBtn = "w-full text-left px-6 py-3 font-medium transition-colors border-l-4";
  const activeBtn = "border-orange-500 text-orange-500 bg-white/5";
  const inactiveBtn = "border-transparent text-gray-400 hover:text-white hover:bg-white/5";

  // fonction Switch avec l'ajout de la traduction
  function renderSwitch(activeTab: string) {
    switch (activeTab) {
      case 'dashboard': 
        return <DashBoard />;
      case 'traductions': 
        return <AdminTranslations />; // intégration 
      case 'films': 
        return <p>Interface Films</p>;
      case 'utilisateurs': 
        return <p>Interface Utilisateurs</p>;
      case 'statistiques': 
        return <p>Interface Statistiques</p>;
      case 'parametres': 
        return <p>Interface Paramètres</p>;
      default: 
        return <DashBoard />;
    }
  }

  return (
    <div className="grid grid-cols-[17%_83%] h-screen">
      
     
      <div className="bg-[oklch(37.9% 0.146 265.522)] shadow-xl z-10">
        <div className="flex flex-col mt-20 gap-2">
          
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`${baseBtn} ${activeTab === 'dashboard' ? activeBtn : inactiveBtn}`}
          >
            Dashboard
          </button>

        
          <button
            onClick={() => setActiveTab('traductions')}
            className={`${baseBtn} ${activeTab === 'traductions' ? activeBtn : inactiveBtn}`}
          >
            Traductions
          </button>

          <button
            onClick={() => setActiveTab('films')}
            className={`${baseBtn} ${activeTab === 'films' ? activeBtn : inactiveBtn}`}
          >
            Films
          </button>

          <button
            onClick={() => setActiveTab('utilisateurs')}
            className={`${baseBtn} ${activeTab === 'utilisateurs' ? activeBtn : inactiveBtn}`}
          >
            Utilisateurs
          </button>

          <button
            onClick={() => setActiveTab('statistiques')}
            className={`${baseBtn} ${activeTab === 'statistiques' ? activeBtn : inactiveBtn}`}
          >
            Statistiques
          </button>

          <button
            onClick={() => setActiveTab('parametres')}
            className={`${baseBtn} ${activeTab === 'parametres' ? activeBtn : inactiveBtn}`}
          >
            Paramètres
          </button>

        </div>
      </div>

      
      <div className={`${activeTab === 'traductions' ? 'bg-[#050505]' : 'bg-orange-500'} p-4 flex items-center justify-center overflow-y-auto transition-colors duration-300`}>

        {renderSwitch(activeTab)}

      </div>
      
    </div>
  );
}