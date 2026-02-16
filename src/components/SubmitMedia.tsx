import { Film, Upload, ImagePlus } from "lucide-react";

const inputClasses =
  'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';
const inputFile = 'w-full h-30 bg-[#13162A] border border-[#364153] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:cursor-pointer file:mr-4 file: file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';
const inputFile1 = 'w-full h-150 bg-[#13162A] border border-[#364153] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:cursor-pointer file:mr-4 file: file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';
const inputFile2 = 'w-100 h-100 bg-[#13162A] border border-[#364153] text-sm text-center px-4 py-3 rounded-lg text-slate-500 hover:cursor-pointer hover:border-mars-orange file:mr-4 file: file:py-2 file:px-4 file:rounded-lg file:border file:border-[#364153] file:text-sm file:font-semibold file:bg-footer file:text-white hover:file:border-mars-orange';


export default function SubmitMedia() {
  return (
    <section className="border border-[#364153] rounded-2xl p-5 my-10 font-display">
        <div className="flex px-5 pb-5">
            <Film className="mx-2" />
            <h1>Médias & Accessibilité</h1>
        </div>
        <div>
            <label htmlFor="url" className={labelClasses}>Lien YouTube Source*</label>
            <input type="url" name="url" id="url" placeholder="https://www.youtube.com/watch?v=Ry8XRCS-Tyd" className={inputClasses} required />
        </div>
        <div className="flex mt-8">
            <input type="checkbox" name="soustitre" id="soustitre" className="h-5 w-5 mx-2 mt-1.5 cursor-pointer appearance-none rounded-xl border border-[#364153] checked:bg-mars-orange" />
            <label htmlFor="soustitre" className={labelClasses} >
                <h2 className="text-white cursor-pointer">Nécessite des sous-titres ?</h2>
                <p className="cursor-pointer">Cochez cette case si votre film nécessite des sous-titres</p>
            </label>
        </div>
        <div>
            <label htmlFor="srt">
                <div className={inputFile}>
                    <Upload className="text-cyan-400 mx-auto mt-6 " />
                    <p className="mt-2">Cliquez ici pour déposer votre fichier .SRT</p>
                </div>
                <input type="file" id="srt" accept=".srt" className="hidden" />
            </label>
        </div>
        <div className="mt-5">
            <p className={labelClasses}>Vignette Officielle*</p>
            <label htmlFor="vignette">
                <div className={inputFile1}>
                    <Upload className="text-cyan-400 mx-auto mt-65" />
                    <p className="mt-2">Format 16:9 recommandé (1920x1080px)</p>
                </div>
                <input type="file" id="vignette" accept=".srt" className="hidden" />
            </label>
        </div>
            <p className="block mt-6 text-gray-400 text-sm mb-2 font-medium">Galerie Stills (3 images max)</p>
        <div className="flex w-full gap-4 mt-1">
            <label htmlFor="image">
                <div className={inputFile2}>
                    <ImagePlus className="text-cyan-400 mx-auto mt-45" />
                </div>
                <input type="file" id="image" accept="image/png, image/jpeg" className="hidden" />
            </label>
            <label htmlFor="image">
                <div className={inputFile2}>
                    <ImagePlus className="text-cyan-400 mx-auto mt-45" />
                </div>
                <input type="file" id="image" accept="image/png, image/jpeg" className="hidden" />
            </label>
            <label htmlFor="image">
                <div className={inputFile2}>
                    <ImagePlus className="text-cyan-400 mx-auto mt-45" />
                </div>
                <input type="file" id="image" accept="image/png, image/jpeg" className="hidden" />
            </label>
        </div>
    </section>
  )
}
