import CardEquipe from '../CardEquipe'
import Button from '../Button'
import pedro from '../../assets/pedro.webp'
import ana from '../../assets/ana.webp'
import joao from '../../assets/joao.webp'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const NossaEquipe = () => {
  return (
    <section
      className="flex flex-col mt-[120px] lg:flex-row gap-[30px] lg:gap-[20px] p-[10px] sm:px-[50px] xl:px-[100px] 2xl:px-[10px] 3xl:px-[100px] text-darkGray"
      id="nossa-equipe"
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        className="flex flex-col justify-end gap-[10px] lg:gap-[20px] text-center lg:text-start"
      >
        <h2 className="text-[16px] px-[10px] font-bold uppercase tracking-[3px] text-bluePrimary">
          Nossa Equipe
        </h2>
        <h3 className="leading-[1.1] px-[10px] text-[30px] lg:text-[24px] font-bold">
          Conheça Quem Está Por Trás da Nossa Excelência
        </h3>
        <p className="px-[10px]">
          Na TethCare, temos o privilégio de contar com uma equipe de
          profissionais apaixonados pela saúde bucal e pelo bem-estar dos nossos
          pacientes.
        </p>
        <p className="px-[10px]">
          Cada membro da nossa equipe é cuidadosamente selecionado por sua
          experiência, conhecimento e comprometimento em proporcionar um
          atendimento odontológico excepcional.
        </p>
        <Button className="bg-bluePrimary text-white self-center lg:self-start hidden lg:flex">
          Quero Agendar
        </Button>
      </motion.div>
      <motion.div
        className="flex flex-col lg:flex-row gap-[50px] lg:gap-[10px]"
        initial="hidden"
        whileInView="show"
      >
        <CardEquipe
          imgUrl={pedro}
          title="Dr. Pedro Alves"
          description="Nosso especialista em Endodontia, com especialização pela Associação Brasileira de Endodontia e vasta experiência em tratamentos de canal."
          animationVariant="Left"
          duration={0.2}
        />
        <CardEquipe
          imgUrl={ana}
          title="Dra. Ana Oliveira"
          description="Nossa diretora e líder em Implantodontia, com mais de 15 anos de experiência e Doutorado em Implantodontia."
          animationVariant="Right"
          duration={0.6}
        />
        <CardEquipe
          imgUrl={joao}
          title="Dr. João Silva"
          description="Conheça o Dr. João Silva, nosso especialista em Ortodontia, com mais de 10 anos de experiência e Mestrado em Ortodontia."
          animationVariant="Left"
          duration={1}
        />
      </motion.div>
      <div className="self-center lg:hidden">
        <Button className="bg-bluePrimary text-white flex lg:hidden">
          Quero Agendar
        </Button>
      </div>
    </section>
  )
}

export default NossaEquipe
