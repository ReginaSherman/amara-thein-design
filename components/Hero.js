import React from 'react'
import Image from 'next/image'

import '@fontsource/montserrat-alternates'

import bg from '../public/at-designs-hero.jpg'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
      <div className='hero__container'>
        <div
          className='hero__container-img'
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
            position: 'relative',
          }}
        ></div>
        <h1 className='hero__txt'>
          <strong className='strong'>amarathein</strong>designs
        </h1>
      </div>
    </div>
  )
}
export default Hero

{
}
