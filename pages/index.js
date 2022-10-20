import 'focus-visible/dist/focus-visible'

import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Contact from '../components/Contact'

import IRFoundation from '../components/Projects/IRFoundation'
import ApplePieDay from '../components/Projects/ApplePieDay'
import CompanyEvent from '../components/Projects/CompanyEvent'
import GreatIowaHomes from '../components/Projects/GreatIowaHomes'
import IRAgent from '../components/Projects/IRAgent'
import RingerGolf from '../components/Projects/RingerGolf'
import SchoolSupplyDrive from '../components/Projects/SchoolSupplyDrive'
import UnitedWay from '../components/Projects/UnitedWay'

import Projects from '../components/Projects'

export default function Home () {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  )
}


{/* <ApplePieDay />
<CompanyEvent />
<GreatIowaHomes />
<IRAgent />
<IRFoundation />
<RingerGolf />
<SchoolSupplyDrive />
<UnitedWay /> */}