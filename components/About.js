import React from 'react'
import Image from 'next/image'
import '@fontsource/roboto'

import bg from '../public/pexels-eva-bronzini-7641303.jpg'
import headshot from '../public/headshot1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about__container'>
        <div className='headshot-container'>
          <Image className='image' src={headshot} layout='fill'  />
        </div>
        <div className='about__container-txt'>
          <h2>About</h2>
        </div>
      </div>
      <div
        className='about__container-bg'
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
    </div>
  )
}

export default About
