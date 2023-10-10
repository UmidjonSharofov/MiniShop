import { Swiper, SwiperSlide } from 'swiper/react';
import { priceToString } from '../../../utils/variable'; 'swiper/modules';
import Button from '../Button'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom'


import './style.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';





const GENRcCarousel = ({ title }) => {

    const [data, setData] = useState()
    const url = title !== "Yangi mahsulotlar" ? `?category=${title}` : `/news`
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products${url}`).then((res) => {
            setData(res.data.products,);
        })
    }, [url])
    const navigaet = useNavigate()
    const mac = data?.slice(0, 4)
    const watch = data?.slice(4, 8)
    const link = title?.toLowerCase()



    return (
        <div className='Carosel'>
                <div className='NewTitle'>
                    <h1>{title}</h1>
                </div>

                <div className='Wrapper'>
                    {

                        link !== 'yangi mahsulotlar' ? <Link className='Link' to={`/product/${link}`}>Barchasini korish...</Link> : null
                    }
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        className='Swiper'
                    >
                        <SwiperSlide>

                            {
                                mac?.map(v => (
                                    <div key={v._id} className='orde_main' onClick={() => navigaet(`/product/${v._id}`)} >
                                        <div className='min'>
                                            <div className='Img'>
                                                <img src={`http://localhost:5000/images/${v.images[0]}`} alt={v.title} />
                                            </div>
                                            <div className='Title'>
                                                <h4>{v.title}</h4>
                                            </div>
                                            <div>
                                                <p>{`${priceToString(v.price)} so'm dan`}</p>
                                            </div>
                                            <div className='Button'>
                                                <Button onClick={() => navigaet(`/product/${v._id}`)} wd={200} hd={40}>Xarid qilish</Button>
                                            </div>
                                        </div>
                                    </div>

                                ))


                            }

                        </SwiperSlide>
                        <SwiperSlide>
                            {
                                watch?.map(v => (
                                    <div key={v._id} className='main' onClick={() => navigaet(`/product/${v._id}`)}>
                                        <div className='min'>
                                            <div className='Img'>
                                                <img src={`http://localhost:5000/images/${v.images[0]}`} alt={v.title} />
                                            </div>
                                            <div className='Title'>
                                                <h4>{v.title}</h4>
                                            </div>
                                            <div>
                                                <p>{`${priceToString(v.price)} so'm dan`}</p>
                                            </div>
                                            <div className='Button'>
                                                <Button onClick={() => navigaet(`/product/${v._id}`)} wd={200} hd={40}>Xarid qilish</Button>

                                            </div>
                                        </div>
                                    </div>

                                ))


                            }
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
    )
}

export default GENRcCarousel