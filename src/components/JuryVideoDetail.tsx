import { useState, useEffect } from 'react';

export default function JuryVideoDetail({ movieId }: { movieId?: string }) {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setRating(0);
    setComment("");
    setIsSuccess(false);
  }, [movieId]);

  const handleVote = async () => {
    const currentUserId = localStorage.getItem('userId');
    if (rating === 0) return alert("Veuillez choisir une note.");
    if (!currentUserId || !movieId) return alert("Erreur de session.");

    setIsSubmitting(true);
    try {
      const response = await fetch('http://localhost:3000/api/votes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movie_id: movieId, user_id: currentUserId, rate: rating, comment })
      });

      if (response.ok) setIsSuccess(true);
      else alert("Erreur lors de l'envoi de la note.");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-[#0F1423] border border-[#1E293B] rounded-xl p-8 w-full lg:w-[380px] flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] mb-2">Note validée !</h3>
        <p className="text-slate-400 text-sm">Merci pour votre évaluation.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0F1423] border border-[#1E293B] rounded-xl p-6 w-full lg:w-[380px] flex flex-col gap-6 shadow-xl">
      
      {/* HEADER NOTE */}
      <div className="text-center">
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">Votre note</p>
        <p className="text-7xl font-bold text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.4)]">
          {rating === 0 ? '--' : rating}
        </p>
      </div>

      {/* BOUTONS 1 à 10 */}
      <div>
        <div className="flex justify-between gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              onClick={() => setRating(n)}
              className={`
                w-7 h-7 flex items-center justify-center rounded text-xs font-bold transition-all
                ${rating === n 
                  ? 'bg-cyan-500 text-white shadow-[0_0_10px_cyan]' 
                  : 'bg-transparent text-slate-500 border border-[#1E293B] hover:border-cyan-500 hover:text-cyan-400'
                }
              `}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-[10px] text-slate-500 uppercase tracking-wider font-semibold">
          <span>Faible</span>
          <span>Excellent</span>
        </div>
      </div>

      {/* TEXTAREA */}
      <div>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full bg-[#050810] border border-[#1E293B] rounded-lg p-3 text-sm text-white focus:outline-none focus:border-cyan-500 resize-none h-24 placeholder:text-slate-600"
          placeholder="Pourquoi cette note ? (Optionnel)"
        />
      </div>

      {/* BLOC FILM SUIVANT (Statique pour le design) */}
      <div className="bg-[#1A2033] rounded-lg p-3 flex items-center gap-4">
        <div className="w-12 h-16 bg-slate-700 rounded flex items-center justify-center text-[10px] text-slate-400 font-bold tracking-widest">
          FILM
        </div>
        <div>
          <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-wider mb-1">Film Suivant</p>
          <p className="text-white text-sm font-bold leading-tight">soy un film</p>
          <p className="text-slate-500 text-xs">drama</p>
        </div>
      </div>

      {/* BOUTON VALIDER */}
      <button
        onClick={handleVote}
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF3300] text-white font-bold py-4 rounded-lg shadow-[0_4px_15px_rgba(255,102,0,0.3)] hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center"
      >
        {isSubmitting ? 'ENVOI EN COURS...' : 'VALIDER LA NOTE'}
      </button>

    </div>
  );
}