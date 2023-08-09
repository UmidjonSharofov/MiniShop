import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './style.scss'

const Carousel = () => {
  return (
    <div className='carousel'>
      <div className='container'>
        <div className='wrapper'>

          <Swiper
            spaceBetween={50}
            slidesPerView={1}
          >
            <SwiperSlide style={{width:'100%'}}>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Carousel