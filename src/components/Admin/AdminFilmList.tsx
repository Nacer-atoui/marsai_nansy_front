import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Film {
  id: number;
  title: string;
  author: string;
  country: string;
  tools: string[];
  note: number | null;
  cover: string;
  status: string;
}

const AdminFilmList: React.FC = () => {
  const navigate = useNavigate();

  // 2. Nouveaux States pour gérer la BDD
  const [films, setFilms] = useState<Film[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch('http://localhost:3000/movie');

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const data = await response.json();

        const filmsFormates = data.map((filmBDD: any) => ({
          id: filmBDD.id,
          title: filmBDD.original_title || filmBDD.english_title,
          author: 'Réalisateur #' + filmBDD.director_id,
          country: filmBDD.language,
          tools: filmBDD.ia_tools
            ? filmBDD.ia_tools.split(',').map((t: string) => t.trim())
            : [],

          // ---> ON RÉCUPÈRE LA MOYENNE ICI <---
          // Si average_note existe, on l'arrondit à 1 chiffre après la virgule, sinon on laisse null
          note: filmBDD.average_note
            ? parseFloat(filmBDD.average_note).toFixed(1)
            : null,

          cover: filmBDD.cover_img
            ? `${filmBDD.cover_img}?w=150&q=70`
            : 'https://via.placeholder.com/80x50/1e293b/ffffff',
          status: filmBDD.status || 'Pending',
        }));

        setFilms(filmsFormates);
      } catch (err: any) {
        console.error('Erreur lors de la récupération des films:', err);
        setError(
          'Impossible de charger les films. Vérifiez votre connexion à la base de données.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchFilms();
  }, []);

  // --- ACTIONS ADMIN ---
  const handleUpdateStatus = async (id: number, newStatus: string) => {
    if (
      !window.confirm(
        `Voulez-vous vraiment passer ce film en statut : ${newStatus} ?`
      )
    )
      return;

    try {
      const response = await fetch(`http://localhost:3000/movie/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        // Mise à jour de l'affichage local sans recharger la page
        setFilms(
          films.map(f => (f.id === id ? { ...f, status: newStatus } : f))
        );
      } else {
        alert('Erreur lors de la mise à jour du statut');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    if (
      !window.confirm(
        'Êtes-vous sûr de vouloir supprimer définitivement ce film ? Cette action est irréversible.'
      )
    )
      return;

    try {
      const response = await fetch(`http://localhost:3000/movie/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Supprime le film de la liste locale
        setFilms(films.filter(f => f.id !== id));
      } else {
        alert('Erreur lors de la suppression');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filmsEnAttente = films.filter(
    f => f.note === null || f.note === undefined
  ).length;

  // --- RENDUS CONDITIONNELS ---

  if (isLoading) {
    return (
      <div className="p-10 text-white font-display text-center">
        Chargement des films depuis la base de données...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-red-500 font-display text-center">{error}</div>
    );
  }

  // --- RENDU PRINCIPAL ---
  return (
    <div className="p-10 text-white font-display">
      {/* --- En-tête --- */}
      <div className="mb-10">
        <h3 className="text-mars-orange font-bold tracking-[0.2em] text-xs mb-3 uppercase">
          Admin Management
        </h3>
        <h1 className="text-3xl font-black mb-2">SOUMISSIONS OFFICIELLES</h1>
        <p className="text-gray-400 text-sm">
          Liste des courts-métrages en attente d'évaluation par le jury.
        </p>
      </div>

      {/* --- Carte de Mise en Avant --- */}
      <div className="bg-midnight p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-[#364153] mb-8 max-w-sm flex items-center gap-5">
        <div className="bg-orange-50/10 border border-mars-orange/30 p-4 rounded-xl flex items-center justify-center">
          <svg
            className="w-8 h-8 text-mars-orange"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
        <div>
          <div className="text-3xl font-black text-white">{filmsEnAttente}</div>
          <div className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mt-1">
            Films à noter
          </div>
        </div>
      </div>

      {/* --- Conteneur du Tableau --- */}
      <div className="bg-midnight p-6 rounded-2xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] border border-[#364153]">
        {/* En-têtes */}
        <div className="grid grid-cols-12 gap-4 text-[10px] font-bold text-gray-400 tracking-wider mb-2 px-4 uppercase">
          <div className="col-span-1">ID</div>
          <div className="col-span-4">Film & Auteur</div>
          <div className="col-span-2">Pays</div>
          <div className="col-span-2">Moyenne</div>
          <div className="col-span-2">Outils IA</div>
          <div className="col-span-1"></div>
        </div>

        {/* Liste des films */}
        <div className="flex flex-col gap-1 max-h-[60vh] overflow-y-auto pr-2">
          {films.length === 0 ? (
            <div className="text-center p-4 text-gray-400">
              Aucun film n'a été soumis pour le moment.
            </div>
          ) : (
            films.map(film => (
              <div
                key={film.id}
                className="grid grid-cols-12 gap-4 items-center p-3 hover:border-mars-orange rounded-xl transition-colors border border-transparent"
              >
                <div className="col-span-1 text-sm text-gray-400 font-medium">
                  #{film.id}
                </div>

                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src={film.cover}
                    alt={film.title}
                    loading="lazy"
                    className="w-14 h-9 object-cover rounded-md shadow-sm"
                  />
                  <div className="flex flex-col justify-center gap-1">
                    <div className="font-bold text-white text-xs leading-tight flex items-center gap-2">
                      <span className="truncate max-w-[150px]">
                        {film.title}
                      </span>

                      {/* --- BADGE DE STATUT --- */}
                      {film.status === 'Accepted' && (
                        <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-[8px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                          Validé
                        </span>
                      )}
                      {film.status === 'Pending' && (
                        <span className="bg-mars-orange/10 text-mars-orange border border-mars-orange/20 text-[8px] px-1.5 py-0.5 rounded uppercase tracking-wider">
                          À traiter
                        </span>
                      )}
                    </div>

                    <div className="text-[10px] text-blue-card font-medium">
                      {film.author}
                    </div>
                  </div>
                </div>

                <div className="col-span-2 text-xs text-gray-300 font-semibold">
                  {film.country}
                </div>

                {/* Affichage conditionnel de la note */}
                <div className="col-span-2 font-bold text-white text-sm">
                  {film.note !== null && film.note !== undefined ? (
                    <span>{film.note}</span>
                  ) : (
                    <span className="bg-[#1e293b] text-gray-400 border border-[#364153] text-[9px] px-2 py-1 rounded-md uppercase tracking-wider">
                      En attente
                    </span>
                  )}
                </div>

                <div className="col-span-2 flex flex-wrap gap-1.5">
                  {/* Vérification de sécurité au cas où l'API renvoie null pour tools */}
                  {film.tools &&
                    film.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 text-white text-[8px] px-2 py-0.5 rounded-full font-bold tracking-wider"
                      >
                        {tool}
                      </span>
                    ))}
                </div>

                <div className="col-span-1 flex justify-end gap-1">
                  {/* Bouton Accepter */}
                  <button
                    onClick={() => handleUpdateStatus(film.id, 'Accepted')}
                    title="Accepter le film"
                    className="w-8 h-8 flex items-center justify-center bg-[#1e293b] hover:bg-green-600 text-gray-300 hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </button>

                  {/* Bouton Supprimer */}
                  <button
                    onClick={() => handleDelete(film.id)}
                    title="Supprimer le film"
                    className="w-8 h-8 flex items-center justify-center bg-[#1e293b] hover:bg-red-600 text-gray-300 hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>

                  {/* Ton bouton original pour voir les détails */}
                  <button
                    onClick={() => navigate(`/admin/films/${film.id}`)}
                    title="Voir les détails"
                    className="w-8 h-8 flex items-center justify-center bg-[#1e293b] hover:bg-mars-orange text-gray-300 hover:text-white rounded-full transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminFilmList;
