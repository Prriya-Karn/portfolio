import Footer from "./Component/Footer"
import Navbar from "./Component/Navbar"
import '../src/index.css'


import ContactForm from "./pages/ContactForm"

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import About from "./pages/About";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";



const App = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <ContactForm />

      <Footer />
    </>

  )
}

export default App