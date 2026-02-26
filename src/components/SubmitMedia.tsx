import { Film, Upload, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SubmitImage } from './SubmitImage';
import { useTranslation } from "react-i18next";
import type { Dispatch, SetStateAction } from 'react';
import type { Submit } from './types';

const inputClasses =
  'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';
const inputFile =
  'w-full h-30 bg-[#13162A] border border-dashed border-[#364153] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:border-mars-orange hover:cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';

export default function SubmitMedia({ formData, setFormData }: {
  setFormData: Dispatch<SetStateAction<Submit>>,
  formData: Submit
}) {
  const { t } = useTranslation('submit_form');

  // --- ÉTAT LOCAL POUR LES PREVIEWS ---
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

  // --- GESTION VIDÉO ---
  const handleFileVideo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log("🎥 Vidéo sélectionnée :", file.name);
      setFormData(prev => ({ ...prev, video: file }));
    }
  };

  // --- GESTION VIGNETTE (COVER) ---
  const handleVignetteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (vignettePreview) URL.revokeObjectURL(vignettePreview);
    const objectUrl = URL.createObjectURL(file);
    
    setVignettePreview(objectUrl);
    setFormData(prev => ({ ...prev, cover_img: file }));
  };

  const handleRemoveVignette = () => {
    if (vignettePreview) URL.revokeObjectURL(vignettePreview);
    setVignettePreview(null);
    setFormData(prev => ({ ...prev, cover_img: null }));
    
    const input = document.getElementById('vignette') as HTMLInputElement;
    if (input) input.value = '';
  };

  // --- GESTION GALERIE (STILLS) ---
  const handleFileChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);

    setImages(prev => {
      const newImages = [...prev];
      if (newImages[index].preview) URL.revokeObjectURL(newImages[index].preview!);
      newImages[index] = { file: file, preview: objectUrl };
      return newImages;
    });
  };

  const handleRemoveImage = (index: number) => {
    setImages(prev => {
      const newImages = [...prev];
      if (newImages[index].preview) URL.revokeObjectURL(newImages[index].preview!);
      newImages[index] = { file: null, preview: null };
      return newImages;
    });
    
    const input = document.getElementById(`image${index}`) as HTMLInputElement;
    if (input) input.value = '';
  };

  // --- SYNCHRONISATION DE LA GALERIE AVEC LE FORMDATA PARENT ---
  useEffect(() => {
    // On filtre pour ne garder que les fichiers réels
    const fileList = images
      .map(img => img.file)
      .filter((file): file is File => file !== null);
    
    setFormData(prev => ({ ...prev, image: fileList }));
  }, [images, setFormData]);

  // Nettoyage des URLs au démontage
  useEffect(() => {
    return () => {
      if (vignettePreview) URL.revokeObjectURL(vignettePreview);
      images.forEach(img => {
        if (img.preview) URL.revokeObjectURL(img.preview);
      });
    };
  }, []);

  return (
    <section className="border border-[#364153] rounded-2xl p-5 my-10 font-display">
      <div className="flex px-5 pb-5 items-center">
        <Film className="mx-2 text-mars-orange" />
        <h1 className="text-white text-xl font-bold">{t('submit_media.main_title', 'Médias & Accessibilité')}</h1>
      </div>

      {/* VIDÉO SÉLECTION */}
      <div className="px-5">
        <label htmlFor="url" className={labelClasses}>
          {t('submit_media.video_source', 'Fichier Vidéo (Source)*')}
        </label>
        <input
          type="file"
          id="url"
          accept="video/*"
          className={inputClasses}
          onChange={handleFileVideo}
          required
        />
        {formData.video && (
          <p className="text-xs text-green-500 mt-1">✓ {formData.video.name}</p>
        )}
      </div>

      {/* SOUS-TITRES */}
      <div className="flex mt-8 px-5">
        <input
          type="checkbox"
          id="soustitre"
          checked={formData.media.hassubs}
          onChange={(e) => setFormData(prev => ({
            ...prev, 
            media: { ...prev.media, hassubs: e.target.checked }
          }))}
          className="h-5 w-5 mx-2 mt-1.5 cursor-pointer appearance-none rounded border border-[#364153] checked:bg-mars-orange transition-all"
        />
        <label htmlFor="soustitre" className={labelClasses}>
          <h2 className="text-white cursor-pointer font-bold">
            {t('submit_media.subtitle_ask', 'Nécessite des sous-titres ?')}
          </h2>
          <p className="cursor-pointer text-xs">
            {t('submit_media.subtitle_desc', 'Cochez cette case si votre film nécessite des sous-titres')}
          </p>
        </label>
      </div>

      {/* FICHIER SRT */}
      <div className="px-5 mt-4">
        <label htmlFor="srt">
          <div className={inputFile}>
            <Upload className="text-cyan-400 mx-auto mt-6" />
            <p className="mt-2 text-white">{t('submit_media.srt_drop', 'Cliquez ici pour déposer votre fichier .SRT')}</p>
          </div>
          <input type="file" id="srt" accept=".srt" className="hidden" />
        </label>
      </div>

      {/* VIGNETTE (COVER) */}
      <div className="mt-8 px-5">
        <p className={labelClasses}>{t('submit_media.vignette_label', 'Vignette Officielle (Affiche)*')}</p>
        <div className="relative w-full aspect-video mt-2">
          <label
            htmlFor="vignette"
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#13162A] border-2 border-dashed border-[#364153] rounded-lg text-slate-500 hover:cursor-pointer hover:border-[#f97316] overflow-hidden transition-all"
          >
            {vignettePreview ? (
              <img src={vignettePreview} alt="Preview" className="w-full h-full object-cover" />
            ) : (
              <>
                <Upload className="text-cyan-400 w-10 h-10 mb-3" />
                <p className="text-sm font-semibold">{t('submit_media.vignette_add')}</p>
              </>
            )}
            <input type="file" id="vignette" accept="image/*" className="hidden" onChange={handleVignetteChange} />
          </label>
          
          {vignettePreview && (
            <button
              type="button"
              onClick={handleRemoveVignette}
              className="absolute -top-3 -right-3 bg-mars-orange text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-10 border-2 border-[#13162A]"
            >
              <X size={16} />
            </button>
          )}
        </div>
        <p className="mt-2 text-xs text-slate-500 text-center">{t('submit_media.vignette_hint')}</p>
      </div>

      {/* GALERIE STILLS */}
      <div className="px-5 mt-8">
        <p className={labelClasses}>{t('submit_media.gallery_label', 'Galerie Stills (3 images max)')}</p>
        <div className="flex w-full gap-4 mt-2">
          {images.map((imageLot, index) => (
            <div key={index} className="relative flex-1">
              <SubmitImage
                id={`image${index}`}
                preview={imageLot.preview}
                onChange={e => handleFileChange(index, e)}
                accept="image/*"
              />
              {imageLot.preview && (
                <button
                  type="button"
                  onClick={() => handleRemoveImage(index)}
                  className="absolute -top-3 -right-3 bg-mars-orange text-white rounded-full w-7 h-7 flex items-center justify-center shadow-lg z-10 border-2 border-[#13162A]"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}