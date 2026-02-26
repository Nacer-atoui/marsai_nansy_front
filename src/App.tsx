import { Route, Routes, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; 
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
import Admin from './page/Admin.tsx';
import DashBoard from './components/Admin/DashBoard.tsx';
import CmsEditor from './components/Admin/CmsEditor.tsx';
import UserAdmin from './components/Admin/UserAdmin.tsx';
import './index.css';
import './i18n'; 
import AdminFilmList from './components/Admin/AdminFilmList.tsx';
import JuryFilmList from './components/JuryFilmList.tsx';
import JuryFilmDetail from './page/JuryFilmDetail.tsx';
import AdminFilmDetails from './components/Admin/AdminFilmDetail.tsx';

// 1. Le Gardien : Protection des routes Admin
const ProtectedRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    // Redirection vers la page de login secrète si pas de token
    return <Navigate to={`/${import.meta.env.VITE_SECRET_AUTH_PATH}`} replace />;
  }
  return children;
};

export default function App() {
  // On initialise i18n ici au cas où on en aurait besoin plus tard, 
  // mais le Header gère le changement de langue tout seul.
  useTranslation();

  return (
    <Routes>
      {/* --- ROUTE D'AUTHENTIFICATION SECRÈTE --- */}
      <Route path={`/${import.meta.env.VITE_SECRET_AUTH_PATH}`} element={<Auth />} />
      
      {/* --- ESPACE ADMIN & JURY (Avec la Sidebar noire) --- */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute>
            <Admin /> 
          </ProtectedRoute>
        } 
      >
        <Route path="dashboard" element={<DashBoard />} />
        <Route path="cms" element={<CmsEditor/>} />
        <Route path="films" element={<AdminFilmList />} />
        <Route path="utilisateurs" element={<UserAdmin />} />
        <Route path="films/:id" element={<AdminFilmDetails />} />
        
        {/* L'espace Jury est maintenant imbriqué ici pour hériter du layout Admin */}
        <Route path="jury" element={<JuryFilmList />} />
        <Route path="jury/film/:id" element={<JuryFilmDetail />} />
      </Route> 
        
      {/* --- ESPACE PUBLIC (Avec Header et Footer) --- */}
      <Route path="*" element={<MainLayout />} />
    </Routes>
    
  );
}


function MainLayout() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen">
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