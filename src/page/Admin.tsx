import React, { useState } from 'react';
import dashboard from '../components/dashboard';


export default function Admin() {
  // Estado para controlar qué botón está activo
  const [activeTab, setActiveTab] = useState('utilisateurs');

  // Clases base para no repetir el código en cada botón
  const baseBtn = "w-full text-left px-6 py-3 font-medium transition-colors border-l-4";
  const activeBtn = "border-orange-500 text-orange-500 bg-white/5";
  const inactiveBtn = "border-transparent text-gray-400 hover:text-white hover:bg-white/5";

  return (
    <div className="grid grid-cols-[17%_83%] h-screen">
      
      {/* PANEL IZQUIERDO: Corrección del color usando sintaxis de Tailwind */}
      <div className="bg-[oklch(37.9% 0.146 265.522)]">
        
        {/* CONTENEDOR DE BOTONES: Quitado el items-center y ajustado el gap */}
        <div className="flex flex-col mt-20 gap-2">
          
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`${baseBtn} ${activeTab === 'dashboard' ? activeBtn : inactiveBtn}`}
          >
            Dashboard
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

      {/* PANEL DERECHO */}
      <div className="bg-orange-500 p-4 font-bold text-white text-2xl flex items-center justify-center">

    {/* switch ({activeTab}) {
    case 0:
        console.log("It is a Sunday.");
        break;
    case 1:
        console.log("It is a Monday.");
        break;
    case 2:
        console.log("It is a Tuesday.");
        break;
    case 3:
        console.log("It is a Wednesday.");
        break;
    case 4:
        console.log("It is a Thursday.");
        break;
    case 5:
        console.log("It is a Friday.");
        break;
    case 6:
        console.log("It is a Saturday.");
        break;
    default:
        console.log("No such day exists!");
        break;
} */}


      </div>
      
    </div>
  );
}
