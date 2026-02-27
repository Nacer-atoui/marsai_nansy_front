import { useEffect } from 'react'; // 1. On ajoute useEffect
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

const ProtectedRoute = ({ children }: { children: any }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to={`/${import.meta.env.VITE_SECRET_AUTH_PATH}`} replace />;
  }
  return children;
};

export default function App() {
  useTranslation();

  // 2. LOGIQUE DE COULEUR DYNAMIQUE
  useEffect(() => {
    // On appelle la route de config qu'on a créée dans le server.ts
    fetch('http://localhost:3000/api/admin/site-config')
      .then(res => res.json())
      .then(data => {
        if (data && data.primary_color) {
          // On injecte la couleur de la BDD dans la variable CSS racine
          document.documentElement.style.setProperty('--primary-color', data.primary_color);
          console.log("🎨 Couleur primaire appliquée :", data.primary_color);
        }
      })
      .catch(err => console.error("❌ Erreur chargement couleur :", err));
  }, []);

  return (
    <Routes>
      <Route path={`/${import.meta.env.VITE_SECRET_AUTH_PATH}`} element={<Auth />} />
      
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
        <Route path="jury" element={<JuryFilmList />} />
        <Route path="jury/film/:id" element={<JuryFilmDetail />} />
      </Route> 
        
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