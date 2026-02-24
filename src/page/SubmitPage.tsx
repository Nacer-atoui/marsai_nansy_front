import { useState, useEffect } from 'react';
import type { Submit } from '../components/types';
import SubmitRealisator from '../components/SubmitRealisator';
import SubmitAi from '../components/SubmitAi';
import SubmitMetaData from '../components/SubmitMetaData';
import SubmitTeam from '../components/SubmitTeam';
import SubmitMedia from '../components/SubmitMedia';

export default function SubmitPage() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState<Submit>({
    director: {
      civility: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      country: '',
      birthday: '',
      address: { street: '', zipcode: '', city: '' },
    },

    metadata: {
      original_title: '',
      original_synopsis: '',
      duration: 0,
      tags: '',
    },

    media: { hassubs: false, srt: '', statut: 'Draft' },
    ia: { stack: '', method: '' },
    collaborator: [],
    image: { url: '' },
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Submit
  ): void {
    const { name, value } = e.target;

    setFormData(prev => {
      // On récupère la section spécifique (ex: prev.director)
      const currentSection = prev[section];

      // Gestion des objets imbriqués comme address.city
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        return {
          ...prev,
          [section]: {
            ...currentSection,
            [parent]: {
              ...(currentSection as any)[parent],
              [child]: value,
            },
          },
        };
      }

      // Gestion simple (ex: metadata.original_title)
      return {
        ...prev,
        [section]: {
          ...currentSection,
          [name]: value,
        },
      };
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Empêche le rechargement de la page
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch('http://localhost:3000/api/movies', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        // Si le backend renvoie une erreur (400, 500, etc.)
        throw new Error(result.message || 'Une erreur est survenue lors de la soumission.');
      }

      // Si tout s'est bien passé
      setData(result); 
      console.log('Film soumis avec succès:', result);
      
      // Optionnel : réinitialiser le formulaire ici si besoin

    } catch (err: any) {
      console.error('Erreur fetch:', err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };


return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-10">
          Soumission de film
        </h2>

        {/* Affichage des messages de succès ou d'erreur */}
        {error && <div className="p-4 mb-6 text-white bg-red-600 rounded">{error}</div>}
        {data && <div className="p-4 mb-6 text-white bg-green-600 rounded">Film soumis avec succès !</div>}

        {/* On englobe tout dans un form */}
        <form onSubmit={handleSubmit}>
          <SubmitRealisator
            director={formData.director}
            handleChange={handleChange}
          />
          <SubmitMetaData
            metadata={formData.metadata}
            handleChange={handleChange}
          />
          <SubmitAi ia={formData.ia} handleChange={handleChange} />
          <SubmitMedia />
          
          <SubmitTeam
            collaborator={formData.collaborator}
            setFormData={setFormData}
            formData={formData}
          />

          <button
            type="submit"
            name="btn_submit"
            disabled={isLoading}
            className={`mt-14 px-10 py-4 ml-250 rounded-full text-white bg-mars-orange transition-all duration-300 font-semibold uppercase tracking-widest shadow-xl hover:cursor-pointer hover:opacity-80 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Envoi en cours...' : 'Soumettre'}
          </button>
          
        </form>
      </div>
    </section>
  );
}
