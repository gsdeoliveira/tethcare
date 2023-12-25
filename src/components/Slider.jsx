import { Carousel } from 'react-carousel-minimal'
import image1 from '../assets/image-slide-1.webp'
import image2 from '../assets/image-slide-2.webp'
import image3 from '../assets/image-slide-3.webp'

function Slider() {
  const data = [
    {
      image: image1,
    },
    {
      image: image2,
    },
    {
      image: image3,
    },
  ]

  return (
    <div className="App">
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            padding: '0 20px',
          }}
        >
          <Carousel
            data={data}
            time={3000}
            width="850px"
            height="500px"
            radius="10px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="transparent"
            slideImageFit="cover"
            style={{
              textAlign: 'center',
              maxWidth: '850px',
              maxHeight: '500px',
              margin: '40px auto',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Slider
