import React from 'react';
import { useTranslation } from 'react-i18next';
import type { MetaData, Submit } from '../types';

export default function SubmitMetaData({
  metadata,
  handleChange,
}: {
  metadata: MetaData;
  // On retire HTMLSelectElement car il n'y a plus de <select> ici
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    section: keyof Submit
  ) => void;
}) {
  const { t } = useTranslation('submit_form');

  const inputClasses =
    'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
  const labelClasses = 'block text-gray-300 text-sm mb-2 font-medium';

  return (
    <section className="w-full font-display">
      <div className="mt-10 border border-[#364153] rounded-2xl p-8 flex flex-col gap-8">
        <div className="flex items-center gap-3">
          <img
            className="w-8 h-8"
            src="/iconmeta.svg"
            alt=""
            aria-hidden="true"
          />
          <h3 className="text-white text-2xl font-bold">
            {t('submit_meta.title', 'Métadonnées')}
          </h3>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* TITRE ORIGINAL */}
          <div className="md:col-span-2">
            <label htmlFor="originalTitle" className={labelClasses}>
              {t('submit_meta.original_title', 'Titre original *')}
            </label>
            <input
              type="text"
              id="originalTitle"
              name="original_title"
              value={metadata.original_title}
              onChange={e => handleChange(e, 'metadata')}
              placeholder="Ex: The Last Pixel"
              className={inputClasses}
              required
            />
          </div>

          {/* SYNOPSIS */}
          <div className="md:col-span-2">
            <label htmlFor="originalSynopsis" className={labelClasses}>
              {t('submit_meta.synopsis', 'Synopsis *')}
            </label>
            <textarea
              id="originalSynopsis"
              name="original_synopsis"
              value={metadata.original_synopsis}
              onChange={e => handleChange(e, 'metadata')}
              placeholder={t(
                'submit_meta.synopsis_placeholder',
                'Décrivez votre film...'
              )}
              className={`${inputClasses} h-32 resize-none`}
              required
            />
          </div>

          {/* DURÉE */}
          <div className="md:col-span-2">
            <label htmlFor="duration" className={labelClasses}>
              {t('submit_meta.duration', 'Durée (en minutes) *')}
            </label>
            <input
              type="number"
              id="duration"
              name="duration"
              value={metadata.duration}
              onChange={e => handleChange(e, 'metadata')}
              placeholder="Ex: 15"
              className={inputClasses}
              required
            />
          </div>

          {/* TAGS */}
          <div className="md:col-span-2">
            <label htmlFor="tags" className={labelClasses}>
              {t('submit_meta.tags', 'Tags *')}
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={metadata.tags}
              onChange={e => handleChange(e, 'metadata')}
              placeholder="Ex: AI, Sci-Fi, Experimental..."
              className={inputClasses}
              required
            />
          </div>
        </div>
      </div>
    </section>
  );
}
