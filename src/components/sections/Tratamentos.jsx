import React from 'react'
import clareamento from '../../assets/clareamento-dental.webp'
import implante from '../../assets/implantar.webp'
import carie from '../../assets/carie.webp'
import extracao from '../../assets/extracao-de-dente.webp'
import suspensorio from '../../assets/suspensorios.webp'
import placa from '../../assets/placa.webp'
import CardTratamento from '../CardTratamento'
import Button from '../Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../../utils/motion'

const Tratamentos = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: {
      delay: 2,
    },
  }

  return (
    <section
      className="w-full mt-[120px] pb-[150px] relative p-[10px] sm:px-[50px] xl:px-[100px]"
      id="tratamentos"
    >
      <h2 className="text-center text-bluePrimary px-[10px]">
        Nossos Tratamentos
      </h2>
      <p className="text-darkGray text-center mt-[10px] px-[10px]">
        Na Nossa Clínica, Oferecemos uma Gama Completa de Tratamentos
        Odontológicos, Atendendo a Todas as Suas Necessidades.
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10px] mt-[50px] place-items-center gap-[20px]">
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <CardTratamento
              icone={clareamento}
              title="Clareamento Dental"
              description="Ilumine Seu Sorriso com Nosso Tratamento de Clareamento Dental Avançado."
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <CardTratamento
              icone={implante}
              title="Implantes Dentários"
              description="Recupere Seus Dentes com Nossos Serviços de Implantes Dentários de Alta Qualidade."
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <CardTratamento
              icone={carie}
              title="Tratamento de Cárie"
              description="Diga Adeus às Cáries com Nosso Tratamento Inovador e Minimamente Invasivo."
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <CardTratamento
              icone={extracao}
              title="Extração Dentária"
              description="Tratamento Cuidadoso para uma Extração Sem Preocupações."
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <CardTratamento
              icone={suspensorio}
              title="Suspensórios"
              description="Descubra a Transformação do Seu Sorriso com Nossos Serviços de Suspensórios Dentários."
            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 0.5)}
            initial="hidden"
            whileInView="show"
          >
            <CardTratamento
              icone={placa}
              title="Placas Odontológicas"
              description="Experimente o Alívio e a Segurança com Nossas Placas Odontológicas Sob Medida."
            />
          </motion.div>
        </div>
        <motion.div variants={fadeInUp}>
          <Button className="self-center w-[300px] lg:w-[350px] my-10 bg-bluePrimary">
            Quero Agendar
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Tratamentos
