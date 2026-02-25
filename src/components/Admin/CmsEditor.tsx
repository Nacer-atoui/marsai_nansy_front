import { useState, useEffect } from 'react';
import { Save, Image as ImageIcon, Type, LayoutTemplate, Globe, Sparkles, AlertCircle, CheckCircle2, Database } from 'lucide-react';
import { pageStructure } from './cmsStructure'; 

export default function CmsEditor() {
  const [activeSectionKey, setActiveSectionKey] = useState(Object.keys(pageStructure)[0]);
  const [formData, setFormData] = useState<Record<string, { fr: string, enManual: string }>>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', msg: '' });

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
        console.error("Erreur de pré-remplissage", error);
      }
    };
    fetchExistingData();
    setStatus({ type: '', msg: '' }); 
  }, [activeSectionKey]);

  const handleInputChange = (key: string, lang: 'fr' | 'enManual', value: string) => {
    setFormData(prev => ({
      ...prev,
      [key]: { ...prev[key], [lang]: value }
    }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setStatus({ type: 'info', msg: 'Synchronisation SQL & DeepL...' });

    try {
      const keysToUpdate = Object.keys(formData);
      for (const key of keysToUpdate) {
        const data = formData[key];
        if (data.fr) {
          await fetch('http://localhost:3000/api/admin/update-content', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              key: key,
              section: activeSectionKey, 
              textFr: data.fr,
              textEnManual: data.enManual || '' 
            })
          });
        }
      }
      setStatus({ type: 'success', msg: `Section [${activeSection.title}] déployée avec succès !` });
      
      // Fait disparaître le message de succès après 4 secondes
      setTimeout(() => setStatus({ type: '', msg: '' }), 4000);
    } catch (error) {
      setStatus({ type: 'error', msg: 'Erreur lors de la communication serveur (Port 3000).' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row bg-[#050505] text-slate-200 font-display min-h-screen">
      
      {/* SIDEBAR CMS */}
      <aside className="w-full md:w-80 bg-black/40 border-r border-white/5 p-6 flex flex-col gap-8">
        <div>
          <div className="flex items-center gap-2 text-mars-orange mb-2">
            <Database size={16} />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Content Manager</span>
          </div>
          <h1 className="text-3xl font-black uppercase tracking-tighter italic">
            MARS<span className="text-mars-orange">.</span>CMS
          </h1>
        </div>

        <nav className="flex flex-col gap-3">
          {Object.entries(pageStructure).map(([key, section]) => (
            <button
              key={key}
              onClick={() => setActiveSectionKey(key)}
              className={`flex items-center gap-3 p-4 rounded-xl text-left text-sm font-bold transition-all ${
                activeSectionKey === key 
                  ? 'bg-mars-orange/10 text-mars-orange border border-mars-orange/20 shadow-inner' 
                  : 'text-slate-500 hover:text-slate-300 hover:bg-white/5 border border-transparent'
              }`}
            >
              <LayoutTemplate size={18} />
              {section.title}
            </button>
          ))}
        </nav>
      </aside>

      {/* ZONE PRINCIPALE SCROLLABLE */}
      <main className="flex-1 relative flex flex-col h-screen overflow-hidden">
        
        {/* En-tête de la section */}
        <header className="p-8 pb-4 border-b border-white/5">
          <h2 className="text-3xl font-black uppercase tracking-tight text-white">
            {activeSection.title}
          </h2>
          <p className="text-slate-500 font-mono text-xs mt-2">
            Édition dynamique de la section "{activeSectionKey}"
          </p>
        </header>

        {/* Formulaire (qui scroll) */}
        <div className="flex-1 overflow-y-auto p-8 pb-32">
          <div className="max-w-5xl mx-auto">
            {status.msg && (
              <div className={`mb-8 flex items-center gap-3 px-6 py-4 rounded-xl border text-xs font-bold uppercase tracking-wider animate-in fade-in ${
                status.type === 'error' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 
                status.type === 'success' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 
                'bg-white/5 border-white/10 text-slate-400'
              }`}>
                {status.type === 'error' ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
                {status.msg}
              </div>
            )}

            <form className="space-y-12">
              {activeSection.groups.map((group, groupIndex) => (
                <div key={groupIndex} className="bg-white/[0.02] border border-white/5 rounded-3xl p-6 md:p-10 space-y-10 shadow-2xl">
                  
                  <h3 className="text-xl font-bold uppercase tracking-widest text-mars-orange border-b border-white/10 pb-4">
                    {group.groupTitle}
                  </h3>

                  <div className="space-y-12">
                    {group.fields.map((field) => (
                      <div key={field.key} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between px-1">
                            <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                              {field.type === 'image' ? <ImageIcon size={14} className="text-cyan-400" /> : <Type size={14} className="text-mars-orange" />}
                              {field.label}
                            </label>
                            <span className="text-[9px] text-slate-600 uppercase font-bold">Obligatoire</span>
                          </div>
                          
                          {field.type === 'textarea' ? (
                            <textarea 
                              rows={4}
                              className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 text-lg focus:border-mars-orange/50 outline-none transition-all resize-none shadow-inner"
                              placeholder="Version Française..."
                              value={formData[field.key]?.fr || ''}
                              onChange={(e) => handleInputChange(field.key, 'fr', e.target.value)}
                            />
                          ) : (
                            <input 
                              type="text"
                              className={`w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 focus:border-mars-orange/50 outline-none transition-all ${field.type === 'image' ? 'font-mono text-cyan-400 text-sm' : 'text-lg'}`}
                              placeholder={field.type === 'image' ? '/images/nom-du-fichier.png' : 'Saisissez le texte...'}
                              value={formData[field.key]?.fr || ''}
                              onChange={(e) => handleInputChange(field.key, 'fr', e.target.value)}
                            />
                          )}
                          <p className="text-[9px] font-mono text-slate-600 px-2 opacity-50 hover:opacity-100 transition-opacity">Key: {field.key}</p>
                        </div>

                        {field.type !== 'image' ? (
                          <div className="space-y-3">
                            <div className="flex justify-between items-center px-1">
                              <label className="text-[10px] font-black uppercase tracking-widest text-cyan-400 flex items-center gap-2">
                                <Globe size={14} /> Anglais
                              </label>
                              <span className="flex items-center gap-1 text-[9px] uppercase font-bold text-cyan-500/50">
                                <Sparkles size={10} /> IA si vide
                              </span>
                            </div>
                            
                            {field.type === 'textarea' ? (
                              <textarea 
                                rows={4}
                                className="w-full bg-cyan-400/[0.02] border border-cyan-400/10 rounded-2xl p-5 text-lg font-mono text-cyan-400/80 focus:border-cyan-400/40 outline-none transition-all resize-none"
                                placeholder="Laissez vide pour la traduction automatique..."
                                value={formData[field.key]?.enManual || ''}
                                onChange={(e) => handleInputChange(field.key, 'enManual', e.target.value)}
                              />
                            ) : (
                              <input 
                                type="text"
                                className="w-full bg-cyan-400/[0.02] border border-cyan-400/10 rounded-2xl p-5 font-mono text-cyan-400/80 focus:border-cyan-400/40 outline-none transition-all text-sm"
                                placeholder="Traduction forcée (Optionnelle)..."
                                value={formData[field.key]?.enManual || ''}
                                onChange={(e) => handleInputChange(field.key, 'enManual', e.target.value)}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="h-full flex items-center justify-center p-6 border border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
                            <p className="text-xs font-mono text-slate-500 text-center">
                              Le nom du fichier est identique pour toutes les langues.
                            </p>
                          </div>
                        )}

                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </form>
          </div>
        </div>

        {/* LA NOUVELLE BARRE COLLANTE EN BAS */}
        <div className="absolute bottom-0 left-0 w-full bg-[#050505]/95 backdrop-blur-md border-t border-white/10 p-6 flex justify-end z-50">
          <button 
            onClick={handleSubmit}
            disabled={loading}
            className="bg-mars-orange text-white font-black px-10 py-4 rounded-xl uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-xl active:scale-95 disabled:opacity-50 flex items-center gap-3"
          >
            <Save size={18} />
            {loading ? "Déploiement en cours..." : "Publier les modifications"}
          </button>
        </div>

      </main>
    </div>
  );
}