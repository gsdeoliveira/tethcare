import hero from '../../assets/hero-person.webp'
import { fadeIn } from '../../utils/motion'
import Button from '../Button'
import Navbar from '../Navbar'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero-bg">
      <Navbar />
      <div className="relative z-20 w-full flex flex-col lg:flex-row pt-[100px] px-[10px] sm:px-[50px]">
        <div className="w-[2200px] h-[100px] blur-hero absolute z-20 -bottom-[60px] -ml-[100px]"></div>
        <motion.div
          variants={fadeIn('right', 'tween', 0.2, 0.5)} // Use a variante de animação da esquerda
          initial="hidden"
          animate="show"
          className="lg:w-1/2 text-center lg:text-start pt-[30px] flex flex-col gap-[20px] text-white"
        >
          <h1 className="text-[32px] xl:text-[40px] px-[10px] lg:px-0 font-bold leading-tight">
            Sorria com <span className="text-bluePrimary">Confiança</span>
            <br />
            Cuidado Odontológico de Qualidade
          </h1>
          <p className="px-[10px] lg:px-0">
            No TethCare, nossa equipe de especialistas em odontologia está
            comprometida em proporcionar um atendimento odontológico
            excepcional.
          </p>
          <Button className="relative z-30 self-center lg:self-start bg-bluePrimary w-1/2">
            Agendar Consulta
          </Button>
        </motion.div>
        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 0.5)} // Use a variante de animação da esquerda
          initial="hidden"
          animate="show"
          className="lg:w-1/2 lg:flex flex-col justify-end"
        >
          <img
            src={hero}
            alt="Doutora"
            width={963}
            height={940}
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
