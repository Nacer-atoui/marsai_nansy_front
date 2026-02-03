import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { Header } from './components/Header.tsx'
import { About } from './page/About.tsx'
import Movie from './page/Movie.tsx'
import Jury from './page/Jury.tsx'
import Contact from './page/Contact.tsx'
import { Footer } from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      
    <Routes>
        <Route path="/"element={<App />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/jury' element={<Jury/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </BrowserRouter>
    <Footer/>
  </StrictMode>,
)
