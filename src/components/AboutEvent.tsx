export default function AboutEvent() {
  return (
    <section className="bg-section-light py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider w-[70%]">
            Deux journées de{' '}
            <span className="text-mars-orange font-bold">conférences </span>
             gratuites
          </h2>
        </div>
        <div className="mt-10 gap-10">
          <p>
            <span>1</span> Débats engagés sur l'éthique et le futur
          </p>
          <p>
            <span>2</span> Confrontations d'idées entre artistes et tech
          </p>
          <p>
            <span>1</span> Interrogations stimulantes sur la création
          </p>
        </div>
      </div>
    </section>
  );
}
