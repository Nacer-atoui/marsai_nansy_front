import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // 👈 Ajout
import type { Submit } from '../components/types';
import SubmitRealisator from '../components/SubmitRealisator';
import SubmitAi from '../components/SubmitAi';
import SubmitMetaData from '../components/SubmitMetaData';
import SubmitTeam from '../components/SubmitTeam';
import SubmitMedia from '../components/SubmitMedia';

export default function SubmitPage() {
  const { t } = useTranslation('submit_form'); // 👈 Ajout

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

    media: {
      hassubs: false,
      srt: '',
      statut: 'Draft',
      cover_img: '',
      image: {},
    },
    video: null,
    ia: { stack: 'Je suis une IA', method: true },
    collaborator: [],
  });

  // ... (Tes fonctions handleChange et handleSubmit restent inchangées)
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Submit
  ): void {
    const { name, value } = e.target;

    setFormData(prev => {
      const currentSection = prev[section];
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
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const data = new FormData();
      data.append('director', JSON.stringify(formData.director));
      data.append('metadata', JSON.stringify(formData.metadata));
      data.append('media', JSON.stringify(formData.media));
      data.append('ia', JSON.stringify(formData.ia));
      data.append('collaborator', JSON.stringify(formData.collaborator));

      if (formData.video) {
        data.append('video', formData.video.video);
      }

      const response = await fetch('http://localhost:3000/movie', {
        method: 'POST',
        body: data
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.message || t('submit_page.error_generic', 'Une erreur est survenue lors de la soumission.')
        );
      }
      setData(result);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-10">
          {t('submit_page.main_title', 'Soumission de film')}
        </h2>

        {error && (
          <div className="p-4 mb-6 text-white bg-red-600 rounded">{error}</div>
        )}
        {data && (
          <div className="p-4 mb-6 text-white bg-green-600 rounded">
            {t('submit_page.success', 'Film soumis avec succès !')}
          </div>
        )}

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
          <SubmitMedia setFormData={setFormData} formData={formData} />

          <SubmitTeam
            collaborator={formData.collaborator}
            setFormData={setFormData}
            formData={formData}
          />

          <button
            type="submit"
            name="btn_submit"
            className={`mt-14 px-10 py-4 ml-250 rounded-full text-white bg-mars-orange transition-all duration-300 font-semibold uppercase tracking-widest shadow-xl hover:cursor-pointer hover:opacity-80 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isLoading 
              ? t('submit_page.btn_loading', 'Envoi en cours...') 
              : t('submit_page.btn_submit', 'Soumettre')}
          </button>
        </form>
      </div>
    </section>
  );
}