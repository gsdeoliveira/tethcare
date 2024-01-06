import { useState } from 'react'
import arrow from '../assets/arrow.webp'
import { motion } from 'framer-motion'

const Faq = ({ question, answer }) => {
  const [isOpen, setisOpen] = useState(false)

  const variants = {
    initial: { height: 0, y: '-100%' },
    animate: { height: '100%', y: 0 },
    transition: { duration: 5, ease: 'easeInOut' },
  }

  return (
    <div
      className={`${
        isOpen ? 'bg-bluePrimary/50' : 'bg-bluePrimary/30'
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
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          className="pr-[50px] py-[10px]"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  )
}

export default Faq
