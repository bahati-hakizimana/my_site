import { useState, useEffect } from 'react'
import Aos from 'aos'

import './App.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Hero from './components/ui/Hero';
import Services from './components/ui/Services';
import Portifolio from './components/ui/Portifolio';
import Contact from './components/ui/Contact';

function App() {
  useEffect(() =>{
    Aos.init();
  })


  return (
    <>
     <Header />
     <main>
      <Hero />
      <Services />
      <Portifolio />
      <Contact />
     </main>
     <Footer />
    </>
  )
}

export default App
