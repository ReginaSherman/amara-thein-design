import React from 'react'
import Image from 'next/image'
import '@fontsource/roboto'

import bg from '../public/pexels-eva-bronzini-7641303.jpg'
import headshot from '../public/headshot1.png'

const About = () => {
  return (
    <div id='about' className='about'>
      <div className='about__container'>
        <div className='image-container'>
          <img src='/headshot1.png' alt='alt' className='headshot' />
        </div>
        <div className='about__txt'>
          <h2>About Me</h2>
          <h3>
            Hello, I’m Amara (uh-mar-ah)! I’ve been in the graphic design world
            for 7+ years, forging this career one Illustrator file at a time,
            while diving headfirst into a wide range of creative pursuits my
            whole life. I’ve treasured hobbies and job opportunities in theater,
            teaching, music, art, photography, videography – I love seeing
            something amazing come to life no matter which form it takes. I
            believe life has a lot of joy out there for us to find.
          </h3>
          <h3>
            Armed with a writing degree, I started down the publishing path, but
            I stumbled upon a love of graphic design and gave it my all out of
            college. Since then, I’ve broadened my sphere in the marketing world
            to merge both skill sets, and I’ve also stepped in and out of
            classrooms to explore my love of teaching young kiddos.
          </h3>
          <h3>
            Some fun things about me? I’m the newly-wedded-wife to Clinton, and
            we’re expecting our first baby in Fall 2022. I’m also a fur-mama to
            Percy the Cocker Spaniel and a “Super Auntie” to many littles in my
            life. When I’m not behind the computer, you’ll most likely find me
            planning DIY house projects, singing one-woman-broadway-shows in the
            car, or losing hours of time in a fantasy novel.
          </h3>
          <div className='social-links'>
              <a
                href='https://drive.google.com/file/d/1UtdiiL--NJNihYME0shF8gruIukssw2p/view?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                <img src='/resume.svg'/>
                <p>resume</p>
              </a>
            <a
              href='https://drive.google.com/file/d/1UtdiiL--NJNihYME0shF8gruIukssw2p/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/LinkedIN.svg' />
              <p>linkedin</p>

            </a>
            <a
              href='https://drive.google.com/file/d/1UtdiiL--NJNihYME0shF8gruIukssw2p/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/Instagram.svg' />
              <p>instagram</p>

            </a>
            <a
              href='https://drive.google.com/file/d/1UtdiiL--NJNihYME0shF8gruIukssw2p/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/Mail.svg' />
              <p>email</p>

            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
