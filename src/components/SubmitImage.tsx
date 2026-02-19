import { ImagePlus } from 'lucide-react';
import { useState, type InputHTMLAttributes } from 'react';

const inputFile2 =
  'w-100 h-100 bg-[#13162A] border border-[#364153] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:cursor-pointer hover:border-mars-orange file:mr-4 file: file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';

interface Gallery extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  preview: string | null;
}

export const SubmitImage = ({ id, preview, className, ...props }: Gallery) => {
  return (
    <>
      <label htmlFor={id}>
        <div className={inputFile2}>
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex flex-col items-center p-4">
              <ImagePlus className="text-cyan-400 mx-auto mt-45" />
              <span className="text-gray-500 text-sm">Ajouter une image</span>
            </div>
          )}
        </div>
        <input id={id} type="file" className="hidden" {...props} />
      </label>
    </>
  );
};
