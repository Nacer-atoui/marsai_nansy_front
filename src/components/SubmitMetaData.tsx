import type { MetaData } from "./types";
import type { Submit } from "./types";

export default function SubmitMetaData({
    metadata, 
  handleChange
}: { 
  metadata: MetaData, 
  
  handleChange: (event: React.ChangeEvent<HTMLInputElement>, section: keyof Submit) => void
})  {
    
    const inputClasses = "w-full bg-[#13162A] border border-[#364153] text-white px-4 py-3 rounded-lg focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] placeholder-gray-500 transition-all";
    const labelClasses = "block text-gray-300 text-sm mb-2 font-medium";

    return (
      
        <section className="w-full font-display">
            
           
            <div className="mt-10  border border-[#364153] rounded-2xl p-8 flex flex-col gap-8">
                
               
                <div className="flex">
                    <img className="w-8 h-8 px-2" src="/iconmeta.svg" alt="" aria-hidden="true" />
                    <h3 className="text-white text-2xl font-bold">Métadonnées</h3>
                </div>

             
                <div className="w-full">
                    
                       
                        <div>
                            <label htmlFor="originalTitle" className={labelClasses}>
                                Titre original *
                            </label>
                            <input
                                type="text"
                                id="originalTitle"
                                name="original_title"
                                value={metadata.original_title} 
                                onChange={(e) => handleChange(e, 'metadata')}
                                placeholder="Ex: The Last Pixel"
                                className={inputClasses}
                                required
                            />
                        </div>

                      
                        <div>
                            <label htmlFor="duration" className={labelClasses}>
                                Durée * <span className="text-xs text-gray-600">(Minutes ou secondes)</span>
                            </label>
                            <input
                                type="text"
                                id="duration"
                                name="duration"
                                value={metadata.duration} 
                                onChange={(e) => handleChange(e, 'metadata')}
                                placeholder="Ex: 60s"
                                className={inputClasses}
                                required
                            />
                        </div>

                       
                        <div>
                            <label htmlFor="tags" className={labelClasses}>
                                Tags *
                            </label>
                            <input
                                type="text"
                                id="tags"
                                name="tags"
                                value={metadata.tags} 
                                onChange={(e) => handleChange(e, 'metadata')}
                                placeholder="Ex: Midjourney, Chat GPT ..."
                                className={inputClasses}
                                required
                            />
                        </div>
                </div>
            </div>

        </section>
    )
}