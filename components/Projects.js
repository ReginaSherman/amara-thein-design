import { Swiper, SwiperSlide} from 'swiper/react'
import { EffectFade, Parallax, Mousewheel, Keyboard, Pagination, Autoplay, Navigation  } from 'swiper'
import { projects } from '../public/constants/projects'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
      <div className='projects__container'>
        {/* <div className='projects__txt'>
          <h2>Projects</h2>
        </div> */}
        <div className='swiper-wrapper'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[EffectFade, Mousewheel, Autoplay, Navigation]}
            effect="fade"
            navigation={true}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            <SwiperSlide>
              <div className='slide-txt'>
                <h3>
                  <a href='#'>Cards</a>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-txt'>
                <h3>
                  <a href='#'>Real Estate Marketing</a>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-txt'>
                <h3>
                  <a href='#'>Print Ads</a>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-txt'>
                <h3>
                  <a href='#'>Logos & Branding</a>
                </h3>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='slide-txt'>
                <h3>
                  <a href='#'>Signs & Posters</a>
                </h3>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Projects
