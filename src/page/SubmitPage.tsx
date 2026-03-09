import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Submit } from '../components/types';

import SubmitRealisator from '../components/Submit/SubmitRealisator';
import SubmitAi from '../components/Submit/SubmitAi';
import SubmitMetaData from '../components/Submit/SubmitMetaData';
import SubmitTeam from '../components/Submit/SubmitTeam';
import SubmitMedia from '../components/Submit/SubmitMedia';

export default function SubmitPage() {
  const { t, i18n } = useTranslation('submit_form');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

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
      language: '',
    },
    media: { hassubs: false, srt: '', statut: 'Draft' },
    video: null, // Fichier seul
    cover_img: null, // Fichier seul
    image: [], // Tableau de fichiers
    ia: { stack: '', method: false, creative_process: '' },
    collaborator: [],
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
    section: keyof Submit
  ): void {
    const { name, value, type } = e.target;
    const finalValue = type === 'number' ? Number(value) : value;

    setFormData(prev => {
      const currentSection = prev[section];
      if (name.includes('.')) {
        const [parent, child] = name.split('.');
        return {
          ...prev,
          [section]: {
            ...currentSection,
            [parent]: { ...(currentSection as any)[parent], [child]: value },
          },
        };
      }
      return { ...prev, [section]: { ...currentSection, [name]: finalValue } };
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    console.log('--- 🚀 SOUMISSION GLOBALE ---');

    const currentLang = i18n.language.toUpperCase();
    const metadataWithLang = { ...formData.metadata, language: currentLang };

    const dataToSend = new FormData();
    dataToSend.append('director', JSON.stringify(formData.director));
    dataToSend.append('metadata', JSON.stringify(metadataWithLang));
    dataToSend.append('media', JSON.stringify(formData.media));
    dataToSend.append('ia', JSON.stringify(formData.ia));
    dataToSend.append('collaborator', JSON.stringify(formData.collaborator));

    console.log(formData);

    // ✅ GESTION SIMPLIFIÉE DE LA VIDÉO (Plus de .video.video !)
    if (formData.video) {
      console.log('🎥 Vidéo trouvée :', formData.video.name);
      dataToSend.append('video', formData.video);
    }

    // ✅ GESTION DE L'AFFICHE
    if (formData.cover_img) {
      console.log('🖼️ Affiche trouvée :', formData.cover_img.name);
      dataToSend.append('cover_img', formData.cover_img);
    }

    // ✅ GESTION DE LA GALERIE
    if (formData.image.length > 0) {
      console.log(`📸 Galerie : ${formData.image.length} fichiers`);
      formData.image.forEach((file, index) => {
        dataToSend.append('images', file);
      });
    }

    // LOG FINAL AVANT ENVOI
    console.log('--- 📦 RÉCAPITULATIF DES FICHIERS ---');
    dataToSend.forEach((val, key) => {
      if (val instanceof File) console.log(`${key} -> ${val.name}`);
    });

    try {
      const response = await fetch('http://localhost:3000/movie', {
        method: 'POST',
        body: dataToSend,
      });

      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || t('submit_page.error_generic'));

      console.log('✅ TERMINÉ :', result);

      if (result.length > 0){
        alert(result[0].value);
      }
      setSuccess(true);
    } catch (err: any) {
      console.error('❌ ERREUR :', err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-[#0B0F23] py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10">
          {t('submit_page.main_title')}
        </h2>

        {error && (
          <div className="p-4 mb-6 text-white bg-red-600 rounded-xl">
            {error}
          </div>
        )}
        {success && (
          <div className="p-4 mb-6 text-white bg-green-600 rounded-xl">
            {t('submit_page.success')}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          <SubmitRealisator
            director={formData.director}
            handleChange={handleChange}
          />
          <SubmitMetaData
            metadata={formData.metadata}
            handleChange={handleChange}
          />
          <SubmitAi ia={formData.ia} handleChange={handleChange} />

          {/* IMPORTANT : On passe formData et setFormData pour les fichiers */}
          <SubmitMedia formData={formData} setFormData={setFormData} />

          <SubmitTeam
            collaborator={formData.collaborator}
            formData={formData}
            setFormData={setFormData}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isLoading}
              className="px-12 py-4 rounded-full text-white bg-[#f97316] font-bold uppercase"
            >
              {isLoading
                ? t('submit_page.btn_loading')
                : t('submit_page.btn_submit')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
