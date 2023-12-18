import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './NossoEspaco.css'
import image1 from '../../assets/image-slide-1.jpg'
import image2 from '../../assets/image-slide-2.jpg'
import image3 from '../../assets/image-slide-3.jpg'

const NossoEspaco = () => {
  return (
    <div className="bg-black text-white flex items-center justify-center p-20 px-32">
      <Carousel
        centerMode
        emulateTouch
        infiniteLoop
        selectedItem={1}
        showThumbs={false}
      >
        <div>
          <img src={image1} alt="Slide 1" />
        </div>
        <div>
          <img src={image2} alt="Slide 2" />
        </div>
        <div>
          <img src={image3} alt="Slide 3" />
        </div>
      </Carousel>
    </div>
  )
}

export default NossoEspaco
