import React, { useState } from 'react';

export default function JuryVideoDetail({ movieId }: { movieId?: string }){
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // 1. ESTADO DE LA NOTA (Ya lo tenías)
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState(""); 
  
  // NOUVEAUX ÉTATS POUR L'ENVOI AU BACKEND
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // LA FONCTION QUI ENVOIE LES DONNÉES
  const handleVote = async () => {
    // Sécurité : on empêche d'envoyer si le jury n'a pas cliqué sur un chiffre
    if (rating === 0) {
      alert("Veuillez sélectionner une note avant de valider.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Envoi de la requête POST au backend
      const response = await fetch('http://localhost:3000/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          movie_id: movieId, 
          jury_id: 1, // /!\ ID temporaire, à remplacer par le vrai ID de l'utilisateur connecté plus tard
          note: rating,
          comment: comment
        })
      });

      if (response.ok) {
        setIsSuccess(true); // Affiche l'écran de succès
      } else {
        alert("Erreur lors de l'enregistrement de la note.");
      }
    } catch (error) {
      console.error("Erreur serveur :", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // AFFICHAGE SI LE VOTE EST RÉUSSI
  if (isSuccess) {
    return (
      <div className="bg-slate-900 border border-cyan-500/50 rounded-xl p-8 min-h-[200px] w-full max-w-md mx-auto flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-cyan-400 mb-2 drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]">Note enregistrée !</h3>
        <p className="text-slate-400 text-sm">Merci pour votre évaluation. Les données ont été envoyées au panel administrateur.</p>
      </div>
    );
  }

  // AFFICHAGE NORMAL DU FORMULAIRE
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 min-h-[200px] w-full max-w-md mx-auto">
      
      <div className="flex flex-col items-center gap-6">
        
        <div>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">
            VOTRE NOTE
          </p>
        </div>

        <div>
          <p className="text-6xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300">
            {rating === 0 ? '--' : rating}
          </p>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
            {numeros.map((numero) => (
              <button
                key={numero}
                onClick={() => setRating(numero)}
                className={`
                  aspect-square 
                  flex justify-center items-center 
                  rounded-md font-bold text-sm
                  transition-all duration-200
                  border
                  ${rating === numero 
                    ? 'bg-cyan-500 text-white border-cyan-400 shadow-[0_0_10px_cyan] scale-110' // SI ES EL ELEGIDO
                    : 'bg-transparent text-slate-500 border-slate-700 hover:border-cyan-500 hover:text-cyan-400' // SI NO
                  }
                `}
              >
                {numero}
              </button>
            ))}
          </div>
          {/* Texto de ayuda abajo de los números */}
          <div className="flex justify-between text-[10px] text-slate-500 mt-2 px-1 uppercase">
             <span>Faible</span>
             <span>Excellent</span>
          </div>
        </div>

        <div className="w-full">
          <textarea
            value={comment} // Conectado a la memoria
            onChange={(e) => setComment(e.target.value)} // Guarda cada letra que escribes
            className="w-full h-24 bg-slate-950/50 text-slate-300 text-sm border border-slate-700 rounded-lg p-3 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-slate-600"
            placeholder="Pourquoi cette note ? (Optionnel)"
          />
        </div>

        <div className="w-full bg-slate-800/50 rounded-lg p-3 flex items-center gap-4 border border-slate-700/50">
           <div className="w-12 h-16 bg-slate-700 rounded flex-shrink-0 flex items-center justify-center text-slate-500">
             FILM
           </div>
           
           <div className="flex flex-col text-left">
              <span className="text-[10px] uppercase text-cyan-500 font-bold tracking-wider"> Film Suivant
              </span>
              <span className="text-white font-medium text-sm truncate"> soy un film 
              </span>
              <span className="text-slate-500 text-xs"
              >drama
              </span>
           </div>
        </div>

        <button 
          onClick={handleVote}
          disabled={isSubmitting}
          className="
            w-full bg-gradient-to-r from-orange-500 to-red-500 
            hover:from-orange-400 hover:to-red-400 
            text-white font-bold py-3 px-4 rounded-lg 
            shadow-lg shadow-orange-500/20
            transition-all transform active:scale-95
            flex items-center justify-center gap-2
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          <span>{isSubmitting ? 'ENVOI EN COURS...' : 'VALIDER LA NOTE'}</span>
        </button>

      </div>
    </div>
  );
}