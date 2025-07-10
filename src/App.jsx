import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from './components/ui/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import CompetitiveProgramming from './components/sections/CompetitiveProgramming'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'
import Footer from './components/ui/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true) // Default to dark mode

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      // Default to dark mode instead of system preference
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    // Update class and localStorage when darkMode changes
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'dark bg-gray-900' : 'bg-background'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CompetitiveProgramming />
        <Achievements />
        <Contact />
      </motion.main>
      <Footer />
    </div>
  )
}

export default App
