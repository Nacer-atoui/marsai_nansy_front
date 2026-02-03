import React from 'react';
// Assure-toi d'importer useNavigate si tu utilises react-router
// import { useNavigate } from 'react-router-dom'; 

export const Footer = () => {
  // const navigate = useNavigate(); // Décommente si nécessaire

  return (
    // AJOUT DE 'w-full' ici pour forcer la largeur maximale
    <footer className="w-full bg-[#07091D] text-white py-12 border-t border-gray-800 text-center md:text-left">
      
      {/* Le conteneur interne garde le contenu centré et propre, 
          mais le fond (footer) s'étendra bien partout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Colonne 1 : Marque */}
          <div className="flex flex-col items-center md:items-start"> 
            <a
                // onClick={() => navigate('/')} // Utilise la variable du hook
                href="/" // Simple lien pour l'exemple
                className="cursor-pointer font-bold text-white text-xl" // CORRECTION: text-black -> text-white (sinon invisible sur fond foncé)
              >
                Mars<span className="text-[#FF6B00]">AI</span>
              </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs md:max-w-none mt-2">
              Le premier festival international de films créés avec l'intelligence artificielle.
            </p>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#hero" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Accueil</a></li>
              <li><a href="#about" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">À propos</a></li>
              <li><a href="#selection" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Sélection</a></li>
              <li><a href="#jury" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Jury</a></li>
              <li><a href="#contact" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Légal */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">Légal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Mentions légales</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Politique de confidentialité</a></li>
              <li><a href="#" className="hover:text-[#FF6600] transition-colors text-sm text-gray-400">Conditions d'utilisation</a></li>
            </ul>
          </div>

          {/* Colonne 4 : Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
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

        <div className="border-t border-gray-800 pt-8 mt-8">
          <p className="text-gray-500 text-sm md:text-center">
            © 2025 MarsAI Festival. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
};