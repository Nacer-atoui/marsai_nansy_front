// 1. DÉFINITION DE L'INTERFACE (Le "Contrat")
// En TypeScript, on définit la forme de nos données.
// Cela garantit que chaque carte aura bien un titre, une date, etc.
interface EventCardProps {
  id: number;
  title: string;
  description: string;
  date: string;
  imageUrl: string;
  // On limite les couleurs à deux choix stricts pour éviter les fautes de frappe
  themeColor: 'orange' | 'cyan';
}

export default function MarsSection() {
  // 2. LES DONNÉES (La "Source de Vérité")
  // Au lieu de copier-coller le HTML 3 fois, on crée un tableau d'objets.
  // C'est ici que tu modifies le texte et les images.
  const events: EventCardProps[] = [
    {
      id: 1,
      title: 'DÉFI 1 MINUTE',
      description:
        'Repoussez les limites de la narration. Un format ultra-court pour créer une œuvre IA percutante en 60 secondes chrono.',
      date: 'PARTICIPER AU DÉFI',
      themeColor: 'orange', // Définit le style orange
      imageUrl:
        'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      title: 'MASTERCLASS & LABS',
      description:
        'Des ateliers pratiques et gratuits. Apprenez à maîtriser le Prompt Engineering et les outils de génération vidéo.',
      date: 'RÉSERVER MA PLACE',
      themeColor: 'cyan', // Définit le style bleu turquoise
      imageUrl:
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      title: 'FUTUR DU CINÉMA',
      description:
        'Un point de rencontre unique entre réalisateurs, experts tech et passionnés pour réinventer ensemble le 7ème art.',
      date: 'DÉCOUVRIR LE PROGRAMME',
      themeColor: 'orange',
      imageUrl:
        'https://images.unsplash.com/photo-1694903089438-bf28d4697d9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGlhfGVufDB8fDB8fHww',
    },
  ];

  return (
    // CONTENEUR PRINCIPAL
    // bg-slate-900 : Fond très sombre pour le style "Cinéma/Tech"
    <section className="bg-[#07091D] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* EN-TÊTE DE LA SECTION */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider">
            LE PROJET <span className="text-orange-500">MARS.A.I</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl text-lg">
            L'événement hybride où l'intelligence artificielle rencontre la
            créativité cinématographique.
          </p>
        </div>

        {/* GRILLE RESPONSIVE (LAYOUT) */}
        {/* grid-cols-1 : 1 colonne sur mobile */}
        {/* md:grid-cols-3 : passe à 3 colonnes sur tablette/PC */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* BOUCLE MAP : On transforme chaque donnée en Carte HTML */}
          {events.map(card => (
            // CARTE INDIVIDUELLE
            // 'relative' : Important pour positionner l'image et le texte par-dessus
            // 'group' : Permet de déclencher l'animation de l'image quand on survole la carte
            <div
              key={card.id}
              className="relative h-96 rounded-3xl overflow-hidden group shadow-xl border border-slate-800"
            >
              {/* 1. IMAGE D'ARRIÈRE-PLAN */}
              {/* 'absolute inset-0' : L'image prend toute la place disponible */}
              {/* 'group-hover:scale-110' : Zoom léger quand on passe la souris sur la carte */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* 2. DÉGRADÉ (OVERLAY) */}
              {/* Crucial pour la lisibilité : Crée un voile noir en bas pour que le texte blanc ressorte */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-transparent"></div>

              {/* 3. CONTENU TEXTUEL */}
              {/* 'flex-col justify-end' : Pousse tout le texte vers le bas de la carte */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
                <h3 className="text-2xl font-bold text-white mb-3 leading-tight uppercase font-sans">
                  {card.title}
                </h3>

                <p className="text-gray-300 text-sm mb-6 font-medium border-t border-gray-600/50 pt-4 w-full leading-relaxed">
                  {card.description}
                </p>

                {/* 4. BOUTON / TAG AVEC LOGIQUE DYNAMIQUE */}
                {/* On utilise une expression ternaire (condition ? vrai : faux) pour la couleur */}
                {/* Si themeColor est 'orange', on applique les classes orange, sinon cyan */}
                <span
                  className={`
                  inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300 cursor-pointer
                  ${
                    card.themeColor === 'orange'
                      ? 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]'
                      : 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]'
                  }
                `}
                >
                  {card.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
