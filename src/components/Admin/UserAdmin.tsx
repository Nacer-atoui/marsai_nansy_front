import { useState, useEffect } from 'react';
import { 
  Crown, ShieldCheck, Users, Trash2, Mail, 
  X, Loader2 
} from 'lucide-react';

export default function UserAdmin() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Jury');
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://127.0.0.1:3000/api/auth/staff', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Erreur de chargement:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id: number) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce collaborateur ?")) return;
    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`http://127.0.0.1:3000/api/auth/staff/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (response.ok) fetchUsers();
    } catch (error) {
      alert("Erreur serveur");
    }
  };

  const handleRegisterStaff = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('http://127.0.0.1:3000/api/auth/register-staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ email, password, roleLabel: selectedRole })
      });
      if (response.ok) {
        setIsModalOpen(false);
        setEmail('');
        setPassword('');
        fetchUsers();
      }
    } catch (error) {
      alert("Erreur connexion");
    } finally {
      setLoading(false);
    }
  };

  // --- MISE À JOUR : Valeur par défaut 'Jury' ---
  const getRoleBadge = (role: string | null) => {
    const r = (role || 'Jury').toLowerCase();
    if (r.includes('super')) return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/20';
    if (r === 'admin') return 'text-[#f97316] bg-[#f97316]/10 border-[#f97316]/20';
    return 'text-blue-400 bg-blue-500/10 border-blue-500/20';
  };

  return (
    <div className="min-h-screen bg-[#07091D] text-white p-8 font-montserrat w-full relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div className="border-l-4 border-[#f97316] pl-6">
            <h1 className="text-4xl font-bold uppercase tracking-tighter italic">Équipe Staff</h1>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mt-1">Accréditations Système</p>
          </div>
          <button onClick={() => setIsModalOpen(true)} className="bg-linear-to-r from-orange-500 to-[#f97316] px-6 py-3 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center gap-3 shadow-lg shadow-orange-500/20 hover:scale-105 transition-all">
            Ajouter un collaborateur
          </button>
        </div>

        <div className="bg-[#0B0F23] rounded-[2rem] border border-white/5 overflow-hidden shadow-2xl">
          <table className="w-full table-fixed border-collapse">
            <thead>
              <tr className="bg-white/[0.02] border-b border-white/5">
                <th className="w-[45%] p-6 text-[10px] font-black uppercase tracking-widest text-slate-500 text-left">Collaborateur</th>
                <th className="w-[25%] p-6 text-[10px] font-black uppercase tracking-widest text-slate-500 text-center">Rôle Système</th>
                <th className="w-[30%] p-6 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">Gestion</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {users.length === 0 ? (
                <tr><td colSpan={3} className="p-20 text-center text-slate-500 uppercase text-[10px] tracking-widest">Aucun collaborateur trouvé.</td></tr>
              ) : (
                users.map((user) => {
                  // --- MISE À JOUR : On utilise 'Jury' si le rôle est absent ---
                  const currentRole = user.role || 'Jury';
                  const lowerRole = currentRole.toLowerCase();
                  const isProtected = lowerRole.includes('super');

                  return (
                    <tr key={user.id} className="group hover:bg-white/[0.01] transition-all">
                      <td className="p-6 align-middle">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 shrink-0 rounded-full bg-[#07091D] border border-white/10 flex items-center justify-center text-[#f97316] font-black text-sm">
                            {(user.email || "U").charAt(0).toUpperCase()}
                          </div>
                          <div className="truncate">
                            <p className="font-bold text-sm tracking-tight truncate">{(user.email || "").split('@')[0]}</p>
                            <p className="text-slate-500 text-[11px] font-mono truncate">{user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-center align-middle">
                        <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-[9px] font-black uppercase tracking-[0.15em] ${getRoleBadge(user.role)}`}>
                          {lowerRole.includes('super') ? <Crown size={12} /> : lowerRole === 'admin' ? <ShieldCheck size={12} /> : <Users size={12} />}
                          {currentRole}
                        </div>
                      </td>
                      <td className="p-6 text-right align-middle">
                        {!isProtected ? (
                          <button onClick={() => handleDelete(user.id)} className="p-2.5 bg-red-500/5 hover:bg-red-500/20 rounded-lg text-red-500/40 hover:text-red-500 transition-all">
                            <Trash2 size={16} />
                          </button>
                        ) : (
                          <div className="pr-2 text-[8px] font-black text-slate-600 uppercase tracking-widest italic">
                            Accès Protégé
                          </div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* MODALE D'AJOUT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-[#07091D]/80 backdrop-blur-xl animate-in fade-in duration-300" onClick={() => setIsModalOpen(false)} />
          <div className="bg-[#0B0F23] border border-white/10 w-full max-w-xl rounded-[2.5rem] p-10 shadow-2xl relative z-10 animate-in zoom-in-95">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-8 right-8 text-slate-500 hover:text-white"><X size={24} /></button>
            <div className="mb-10 text-center sm:text-left">
              <span className="text-[10px] font-black text-[#f97316] uppercase tracking-[0.4em]">Configuration Accès</span>
              <h2 className="text-3xl font-bold italic uppercase tracking-tighter mt-1">Inscrire un membre</h2>
            </div>
            <form className="space-y-6" onSubmit={handleRegisterStaff}>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Email professionnel</label>
                <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#07091D] border border-white/10 rounded-2xl p-4 text-white focus:border-[#f97316] outline-none font-mono" placeholder="nom@mars-ia.com" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Mot de passe provisoire</label>
                <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#07091D] border border-white/10 rounded-2xl p-4 text-white focus:border-[#f97316] outline-none" placeholder="••••••••" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-1">Niveau de privilèges</label>
                <div className="grid grid-cols-3 gap-3">
                  {['Super Admin', 'Admin', 'Jury'].map((role) => (
                    <button key={role} type="button" onClick={() => setSelectedRole(role)} className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all ${selectedRole === role ? 'border-[#f97316] bg-[#f97316]/5 text-white' : 'border-white/5 text-slate-500'}`}>
                      {role === 'Super Admin' ? <Crown size={20} /> : role === 'Admin' ? <ShieldCheck size={20} /> : <Users size={20} />}
                      <span className="text-[8px] font-black uppercase">{role.split(' ')[0]}</span>
                    </button>
                  ))}
                </div>
              </div>
              <button disabled={loading} className="w-full bg-linear-to-r from-[#f97316] to-orange-600 py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] mt-4 shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-95 flex justify-center items-center gap-3 transition-all">
                {loading ? <Loader2 className="animate-spin" size={18} /> : "Finaliser l'inscription"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}