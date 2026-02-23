import { Route, Routes, Navigate } from 'react-router-dom';
import { Header } from './components/Header.tsx';
import { About } from './page/About.tsx';
import Jury from './page/Jury.tsx';
import Contact from './page/Contact.tsx';
import Auth from './components/Admin/Auth.tsx';
import { Footer } from './components/Footer.tsx';
import Movie from './page/Movie.tsx';
import HomePage from './page/HomePage.tsx';
import SubmitPage from './page/SubmitPage.tsx';
import FilmDetail from './page/FilmDetail.tsx';

import './index.css';
import './i18n';
import Admin from './page/Admin.tsx';

// 1. Le Gardien : Il ne bloque que si on essaie d'aller sur une route protégée
const ProtectedRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    // Si pas de token, on redirige vers la page secrète de login
    return <Navigate to={`/${import.meta.env.VITE_SECRET_AUTH_PATH}`} replace />;
  }

  return children;
};

export default function App() {
  return (
    <Routes>
      {/* Route secrète pour se connecter */}
      <Route path={`/${import.meta.env.VITE_SECRET_AUTH_PATH}`} element={<Auth />} />

      {/* Ici on définit ce qui est protégé. 
          Si tu as une page Dashboard Admin, on la met sous ProtectedRoute.
      */}
      <Route 
        path="/admin/dashboard" 
        element={
          <ProtectedRoute>
            <div className="admin-container">
               <h1>Page Admin Privée</h1>
               <Admin/>
            </div>
          </ProtectedRoute>
        } 
      />

      {/* Tout le reste du site est géré par MainLayout (PUBLIQUE) */}
      <Route path="*" element={<MainLayout />} />
    </Routes>
  );
}

// 2. Le Layout Public : Accessible à tout le monde
function MainLayout() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/jury" element={<Jury />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/filmdetail/:id" element={<FilmDetail />} />
          <Route path="/submit" element={<SubmitPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}