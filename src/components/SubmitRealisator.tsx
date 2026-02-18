import React from 'react';
import type { Director, Submit } from '../components/types';

export default function SubmitRealisator({ 
  director, 
  handleChange
}: { 
  director: Director, 
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, section: keyof Submit) => void
}) {

  const inputStyle = "w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white focus:outline-none focus:border-[#00FFFF] transition-all placeholder-gray-600";
  const rowClass = "mt-5 flex flex-wrap md:flex-nowrap gap-5";
  const colClass = "w-full md:w-1/2";

  return (
    <div className='p-10 border-[#00FFFF]/30 rounded-xl bg-[#0B0F23]/50 border'>
      <h3 className="text-white text-2xl font-bold border-b border-[#00FFFF]/20 pb-4">
        Coordonnées du réalisateur
      </h3>
      
     
      <div className={rowClass}>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Civilité*</label>
          <input 
            type="text" 
            name="civility"
            value={director.civility || ''}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="Mr / Mme / Autre" 
          />
        </div>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Prénom*</label>
          <input 
            type="text" 
            name="firstname"
            value={director.firstname} 
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="Adrien" 
          />
        </div>
      </div>

      
      <div className={rowClass}>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Nom*</label>
          <input 
            type="text" 
            name="lastname" 
            value={director.lastname} 
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="Le Relou" 
          />
        </div>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Date de naissance*</label>
          <input 
            type="date" 
            name="birthday"
            value={director.birthday}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
          />
        </div>
      </div>

     
      <div className={rowClass}>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Email*</label>
          <input 
            type="email" 
            name="email" 
            value={director.email} 
            onChange={(e) => handleChange(e, 'director')} 
            className={inputStyle} 
            placeholder="jean@test.com" 
          />
        </div>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Téléphone*</label>
          <input 
            type="text" 
            name="phone" 
            value={director.phone} 
            onChange={(e) => handleChange(e, 'director')} 
            className={inputStyle} 
            placeholder="0601020304" 
          />
        </div>
      </div>

     
      <div className={rowClass}>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Rue*</label>
          <input 
            type="text" 
            name="address.street"
            value={director.address.street}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="123 rue de Marseille" 
          />
        </div>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Code Postal*</label>
          <input 
            type="text" 
            name="address.zipcode"
            value={director.address.zipcode}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="13000" 
          />
        </div>
      </div>

     
      <div className={rowClass}>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Ville*</label>
          <input 
            type="text" 
            name="address.city"
            value={director.address.city}
            onChange={(e) => handleChange(e, 'director')}
            className={inputStyle} 
            placeholder="Marseille" 
          />
        </div>
        <div className={colClass}>
          <label className="block text-gray-300 mb-2">Pays*</label>
          <input 
            type="text" 
            name="country" 
            value={director.country} 
            onChange={(e) => handleChange(e, 'director')} 
            className={inputStyle} 
            placeholder="France" 
          />
        </div>
      </div>

     
  <div className="mt-5 flex items-center">
            <div className="mt-10 w-[50%] mr-5 flex items-center gap-3">
                <input 
                    type="checkbox" 
                    name="newsletter"
                    id="news"
                    className="w-6 h-6 rounded border-[#00FFFF]/30 bg-[#0B0F23]/50 accent-[#00FFFF] cursor-pointer"
                />
                <label htmlFor="news" className="text-gray-300 cursor-pointer select-none">
                    Je souhaite m'abonner
                </label>
            </div>
            <div className="mt-10 w-[50%] mr-5 flex justify-end">
                <a className='p-5 hover:cursor-pointer text-gray-400 hover:text-[#00FFFF] transition-colors'>
                    S'inscrire à la newsLetter
                </a>
            </div>
        </div>
        
    </div>
  );
}