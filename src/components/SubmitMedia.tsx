import { Film } from "lucide-react";

const inputClasses =
  'w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all';
const labelClasses = 'block text-gray-400 text-sm mb-2 font-medium';

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
            <label htmlFor="soustitre" className={labelClasses}>
                <h2 className="text-white">Nécessite des sous-titres ?</h2>
                Cochez cette case si votre film nécessite des sous-titres
            </label>
        </div>
        
    </section>
  )
}
