import React from 'react'
import Image from 'next/image'

import '@fontsource/montserrat-alternates'

import bg from '../public/pexels-kseniya-lapteva-9176101.jpg'
import otter from '../public/Otter White (1).svg'

const Hero = () => {
  
  return (
    <div id='hero' className='hero'>
      <div className='hero__container'>
        <div
          className='hero__container-img'
          style={{
            backgroundImage: `url(${bg.src})`,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            backgroundBlendMode: 'multiply',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
            position: 'relative',
          }}
        ></div>
        <div className='hero__container-txt'>
            <Image className='otter' src={otter} width={200} height={200}/>
          <h1><strong className='strong'>AmaraUtter</strong>Design</h1>
        </div>
      </div>
    </div>
  )
}
export default Hero

{
}
