import Faq from '../Faq'

const PerguntasFrequentes = () => {
  return (
    <section className="flex flex-col gap-[30px] sm:gap-[50px] mt-[150px] p-[10px] sm:px-[50px] xl:px-[120px]">
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-bluePrimary text-center px-[10px]">
          Perguntas Frequentes
        </h2>
        <p className="text-darkGray text-center px-[10px]">
          Aqui estão algumas das nossas perguntas frequentes. Se você tiver
          outras perguntas, sinta-se à vontade para nos enviar um e-mail.
        </p>
      </div>
      <div className="flex flex-col gap-[10px] text-darkGray">
        <Faq
          question="Como posso agendar uma consulta?"
          answer="Agendar uma consulta é simples. Você pode ligar para nosso escritório durante o horário comercial ou entrar em contato pelo whatsapp."
        />
        <Faq
          question="Quanto tempo dura um tratamento ortodôntico?"
          answer="A duração do tratamento ortodôntico varia, mas em média, pode levar de 12 a 24 meses. O tempo exato depende do caso individual de cada paciente."
        />
        <Faq
          question="É possível realizar procedimentos de emergência sem agendamento?"
          answer="Sim, em casos de emergência odontológica, encorajamos os pacientes a nos ligar imediatamente. Faremos o possível para acomodar situações urgentes."
        />
        <Faq
          question="Como posso cuidar dos meus dentes entre as consultas?"
          answer="Além das consultas regulares, incentivamos práticas diárias de higiene bucal, como escovação adequada, uso de fio dental e enxaguante bucal. Nossa equipe oferecerá orientações personalizadas durante as consultas."
        />
        <Faq
          question="Qual é a política de cancelamento de consultas?"
          answer="Pedimos que os pacientes nos avisem com pelo menos 24 horas de antecedência em caso de cancelamento. Para cancelamentos tardios ou faltas, pode ser aplicada uma taxa."
        />
        <Faq
          question="Os tratamentos odontológicos são dolorosos?"
          answer="Utilizamos abordagens modernas e técnicas avançadas para minimizar o desconforto. A maioria dos procedimentos é realizada com anestesia local para garantir uma experiência tranquila."
        />
      </div>
    </section>
  )
}

export default PerguntasFrequentes
