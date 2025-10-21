import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scroller } from 'react-scroll'

import Hero from '../Hero/Hero'
import About from '../About/About'
import Work from '../Work/Work'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

function Main() {
  const location = useLocation()

  // Scroll to section when route changes
useEffect(() => {
    const section = location.pathname.replace('/', ''); 

    if (section) {
      requestAnimationFrame(() => {
        scroller.scrollTo(section, {
          duration: 800,
          smooth: 'easeInOutQuart',
          offset: -50,
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);



  return (
    <div>
      <section id="hero" name="hero">
        <Hero />
      </section>

      <section id="about" name="about">
        <About />
      </section>

      <section id="work" name="work">
        <Work />
      </section>

      <section id="contact" name="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  )
}

export default Main
