import React from 'react'
import "./App.css" 
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Features from './components/Features/Features.jsx'
import Advantages from './components/Advantages/Advantages.jsx'
import Testimonal from './components/Testimonal/Testimonal.jsx'
import Faq from './components/FAQ/Faq.jsx'
import Footer from './components/Footer/Footer.jsx'
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Advantages/>
      <Testimonal/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default App