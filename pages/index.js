import dynamic from 'next/dynamic'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

// Dynamically import Hero with SSR disabled
const Hero = dynamic(() => import('./components/Hero'), { ssr: false })

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}
