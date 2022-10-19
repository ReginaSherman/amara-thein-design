import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'
import Link from 'next/link'
import {
  EffectFade,
  Parallax,
  Mousewheel,
  Keyboard,
  Pagination,
  Autoplay,
  Navigation
} from 'swiper'
import { projects } from '../public/constants/projects'
import ProjectCard from './ProjectCard'

import project1 from '../public/iowahomes.png'
import project2 from '../public/IR Foundation_Social 12.19.jpg'
import project3 from '../public/applepie.png'
import project4 from '../public/golf.png'
import project5 from '../public/makingitrain.png'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className='projects__container'>
        {/* <div className='projects__container-txt'>
            <h2>Projects</h2>
          </div> */}
        <div className='swiper-wrapper'>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <Link
                href='https://drive.google.com/file/d/1_wl5smxkhnaifvKnQEVbQJt4oZANdczi/view?usp=sharing'
                target='_blank'
              >
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link-item'
                >
                  <Image
                    className='image'
                    src={project1}
                    layout='fill'
                    objectFit='cover'
                  />
                </a>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='image'
                src={project2}
                layout='fill'
                objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='image'
                src={project3}
                layout='fill'
                objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='image'
                src={project4}
                layout='fill'
                objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                className='image'
                src={project5}
                layout='fill'
                objectFit='cover'
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Projects
