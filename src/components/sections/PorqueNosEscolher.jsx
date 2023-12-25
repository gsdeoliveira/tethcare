import illustration from '../../assets/illustration.svg'
import experiencia from '../../assets/experiencia.webp'
import empatia from '../../assets/empatia.webp'
import personalizado from '../../assets/personalizado.webp'
import inovacao from '../../assets/inovacao.webp'
import Card from '../Card'

const PorqueNosEscolher = () => {
  return (
    <section className="relative z-20 pt-[120px] px-[10px] sm:px-[50px] xl:px-[100px] flex flex-col lg:flex-row gap-[30px]">
      <div className="lg:w-1/2 text-center lg:text-start">
        <h2 className="text-bluePrimary">Por que nos escolher?</h2>
        <p className="text-darkGray mt-[10px]">
          Com uma tradição de 10 anos dedicados à saúde bucal, nossa equipe
          altamente qualificada é apaixonada por oferecer um atendimento
          diferenciado, combinando experiência profissional e tecnologia
          avançada.
        </p>
        <img
          src={illustration}
          alt="ilustração odontologia"
          className="w-full"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center gap-[20px]">
        <Card
          image={experiencia}
          title="Experiência Profissional"
          description="Há 10 anos, a nossa clínica odontológica tem sido uma referência em
            cuidados dentários de qualidade."
        />
        <Card
          image={personalizado}
          title="Atendimento Personalizado"
          description="Na TethCare, entendemos que cada sorriso é único. Nossa abordagem é personalizada e individualizada."
        />
        <Card
          image={empatia}
          title="Atendimento Humanizado"
          description="Além de nossa experiência técnica, nos orgulhamos de proporcionar um atendimento verdadeiramente humano."
        />
        <Card
          image={inovacao}
          title="Inovação Contínua"
          description="Na TethCare, acreditamos na importância da inovação constante. Mantemos nossos padrões na vanguarda da odontologia, incorporando as últimas tecnologias e metodologias."
        />
      </div>
    </section>
  )
}

export default PorqueNosEscolher
