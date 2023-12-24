import feedback1 from '../../assets/feedback1.jpg'
import feedback2 from '../../assets/feedback2.jpg'
import feedback3 from '../../assets/feedback3.jpg'
import feedback4 from '../../assets/feedback4.jpg'
import { useRef, useState } from 'react'
import Testimonial from '../Testimonial'

const Feedbacks = () => {
  const [scrollPosition, setScrollPosition] = useState(1)
  const scrollRef = useRef(null)

  const scrollNext = () => {
    if (scrollRef.current) {
      if (scrollPosition <= 3) {
        scrollRef.current.scrollLeft =
          scrollRef.current.clientWidth * scrollPosition
        setScrollPosition((state) => state + 1)
      } else {
        setScrollPosition(1)
        scrollRef.current.scrollLeft = scrollRef.current.clientWidth * 0
      }
    }
  }

  const scrollPrev = () => {
    if (scrollRef.current) {
      if (scrollPosition > 1) {
        scrollRef.current.scrollLeft =
          scrollRef.current.clientWidth * (scrollPosition - 2)
        setScrollPosition((state) => state - 1)
      } else {
        scrollRef.current.scrollLeft = scrollRef.current.clientWidth * 3
        setScrollPosition(4)
      }
    }
  }

  return (
    <section className="p-[10px] sm:px-[50px] xl:px-[100px] mt-[120px]">
      <h2 className="text-center text-bluePrimary px-[10px]">Feedbacks</h2>
      <p className="text-darkGray text-center px-[10px] mt-[10px]">
        Veja o que os nossos clientes dizem sobre nós
      </p>
      <div
        className="flex w-full scroll-smooth overflow-auto touch-pan-y hide-scrollbar"
        ref={scrollRef}
        draggable={false}
      >
        <Testimonial
          image={feedback1}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        />
        <Testimonial
          image={feedback2}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        />
        <Testimonial
          image={feedback3}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        />
        <Testimonial
          image={feedback4}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        />
      </div>
    </section>
  )
}

export default Feedbacks
