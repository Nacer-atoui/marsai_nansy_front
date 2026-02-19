import { Link } from "react-router-dom";
import { useState } from "react";
import '../index.css';

export default function Auth() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen bg-color-midnight p-4 font-sans">
            <main className="w-full max-w-md bg-color-midnight rounded-2xl p-8 border border-mars-orange shadow-2xl" aria-labelledby="auth-title">
             
                <div className="text-center mb-10">
                    <h1 id="auth-title" className="text-white text-3xl font-bold tracking-wider uppercase">
                        Connexion <span className="text-orange-500">Admin</span>
                    </h1>
                    <div className="h-1 w-12 bg-orange-500 mx-auto mt-2 rounded-full"></div> 
                </div>

                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                 
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="identifier" className="text-gray-300 text-sm font-medium ml-1">Adresse Email</label>
                        <div className="relative group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 group-focus-within:text-orange-500 transition-colors" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>
                            </span>
                            <input
                                id="identifier"
                                type="text"
                                required
                                placeholder="Identifiant"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                aria-required="true"
                            />
                        </div>
                    </div>

                   
                    <div className="flex flex-col space-y-2">
                        <div className="flex justify-between items-center px-1">
                            <label htmlFor="password" className="text-gray-300 text-sm font-medium">Mot de passe</label>
                            <Link to="/forgot-password" className="text-cyan-400 text-sm hover:text-cyan-300 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded transition-all">
                                Mot de passe oublié ?
                            </Link>
                        </div>
                        <div className="relative group">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 group-focus-within:text-orange-500 transition-colors" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                                </svg>
                            </span>
                            <input
                                id="password"
                                type={showPassword ? "text" : "password"}
                                required
                                placeholder="••••••••"
                                className="w-full bg-black/50 border border-gray-700 rounded-lg py-3 pl-10 pr-12 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                                aria-required="true"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-0 pr-3 text-gray-500 hover:text-white focus:outline-none"
                                aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                            >
                                {showPassword ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="w-full bg-[#ff6600] hover:bg-[#e65c00] text-white font-bold py-3.5 rounded-lg uppercase tracking-widest transition-all shadow-lg focus:ring-4 focus:ring-orange-500/50 active:scale-[0.98]">
                        Se Connecter
                    </button>
                </form>
            </main>
        </div>
    );
}