import { useState } from 'react'
import { motion } from 'framer-motion'
import arrow from '../assets/arrow.webp'
import { fadeIn } from '../utils/motion'

const Faq = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={fadeIn('up', 'tween', 0.2, 0.5)}
      initial="hidden"
      whileInView="show"
      className={`${
        isOpen ? 'bg-bluePrimary/50' : 'bg-bluePrimary/30'
      } flex flex-col px-[20px] py-[10px] rounded-[10px]`}
    >
      <motion.div
        className="flex items-center gap-[10px] justify-between cursor-pointer"
        onClick={() => setIsOpen((state) => !state)}
      >
        <motion.h3
          variants={fadeIn('up', 'tween', 0.2 * delay, 1)}
          className="text-[16px] sm:text-[18px] md:text-[20px] font-bold"
        >
          {question}
        </motion.h3>
        <motion.img
          src={arrow}
          width={40}
          height={40}
          alt="arrow"
          className={`${
            isOpen ? 'rotate-[270deg]' : 'rotate-180'
          } scale-75 transition-all`}
        />
      </motion.div>
      {isOpen && (
        <motion.div
          variants={fadeIn('down', 'tween', 0, 0.3)}
          initial="hidden"
          animate="show"
          className="pr-[50px] py-[10px]"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </motion.div>
  )
}

export default Faq
