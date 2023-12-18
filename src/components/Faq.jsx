import { useState } from 'react'
import arrow from '../assets/arrow.png'

const Faq = ({ question, answer }) => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <div
      className={`${
        isOpen ? 'bg-cyanPrimary/50' : 'bg-cyanPrimary/30'
      } flex flex-col px-[20px] py-[10px] rounded-[10px]`}
    >
      <div
        className="flex items-center gap-[10px] justify-between cursor-pointer"
        onClick={() => setisOpen((state) => !state)}
      >
        <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold">
          {question}
        </h3>
        <img
          src={arrow}
          alt="arrow"
          className={`${
            isOpen ? 'rotate-[270deg]' : 'rotate-180'
          } scale-75 transition-all`}
        />
      </div>
      {isOpen && (
        <div className="pr-[50px] py-[10px]">
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}

export default Faq
