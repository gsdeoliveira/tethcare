import image1 from '../assets/image-slide-1.webp'
import image2 from '../assets/image-slide-2.webp'
import image3 from '../assets/image-slide-3.webp'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

// import required modules
import { Navigation } from 'swiper/modules'

export default function Slider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src={image1}
            alt="imagem do consultório"
            width={897}
            height={500}
            className="w-full rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image2}
            alt="imagem do consultório"
            width={897}
            height={500}
            className="w-full rounded-[10px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={image3}
            alt="imagem do consultório"
            width={897}
            height={500}
            className="w-full rounded-[10px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
