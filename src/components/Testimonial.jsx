import aspas from '../assets/aspas.webp'
import arrow from '../assets/arrow.webp'

const Testimonial = ({
  image,
  scrollPrev,
  scrollNext,
  nome,
  profissao,
  children,
}) => {
  return (
    <div className="relative bg-white p-[20px] mt-[30px] shrink-0 w-full flex flex-col lg:flex-row gap-[30px] rounded-[10px]">
      <div className="lg:w-1/2">
        <img
          src={image}
          alt=""
          className="w-full h-[500px] lg:h-full rounded-[10px] object-cover"
        />
      </div>
      <div className="lg:w-1/2 pt-[20px]">
        <div className="flex flex-col gap-[30px]">
          <img src={aspas} alt="" className="w-fit" />
          <div className="flex flex-col gap-[10px] px-[0px] lg:px-[50px]">
            {children}
          </div>
          <img src={aspas} alt="" className="w-fit rotate-180 self-end" />
        </div>
        <div className="mt-[30px]">
          <h3 className="text-bluePrimary text-[20px] font-bold">{nome}</h3>
          <p className="text-darkGray/90">{profissao}</p>
        </div>
        <div className="flex gap-[20px] absolute bottom-[20px] right-[20px]">
          <img
            src={arrow}
            alt="arrow"
            className="w-[40px] lg:w-[50px] object-cover"
            onClick={scrollPrev}
          />
          <img
            src={arrow}
            alt="arrow"
            className="w-[40px] lg:w-[50px] object-cover rotate-180"
            onClick={scrollNext}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
