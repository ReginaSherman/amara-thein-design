import React from 'react'
import '@fontsource/roboto'

import bg from '../public/pexels-eva-bronzini-7641303.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about__container'>
        <div
          className='about__container-img'
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundColor: 'rgba(250, 249, 246, 0.65)',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
            position: 'relative',
            opacity: '0.3'
          }}
        ></div>
        <div className='about__txt'>
          <h2>About Me</h2>
        </div>
      </div>
    </div>
  )
}

export default About
