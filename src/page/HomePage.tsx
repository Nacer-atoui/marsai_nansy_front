import React from 'react'
import HeroSection from '../components/HeroSection'
import MarsSection from '../components/MarsSection'
import FestivalObjectif from '../components/FestivalObjectif'
import AboutEvent from '../components/AboutEvent'

export default function HomePage() {
  return (
    <>
        <HeroSection />
        <MarsSection />
        <FestivalObjectif/>
        <AboutEvent/>
    </>
  )
}
