import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { priceToString } from '../../utils/variable';
import Button from '../Generic/Button';

import './style.scss'

const ProductCarusel = ({ type }) => {
    const navigaet = useNavigate()
    const [carousel, setCarousel] = useState()

    useEffect(() => {

        axios.get(`http://localhost:5000/api/products?category=${type}`).then((res) => {

            setCarousel(res.data.products);

        })
    }, [type])
    return (
        <div className='container'>
            <div className="Carousel">
                <div className='Wrapper'>
                    <div className='NewTitle'>
                        <h3>O'xshash mahsulotlar</h3>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={4}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className='Swiper'
                    >

                        {
                            carousel?.map(v => (
                                <SwiperSlide className='Slide' key={v._id} >
                                    <div className='main' >
                                        <div className='min'>
                                            <div className='Img'>
                                                <img src={`http://localhost:5000/images/${v.images[0]}`} alt={v.title} />
                                            </div>
                                            <div className='Title'>
                                                <h4>{v.title}</h4>
                                            </div>
                                            <div className='min_title'>
                                                <p>{`${priceToString(v.price)} so'm dan`}</p>
                                            </div>
                                            <div className='Button'>
                                                <Button onClick={() => navigaet(`/product/${v._id}`)} wd={200} hd={40}>Xarid qilish</Button>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                            ))


                        }

                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default ProductCarusel