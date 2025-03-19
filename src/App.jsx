import React, { useEffect } from 'react'
import Header from './Components/Header/header'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Service from './Components/Serviice/service'
import Contact from './Components/Contact/contact'
import Footer from './Components/Footer/footer'
import './App.css'

function App() {
  useEffect( () => {
    const anchors = document.querySelectorAll('a[href^="#"]')
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })
  }, [])
  
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Service/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
