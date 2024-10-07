import { useState } from 'react'

import Hero from './components/hero/hero'
import About from './components/abouteMe/about'
import Nev from "./components/hero/nevigation"
import { MyProvider } from './context/context'
import Portfolio from './components/portfolio/portfolio'
import Certificates from './components/certificates/certificates'
import Skills from './components/skills.jsx/skills'
import Testimonials from './components/testimonials/testimonials'
import Education from './components/education/education'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
function App() {
  return (
<>
<div className='container bg-[rgb(0,3,25)] min-w-full h-full '>
  <div className=' wrapper  w-full h-full  mx-auto my-0 '>
  <MyProvider>
  <Nev />
  <Hero />
  <About /> 
  <Certificates />
  <Skills />
  <Education />
  <Portfolio />
  <Testimonials />
  <Contact />
  <Footer />
  </MyProvider>
  </div>
</div>
</>
  )
}

export default App
