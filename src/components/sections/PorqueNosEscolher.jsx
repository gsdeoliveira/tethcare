import illustration from '../../assets/illustration.svg'
import experiencia from '../../assets/experiencia.webp'
import empatia from '../../assets/empatia.webp'
import personalizado from '../../assets/personalizado.webp'
import inovacao from '../../assets/inovacao.webp'
import Card from '../Card'
import { motion } from 'framer-motion'
import { slideIn } from '../../utils/motion'

const PorqueNosEscolher = () => {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.5, // Ajuste este valor para controlar o intervalo entre os cards
      },
    },
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 1, ease: 'easeInOut' },
  }

  return (
    <section className="relative z-20 pt-[120px] px-[10px] sm:px-[50px] xl:px-[100px] flex flex-col lg:flex-row gap-[30px]">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 0.3)} // Use a variante de animação da esquerda
        initial="hidden"
        whileInView="show"
        className="lg:w-1/2 text-center lg:text-start"
      >
        <h2 className="text-bluePrimary">Por que nos escolher?</h2>
        <p className="text-darkGray mt-[10px]">
          Com uma tradição de 10 anos dedicados à saúde bucal, nossa equipe
          altamente qualificada é apaixonada por oferecer um atendimento
          diferenciado, combinando experiência profissional e tecnologia
          avançada.
        </p>
        <img
          src={illustration}
          width={413}
          height={276}
          alt="ilustração odontologia"
          className="w-full"
        />
      </motion.div>
      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-[20px]"
      >
        <motion.div variants={fadeInRight}>
          <Card
            image={experiencia}
            title="Experiência Profissional"
            description="Há 10 anos, a nossa clínica odontológica tem sido uma referência em cuidados dentários de qualidade."
          />
        </motion.div>
        <motion.div variants={fadeInRight}>
          <Card
            image={personalizado}
            title="Atendimento Personalizado"
            description="Na TethCare, entendemos que cada sorriso é único. Nossa abordagem é personalizada e individualizada."
          />
        </motion.div>
        <motion.div variants={fadeInRight}>
          <Card
            image={empatia}
            title="Atendimento Humanizado"
            description="Além de nossa experiência técnica, nos orgulhamos de proporcionar um atendimento verdadeiramente humano."
          />
        </motion.div>
        <motion.div variants={fadeInRight}>
          <Card
            image={inovacao}
            title="Inovação Contínua"
            description="Na TethCare, acreditamos na importância da inovação constante. Mantemos nossos padrões na vanguarda da odontologia, incorporando as últimas tecnologias e metodologias."
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PorqueNosEscolher
