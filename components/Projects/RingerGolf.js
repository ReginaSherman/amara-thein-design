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

const RingerGolf = () => {
  return (
    <div id='ringer-golf' className='ringer-golf'>
      <div className='ringer-golf__container container'>
        <div className='ringer-golf__txt'>
        <h2 className='green'>Ringer Golf</h2>
        <h3 className='green'>
          Lets build some happy little clouds up here. Little trees and bushes
          grow however makes them happy. Just a happy little shadow that lives
          in there.
        </h3>
        </div>
        <div className='ringer-golf__samples'>
          <div className='img-container'>
            <Image />
            <Image />
            <Image />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RingerGolf

{/* <div className='swiper-wrapper'>
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
</div> */}
