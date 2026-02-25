

export default function DashBoard() {
 return  (
    // Contenedor principal sin fondo (lo hereda de Admin.tsx) y con texto blanco
    <div className="p-8 text-white w-full">
      
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <p className="text-gray-400 text-sm font-bold">
          BACK-OFFICE OFFICIEL
        </p>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="font-bold uppercase">Administrateur</p>
            <p className="text-blue-400 text-sm">adminA@email.com</p>
          </div>
          <img 
            src="https://preview.redd.it/qui-se-souvient-de-ayuwoki-v0-0fh0d8qf4v9c1.jpeg?width=640&crop=smart&auto=webp&s=805095f4a9e7ce0350d2ce03025079bd1d9df5be" 
            alt="Avatar" 
            className="w-12 h-12 rounded-full border-2 border-blue-500" 
          />
        </div>
      </div>

      {/* TITULO */}
      <div className="mb-10">
        <p className="text-orange-500 font-bold mb-2">
          ADMIN MANAGEMENT
        </p>
        <h1 className="text-4xl font-bold mb-2">
          VUE D'ENSEMBLE
        </h1>
        <p className="text-gray-400">
          Analyse détaillée de la progression du festival et des indicateurs de performance.
        </p>
      </div>

      {/* GRID DE TARJETAS (2 columnas) */}
      <div className="grid grid-cols-2 gap-6">

        {/* TARJETA 1: Films */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <div className="flex justify-between items-start mb-6">
            <div className="text-3xl bg-slate-700 p-3 rounded-lg">
              🎬
            </div>
            <span className="bg-blue-900 text-blue-300 text-xs font-bold px-3 py-1 rounded-full">
              OBJECTIF: 600
            </span>
          </div>
          
          <h2 className="text-4xl font-bold mb-1">482</h2>
          <p className="text-gray-400 text-sm mb-6 uppercase">Films évalués par le jury</p>

        </div>

        {/* TARJETA 2: Jurés */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <div className="flex justify-between items-start mb-6">
            <div className="text-3xl bg-slate-700 p-3 rounded-lg">
              🎖️
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-1">08/12</h2>
          <p className="text-gray-400 text-sm mb-6 uppercase">Jurés ayant finalisé leur lot</p>
        </div>

        {/* TARJETA 3: Pays */}
        <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
          <div className="text-3xl bg-slate-700 p-3 rounded-lg w-fit mb-6">
            🌍
          </div>
          <h2 className="text-4xl font-bold mb-1">124</h2>
          <p className="text-gray-400 text-sm mb-6 uppercase">Pays représentés</p>
          <p className="text-emerald-400 text-sm font-bold">TOP ZONE: EUROPE</p>
        </div>

        {/* TARJETA 4: Workshops */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
          <div className="flex justify-between items-start mb-6">
            <div className="text-3xl bg-slate-800 p-3 rounded-lg">
              🎟️
            </div>
            <div className="text-3xl text-orange-500">
              
            </div>
          </div>
          
          <h2 className="text-4xl font-bold mb-1">72%</h2>
          <p className="text-gray-400 text-sm mb-6 uppercase">Taux d'occupation workshops</p>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 px-4 rounded-lg">
            VOIR LES ÉVÈNEMENTS
          </button>
        </div>

        {/* TARJETA 5: Comptes (Ocupa 2 espacios con col-span-2) */}
        <div className="col-span-2 bg-slate-800 p-6 rounded-xl border border-slate-700 flex justify-between items-center">
          
          <div className="text-right">

          </div>
        </div>

      </div>
    </div>
  );
}

