import { Swiper, SwiperSlide } from 'swiper/react'
import {
  EffectFade,
  Parallax,
  Mousewheel,
  Keyboard,
  Pagination,
  Autoplay,
  Navigation
} from 'swiper'
import { irFoundation } from '../../public/constants/ir-foundation'
import Card from '../Card'

const IRAgent = () => {
  return (
    <div id='ir-agent' className='ir-agent'>
      <div className='ir-agent__container container'>
        <h2 className='green'>IRAgent</h2>
        <h3 className='green'>
          Lets build some happy little clouds up here. Little trees and bushes
          grow however makes them happy. Just a happy little shadow that lives
          in there.
        </h3>
        <div className='swiper-wrapper'>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            onSwiper={swiper => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            {irFoundation.map(piece => {
              return (
                <SwiperSlide>
                  <Card piece={piece} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default IRAgent
