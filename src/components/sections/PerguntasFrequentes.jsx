import Faq from '../Faq'
import { motion } from 'framer-motion'

const PerguntasFrequentes = () => {
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 5, // Ajuste este valor para controlar o intervalo entre os cards
      },
    },
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: {
      delay: 2,
      duration: 2,
    },
  }
  return (
    <section
      className="flex flex-col gap-[30px] sm:gap-[50px] mt-[150px] p-[10px] sm:px-[50px] xl:px-[120px]"
      id="perguntas-frequentes"
    >
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-bluePrimary text-center px-[10px]">
          Perguntas Frequentes
        </h2>
        <p className="text-darkGray text-center px-[10px]">
          Aqui estão algumas das nossas perguntas frequentes. Se você tiver
          outras perguntas, sinta-se à vontade para nos enviar um e-mail.
        </p>
      </div>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="animate"
        className="flex flex-col gap-[10px] text-darkGray"
      >
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible">
          <Faq
            question="Como posso agendar uma consulta?"
            answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[10px] text-darkGray"
        >
          <Faq
            question="Quanto tempo dura um tratamento ortodôntico?"
            answer="A duração do tratamento ortodôntico varia, mas em média, pode levar de 12 a 24 meses. O tempo exato depende do caso individual de cada paciente."
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[10px] text-darkGray"
        >
          <Faq
            question="É possível realizar procedimentos de emergência sem agendamento?"
            answer="Sim, em casos de emergência odontológica, encorajamos os pacientes a nos ligar imediatamente. Faremos o possível para acomodar situações urgentes."
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[10px] text-darkGray"
        >
          <Faq
            question="Como posso cuidar dos meus dentes entre as consultas?"
            answer="Além das consultas regulares, incentivamos práticas diárias de higiene bucal, como escovação adequada, uso de fio dental e enxaguante bucal. Nossa equipe oferecerá orientações personalizadas durante as consultas."
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[10px] text-darkGray"
        >
          <Faq
            question="Qual é a política de cancelamento de consultas?"
            answer="Pedimos que os pacientes nos avisem com pelo menos 24 horas de antecedência em caso de cancelamento. Para cancelamentos tardios ou faltas, pode ser aplicada uma taxa."
          />
        </motion.div>
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col gap-[10px] text-darkGray"
        >
          <Faq
            question="Os tratamentos odontológicos são dolorosos?"
            answer="Utilizamos abordagens modernas e técnicas avançadas para minimizar o desconforto. A maioria dos procedimentos é realizada com anestesia local para garantir uma experiência tranquila."
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PerguntasFrequentes
