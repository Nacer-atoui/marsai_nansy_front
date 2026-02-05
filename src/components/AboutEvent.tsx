export default function AboutEvent() {
  return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider w-[70%]">
            Deux journées de{' '}
            <span className="text-mars-orange font-bold">conférences </span>
             gratuites
          </h2>
        </div>
        <div className="mt-10">
          <p className="my-7">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2">
              1
            </span>{' '}
            Débats engagés sur l'éthique et le futur
          </p>
          <p className="my-7">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2">
              2
            </span>{' '}
            Confrontations d'idées entre artistes et tech
          </p>
          <p className="my-7">
            <span className="border-2 rounded-[50%] px-3 border-cyber-teal pb-1 pt-1 mr-2">
              3
            </span>{' '}
            Interrogations stimulantes sur la création
          </p>
        </div>
        <div className="flex gap-5 justify-between mt-10">
          <div className="border-3 bg-section-light w-[50%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 rounded-xl p-10">
            <img className="w-10" src="projection.png" alt="projection" />
            <h3 className="font-bold text-[32px] mt-5 mb-5">Projection</h3>
            <p className="text-[20px] w-[70%]">
              Films en compétition et hors-compétition sur écran géant.
            </p>
          </div>
          <div className="border-3 bg-section-light w-[50%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 rounded-xl p-10">
            <img className="w-10" src="computer-chip.png" alt="projection" />
            <h3 className="font-bold text-[32px] mt-5 mb-5">Workshops</h3>
            <p className="text-[20px] w-[70%]">
              Scénario, création et post-prod avec des experts de l'IA.
            </p>
          </div>
        </div>
        <div className="mt-10 border-3 bg-section-light w-[100%] border-[#00FFFF]/30 shadow-[0_0_15px_#00FFFF]/50 rounded-xl p-10">
          <img className="w-10" src="price.png" alt="projection" />
          <h3 className="font-bold text-[32px] mt-5 mb-5">Remise des prix</h3>
          <p className="text-[20px]">
            Cinéastes, acteurs et créateurs renommés pour récompenser
            l'excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
