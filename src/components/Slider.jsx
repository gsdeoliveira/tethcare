import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

import image1 from '../assets/image-slide-1.webp'
import image2 from '../assets/image-slide-2.webp'
import image3 from '../assets/image-slide-3.webp'
import arrow from '../assets/arrow.svg'

function Slider() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img
            src={image1}
            alt="imagem consultório"
            className="object-cover rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="imagem consultório"
            className="object-cover rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt="imagem consultório"
            className="object-cover rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image1}
            alt="imagem consultório"
            className="object-cover rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="imagem consultório"
            className="object-cover rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt="imagem consultório"
            className="object-cover rounded-[10px]"
          />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <img src={arrow} alt="" className="w-[16px] rotate-180" />
          </div>
          <div className="swiper-button-next slider-arrow">
            <img src={arrow} alt="" className="w-[16px]" />
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Slider
