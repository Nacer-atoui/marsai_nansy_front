export default function FestivalObjectif() {
  return (
    <section className="bg-section-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            Objectif Du{' '}
            <span className="text-mars-orange font-bold">Festival</span>
          </h2>
        </div>
        <div className="flex justify-between mt-10 gap-10">
          <div className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 p-10 rounded-xl">
            <img className="w-15" src="Fleche.png" alt="Fleche" />
            <h3 className="font-bold text-[32px] mt-5">L'Humain au centre</h3>
            <p>
              Mettre l'humain au cœur de la création d'œuvres générées par IA
              pour ne pas perdre l'émotion.
            </p>
          </div>
          <div className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 p-10 rounded-xl">
            <img className="w-15" src="Foudre.png" alt="Foudre" />
            <h3 className="font-bold text-[32px] mt-5">Challenge Créatif</h3>
            <p>
              Challenger la créativité des participants grâce à un format très
              court de 60 secondes.
            </p>
          </div>
          <div className="w-[33%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 border-2 p-10 rounded-xl">
            <img className="w-15" src="Fusée.png" alt="Fusée" />
            <h3 className="font-bold text-[32px] mt-5">Futurs Souhaitables</h3>
            <p>
              Mettre à profit la puissance de l'IA pour illustrer un thème :
              Imaginez des futurs souhaitables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
