import { Header } from './components/Header.tsx'
import { About } from './page/About.tsx'
import Jury from './page/Jury.tsx'
import Contact from './page/Contact.tsx'
import { Footer } from './components/Footer.tsx'
import Movie from './page/Movie.tsx'
import { Route, Routes } from 'react-router-dom'
import Homepage from './page/Homepage.tsx'
import './index.css'
  
  
  
  export default function App() {
    return (
      <>
        <Header />

      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/about' element={<About />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/jury' element={<Jury />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>

        <Footer />
        </>
    )
  }
  
  