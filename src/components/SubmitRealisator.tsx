import React from 'react'

export default function SubmitRealisator() {
  return (
    <div className='p-10 border-[#00FFFF]/30 rounded-xl bg-[#0B0F23]/50 border'>
        <h3 className="text-white text-2xl font-bold">Soumission du réalisateur</h3>
        <div className="mt-5 flex">
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Civilité*</label>
                <input type="text" className="w-full p-3 rounded-lg bg-midnight border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez la civilité du réalisateur" />
            </div>
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Prénom*</label>
                <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez le prénom du réalisateur" />
            </div>
        </div>

        <div className="mt-5 flex">
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Nom du réalisateur*</label>
                <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez le nom du réalisateur" />
            </div>
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Date de naissance*</label>
                <input type="date" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez la date de naissance du réalisateur" />
            </div>
        </div>

        <div className="mt-5 flex">
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Email*</label>
                <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez l'email du réalisateur" />
            </div>
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Téléphone*</label>
                <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez le nom du film" />
            </div>
        </div>

        <div className="mt-5">
            <label className="block text-gray-300 mb-2">Adresse complète*</label>
            <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez l'adresse complète du réalisateur" />
        </div>

        <div className="mt-5 flex ">
            <div className="mt-5 w-[50%] mr-5">
                <label className="block text-gray-300 mb-2">Nom du réalisateur</label>
                <input type="text" className="w-full p-3 rounded-lg bg-[#0B0F23]/50 border-[#00FFFF]/30 border-2 text-white" placeholder="Entrez le nom du réalisateur" />
            </div>
            <div className="mt-10 w-[50%] mr-5 flex ">
                <a className='p-5 hover:cursor-pointer'>S'inscrire à la newsLetter</a>
            </div>
        </div>
        
    </div>
  )
}
