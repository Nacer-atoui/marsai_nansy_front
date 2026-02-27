import { useState, useEffect } from 'react';
import { 
  Save, Image as ImageIcon, Type, Globe, Sparkles, 
  AlertCircle, CheckCircle2, Database, ChevronDown, 
  Layers, Loader2
} from 'lucide-react';
import { pageStructure } from './cmsStructure'; 

export default function CmsEditor() {
  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(pageStructure)[0]);
  const [formData, setFormData] = useState<Record<string, { fr: string, enManual: string }>>({});
  const [loadingKey, setLoadingKey] = useState<string | null>(null);
  const [status, setStatus] = useState({ type: '', msg: '' });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeSection = pageStructure[activeSectionKey as keyof typeof pageStructure];

  useEffect(() => {
    const fetchExistingData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/admin/section/${activeSectionKey}`);
        const data = await response.json();
        const prefilledData: Record<string, { fr: string, enManual: string }> = {};
        data.forEach((row: any) => {
          prefilledData[row.content_key] = { fr: row.fr, enManual: row.en };
        });
        setFormData(prefilledData);
      } catch (error) {
        console.error("Erreur de chargement", error);
      }
    };
    fetchExistingData();
    setStatus({ type: '', msg: '' });
    setIsMenuOpen(false);
  }, [activeSectionKey]);

  const handleInputChange = (key: string, lang: 'fr' | 'enManual', value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: { ...prev[key], [lang]: value }
    }));
  };

  const handleSaveGroup = async (fields: any[], groupTitle: string) => {
  setLoadingKey(groupTitle);
  setStatus({ type: 'info', msg: `SYNC : ${groupTitle}...` });

  try {
    for (const field of fields) {
      const data = formData[field.key];
      
      // 💡 CAS SPÉCIAL : La couleur primaire
      if (field.key === 'hero_primary_color' && data?.fr) {
        await fetch('http://localhost:3000/api/admin/update-config', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ primary_color: data.fr }) 
        });
       
        document.documentElement.style.setProperty('--primary-color', data.fr);
      } 
      
      // CAS GÉNÉRAL : Les textes (Traductions)
      else if (data?.fr) {
        await fetch('http://localhost:3000/api/admin/update-content', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            key: field.key,
            section: activeSectionKey, 
            textFr: data.fr,
            textEnManual: data.enManual || '' 
          })
        });
      }
    }
    setStatus({ type: 'success', msg: `MODIFICATIONS ENREGISTRÉES` });
  } catch (error) {
    setStatus({ type: 'error', msg: 'ERREUR SERVEUR' });
  } finally {
    setLoadingKey(null);
  }
};

  return (
    // RETOUR AU BACKGROUND MIDNIGHT
    <div className="min-h-screen bg-[#07091D] text-slate-200 font-montserrat flex flex-col w-full">
      
      {/* HEADER MIDNIGHT AVEC BLUR */}
      <header className="sticky top-0 z-[100] bg-[#07091D]/90 backdrop-blur-md border-b border-white/10 px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-[#f97316]">
            <Database size={18} />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Mars CMS</span>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#f97316]/50 px-5 py-2.5 rounded-xl transition-all group"
            >
              <Layers size={18} className="text-[#f97316]" />
              <span className="text-xs font-bold uppercase tracking-widest text-white">
                {activeSection.title}
              </span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''} text-slate-500`} />
            </button>

            {isMenuOpen && (
              <>
                <div className="fixed inset-0" onClick={() => setIsMenuOpen(false)} />
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#0B0F23] border border-white/10 rounded-xl shadow-2xl overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
                  <div className="p-1">
                    {Object.entries(pageStructure).map(([key, section]) => (
                      <button
                        key={key}
                        onClick={() => setActiveSectionKey(key)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg text-left text-[11px] font-bold uppercase tracking-wider transition-all ${
                          activeSectionKey === key ? 'bg-[#f97316] text-white shadow-lg shadow-[#f97316]/20' : 'text-slate-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {section.title}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {status.msg && (
          <div className={`px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest transition-all ${
            status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-green-500/10 border-green-500/20 text-green-400'
          }`}>
             {status.msg}
          </div>
        )}
      </header>

      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-8 md:p-12">
          
          <div className="mb-16 border-l-4 border-[#f97316] pl-8">
             <span className="text-[10px] font-black text-[#f97316] uppercase tracking-[0.4em]">Mars Management</span>
             <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white italic leading-none mt-2">
               {activeSectionKey.replace('_', ' ')}
             </h1>
          </div>

          <div className="space-y-24">
            {activeSection.groups.map((group, groupIndex) => (
              <section key={groupIndex} className="space-y-8 group/section">
                
                {/* HEADER DE GROUPE STICKY */}
                <div className="flex items-center justify-between sticky top-[80px] z-40 bg-[#07091D]/95 py-4 backdrop-blur-md border-b border-white/5">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-[#f97316]">
                    {group.groupTitle}
                  </h3>
                  
                  <button 
                    onClick={() => handleSaveGroup(group.fields, group.groupTitle)}
                    disabled={loadingKey === group.groupTitle}
                    className="flex items-center gap-3 bg-[#f97316] hover:bg-orange-600 disabled:opacity-50 text-white text-[10px] font-black uppercase tracking-widest px-8 py-3 rounded-full transition-all shadow-xl hover:shadow-[#f97316]/20 active:scale-95"
                  >
                    {loadingKey === group.groupTitle ? <Loader2 size={14} className="animate-spin" /> : <Save size={14} />}
                    Enregistrer
                  </button>
                </div>

                <div className="grid gap-10">
                  {group.fields.map((field) => (
                    <div key={field.key} className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#0B0F23]/40 p-10 rounded-3xl border border-white/5 group-hover/section:border-[#f97316]/10 transition-all duration-500">
                      
                      {/* VERSION FRANÇAISE */}
                      <div className="space-y-4">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 flex items-center gap-2">
                          <Type size={14} className="text-[#f97316]" /> {field.label} (FR)
                        </label>
                        {field.type === 'textarea' ? (
                          <textarea 
                            rows={4}
                            className="w-full bg-[#07091D] border border-white/10 rounded-2xl p-5 text-lg text-white focus:border-[#f97316] outline-none transition-all resize-none shadow-inner"
                            value={formData[field.key]?.fr || ''}
                            onChange={(e) => handleInputChange(field.key, 'fr', e.target.value)}
                          />
                        ) : (
                          <input 
                            type="text"
                            className="w-full bg-[#07091D] border border-white/10 rounded-2xl p-5 text-lg text-white focus:border-[#f97316] outline-none transition-all shadow-inner"
                            value={formData[field.key]?.fr || ''}
                            onChange={(e) => handleInputChange(field.key, 'fr', e.target.value)}
                          />
                        )}
                      </div>

                      {/* VERSION ANGLAISE */}
                      <div className="space-y-4">
                        {field.type !== 'image' ? (
                          <>
                            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#00FFFF]/60 flex items-center gap-2">
                              <Globe size={14} /> English <Sparkles size={10} className="text-[#00FFFF] opacity-50" />
                            </label>
                            {field.type === 'textarea' ? (
                              <textarea 
                                rows={4}
                                className="w-full bg-[#07091D]/50 border border-[#00FFFF]/10 rounded-2xl p-5 text-lg font-mono text-[#00FFFF]/80 focus:border-[#00FFFF]/40 outline-none transition-all resize-none"
                                placeholder="Auto-DeepL si vide..."
                                value={formData[field.key]?.enManual || ''}
                                onChange={(e) => handleInputChange(field.key, 'enManual', e.target.value)}
                              />
                            ) : (
                              <input 
                                type="text"
                                className="w-full bg-[#07091D]/50 border border-[#00FFFF]/10 rounded-2xl p-5 text-sm font-mono text-[#00FFFF]/80 focus:border-[#00FFFF]/40 outline-none transition-all"
                                placeholder="Auto-DeepL si vide..."
                                value={formData[field.key]?.enManual || ''}
                                onChange={(e) => handleInputChange(field.key, 'enManual', e.target.value)}
                              />
                            )}
                          </>
                        ) : (
                          <div className="h-full flex flex-col items-center justify-center bg-black/30 rounded-2xl border border-dashed border-white/5">
                            <ImageIcon size={32} className="opacity-10 mb-2" />
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-700">Media partagé</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}