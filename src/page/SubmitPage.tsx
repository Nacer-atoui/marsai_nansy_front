import { useState } from 'react'
import type { Submit } from '../components/types';
import SubmitRealisator from '../components/SubmitRealisator';
import SubmitAi from '../components/SubmitAi';
import SubmitMetaData from '../components/SubmitMetaData';
import SubmitTeam from '../components/SubmitTeam';
import SubmitMedia from '../components/SubmitMedia';

export default function SubmitPage() {


  const [formData, setFormData] = useState<Submit>({
    director: { civility: '', firstname: '', lastname: '', email: '', phone: '', country: '', birthday: '', address: { street: '', zipcode: '', city: '' } },

    metadata: { original_title: '', original_synopsis: '', duration: 0, tags: '' },

    media: { hassubs: false, srt: '', statut: 'Draft' },

    ia: { stack:'', method:''},

    collaborator: [],

    image: { url: '' }
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Submit,
  ) :void {
    const { name, value } = e.target;

    setFormData((prev) => {
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
              [child]: value
            }
          }
        };
      }

      // Gestion simple (ex: metadata.original_title)
      return {
        ...prev,
        [section]: {
          ...currentSection,
          [name]: value
        }
      };
    });
  }

  return (
    <section className="bg-midnight py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-10">Soumission de film</h2>


        <SubmitRealisator director={formData.director} handleChange={handleChange} />
        <SubmitMetaData metadata={formData.metadata} handleChange={handleChange} />
        <SubmitAi ia={formData.ia} handleChange={handleChange} /> 
        <SubmitMedia />
        <SubmitTeam collaborator={formData.collaborator} setFormData={setFormData} formData={formData} />
      </div>
    </section>
  )
}







