import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
import { useEffect, useState, } from 'react';
import axios from 'axios'

import './style.scss'
// carousel css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from '../../Generic/Button';


const Carousel = () => {
  const [data, setData] = useState()
  useEffect(() => {
    axios.get('http://localhost:5000/api/banners').then((res) => (
      setData(res.data.banners)
    ))
  }, [])
  return (
    <div className='carousel'>
      <div className='container'>
        <div className='Wrapper'>


          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={80}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}

          >

            {
              data?.map((v) => (
                <SwiperSlide key={v._id} className='main'>
                  <div className='title'>
                    <span>Yangi</span>
                    <h2>{v.title}</h2>
                    <p>{v.desc}</p>
                    <Button wd={122} FS={17} br={15} hd={35}>Sotib olish</Button>
                  </div>
                  <div className='vidyo'>
                    {
                      v.source.includes('mp4') ?
                        <video width={'100%'} loop autoPlay muted>
                          <source src={`http://localhost:5000/images/${v.source}`}></source>
                        </video>
                        :
                        <img width={'100%'} src={`http://localhost:5000/images/${v.source}`} alt="" />
                    }
                  </div>
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Carousel