import { Link, useNavigate } from "react-router-dom";
import * as React from "react"; 
import { useState } from "react";
import '../../index.css'

export default function Auth() {
    // --- ÉTATS ---
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const navigate = useNavigate();

    // --- LOGIQUE DE CONNEXION ---
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            const response = await fetch("http://127.0.0.1:3000/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
console.log("DATA CONNEXION :", data);
            if (!response.ok) {
                throw new Error(data.message || "Identifiants incorrects");
            }

            // --- REDIRECTION INTELLIGENTE ---
            // On vérifie 'role' ou 'job' (vu que ta colonne SQL s'appelle 'job')
            const rawRole = data.user?.role || data.user?.job || "admin";
            
            // On passe tout en minuscules pour comparer sans erreur de majuscule
            const role = rawRole.toLowerCase().trim();

            localStorage.setItem("token", data.token);
            localStorage.setItem("userRole", rawRole); // On garde la valeur d'origine pour la sidebar
            localStorage.setItem("userId", data.user?.id);

            if (role === 'jury') {
                navigate("/admin/jury");
            } else {
                navigate("/admin/dashboard");
            }
            
        } catch (err: any) {
            setError(err.message || "Impossible de contacter le serveur");
        } finally {
            setIsLoading(false);
        }
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

    return (
        <div className="flex items-center justify-center min-h-screen bg-color-midnight p-4 font-sans">
            <main className="w-full max-w-md bg-color-midnight rounded-2xl p-8 border border-mars-orange shadow-2xl">
             
                <div className="text-center mb-10">
                    <h1 className="text-white text-3xl font-bold tracking-wider uppercase">
                        Connexion <span className="text-orange-500">Admin</span>
                    </h1>
                    <div className="h-1 w-12 bg-orange-500 mx-auto mt-2 rounded-full"></div> 
                </div>

                {error && (
                    <div className="bg-red-500/10 border border-red-500 text-red-500 text-sm p-3 rounded-lg mb-6 text-center animate-pulse">
                        {error}
                    </div>
                )}

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* CHAMP EMAIL */}
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="identifier" className="text-gray-300 text-sm font-medium ml-1">Adresse Email</label>
                        <div className="relative group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 group-focus-within:text-orange-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                            <input
                                id="identifier"
                                type="email"
                                required
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="admin@mars.ia"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            />
                        </div>
                    </div>

                    {/* CHAMP MOT DE PASSE */}
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label htmlFor="password" className="text-gray-300 text-sm font-medium">Mot de passe</label>
                            <Link to="/forgot-password"  className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors">
                                Oublié ?
                            </Link>
                        </div>
                        <div className="relative group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 group-focus-within:text-orange-500 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </span>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                value={password}
                                onChange={handlePasswordChange}
                                placeholder="••••••••"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-10 pr-12 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 text-gray-500 hover:text-white focus:outline-none"
                            >
                                {showPassword ? "Cacher" : "Voir"}
                            </button>
                        </div>
                    </div>

                    <button 
                        type="submit" 
                        disabled={isLoading}
                        className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-gray-700 text-white font-bold py-3.5 rounded-lg uppercase transition-all shadow-lg"
                    >
                        {isLoading ? "Connexion..." : "Se Connecter"}
                    </button>
                </form>
            </main>
        </div>
    );
}