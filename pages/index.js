import 'focus-visible/dist/focus-visible'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Resume from '../components/Resume'
import Tech from '../components/Tech'

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <Projects />
    </>
  )
}
