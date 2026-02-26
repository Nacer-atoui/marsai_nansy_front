import { Film, Upload } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitImage } from './SubmitImage';
import { useTranslation } from "react-i18next"; // 👈 IMPORT
import type { Dispatch, SetStateAction } from 'react';
import type { Submit } from './types';

const inputClasses =
  'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';
const inputFile =
  'w-full h-30 bg-[#13162A] border border-dashed border-[#364153] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:border-mars-orange hover:cursor-pointer file:mr-4 file: file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';

export default function SubmitMedia({ formData, setFormData}: {setFormData: Dispatch<SetStateAction<Submit>>,
    formData: Submit}) {
  
  const { t } = useTranslation('submit_form'); // 👈 INITIALISATION

  const [vignetteFile, setVignetteFile] = useState<File | null>(null);
  const [vignettePreview, setVignettePreview] = useState<string | null>(null);

  type ImageLot = {
    file: File | null;
    preview: string | null;
  };

  const [images, setImages] = useState<ImageLot[]>([
    { file: null, preview: null },
    { file: null, preview: null },
    { file: null, preview: null },
  ]);

  const handleVignetteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (vignettePreview) {
      URL.revokeObjectURL(vignettePreview);
    }

    const objectUrl = URL.createObjectURL(file);
    setVignetteFile(file);
    setVignettePreview(objectUrl);
  };

  const handleRemoveVignette = () => {
    if (vignettePreview) {
      URL.revokeObjectURL(vignettePreview);
    }
    setVignetteFile(null);
    setVignettePreview(null);

    const inputElement = document.getElementById(
      'vignette'
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  };

  useEffect(() => {
    return () => {
      if (vignettePreview) URL.revokeObjectURL(vignettePreview);
    };
  }, [vignettePreview]);

  const handleFileVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const videoFile = files[0];
      setFormData({
        ...formData,
        video: {
          ...formData.video,
          video: videoFile,
        },
      });
    }
  }

  const handleFileChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);

    setImages(prevImages => {
      const newImages = [...prevImages];
      if (newImages[index].preview) {
        URL.revokeObjectURL(newImages[index].preview!);
      }
      newImages[index] = { file: file, preview: objectUrl };
      return newImages;
    });
  };

  useEffect(() => {
    return () => {
      images.forEach(img => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, [images]);

  const handleRemoveImage = (index: number) => {
    setImages(prevImages => {
      const newImages = [...prevImages];

      if (newImages[index].preview) {
        URL.revokeObjectURL(newImages[index].preview as string);
      }

      newImages[index] = { file: null, preview: null };
      return newImages;
    });

    const inputElement = document.getElementById(
      `image${index}`
    ) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = '';
    }
  };

  return (
    <section className="border border-[#364153] rounded-2xl p-5 my-10 font-display">
      <div className="flex px-5 pb-5">
        <Film className="mx-2" />
        <h1 className="text-white text-xl font-bold">{t('submit_media.main_title', 'Médias & Accessibilité')}</h1>
      </div>
      <div>
        <label htmlFor="url" className={labelClasses}>
          {t('submit_media.video_source', 'Lien YouTube Source*')}
        </label>
        <input
          type="file"
          name="url"
          id="url"
          className={inputClasses}
          onChange={handleFileVideo}
          required
        />
      </div>
      <div className="flex mt-8">
        <input
          type="checkbox"
          name="soustitre"
          id="soustitre"
          className="h-5 w-5 mx-2 mt-1.5 cursor-pointer appearance-none rounded-xl border border-[#364153] checked:bg-mars-orange"
        />
        <label htmlFor="soustitre" className={labelClasses}>
          <h2 className="text-white cursor-pointer font-bold">
            {t('submit_media.subtitle_ask', 'Nécessite des sous-titres ?')}
          </h2>
          <p className="cursor-pointer">
            {t('submit_media.subtitle_desc', 'Cochez cette case si votre film nécessite des sous-titres')}
          </p>
        </label>
      </div>
      <div>
        <label htmlFor="srt">
          <div className={inputFile}>
            <Upload className="text-cyan-400 mx-auto mt-6 " />
            <p className="mt-2">{t('submit_media.srt_drop', 'Cliquez ici pour déposer votre fichier .SRT')}</p>
          </div>
          <input type="file" id="srt" accept=".srt" className="hidden" />
        </label>
      </div>
      <div className="mt-5">
        <p className={labelClasses}>{t('submit_media.vignette_label', 'Vignette Officielle*')}</p>
        <div className="relative w-full aspect-video mt-2">
          <label
            htmlFor="vignette"
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#13162A] border-2 border-dashed border-[#364153] rounded-lg text-slate-500 hover:cursor-pointer hover:border-[#f97316] overflow-hidden transition-all"
          >
            {vignettePreview ? (
              <img
                src={vignettePreview}
                alt="Vignette"
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                <Upload className="text-cyan-400 w-10 h-10 mb-3" />
                <p className="text-sm font-semibold">
                  {t('submit_media.vignette_add', 'Cliquez pour ajouter la vignette')}
                </p>
              </>
            )}
            <input
              type="file"
              id="vignette"
              accept="image/png, image/jpeg"
              className="hidden"
              onChange={handleVignetteChange}
            />
          </label>
          {vignettePreview && (
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                handleRemoveVignette();
              }}
              className="absolute -top-3 -right-3 bg-mars-orange hover:bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold transition shadow-lg z-10 border-2 border-[#13162A]"
              title={t('submit_media.vignette_remove', 'Supprimer la vignette')}
            >
              ✕
            </button>
          )}
        </div>

        <p className="mt-2 text-xs text-slate-500 text-center">
          {t('submit_media.vignette_hint', 'Format 16:9 recommandé (1920x1080px)')}
        </p>
      </div>
      <p className="block mt-6 text-gray-400 text-sm mb-2 font-medium">
        {t('submit_media.gallery_label', 'Galerie Stills (3 images max)')}
      </p>
      <div className="flex w-full gap-4 mt-1">
        {images.map((imageLot, index) => (
          <div key={index} className="relative flex-1">
            <SubmitImage
              key={index}
              id={`image${index}`}
              preview={imageLot.preview}
              onChange={e => handleFileChange(index, e)}
              accept="image/*"
            />
            {imageLot.preview && (
              <button
                type="button"
                onClick={e => {
                  e.preventDefault();
                  handleRemoveImage(index);
                }}
                className="absolute -top-3 -right-3 bg-[#f97316] hover:bg-orange-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold transition shadow-lg z-10 border-2 border-[#13162A]"
                title={t('submit_media.image_remove', "Supprimer l'image")}
              >
                X
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}