import illustration from '../../assets/illustration.svg'
import experiencia from '../../assets/experiencia.png'

const PorqueNosEscolher = () => {
  return (
    <section className="relative z-20 pt-[120px] px-[10px] sm:px-[50px] xl:px-[100px] flex">
      <div className="w-1/2">
        <h2 className="text-bluePrimary">Por que nos escolher?</h2>
        <p className="text-darkGray mt-[10px]">
          Com uma tradição de 10 anos dedicados à saúde bucal, nossa equipe
          altamente qualificada é apaixonada por oferecer um atendimento
          diferenciado, combinando experiência profissional e tecnologia
          avançada.
        </p>
        <img src={illustration} alt="" />
      </div>
      <div className="grid grid-cols-2 gap-[20px]">
        <div className="bg-bluePrimary rounded-[10px] p-[20px] max-w-[370px] max-h-[220px] flex flex-col gap-[5px]">
          <img src={experiencia} alt="" className="w-fit" />
          <h3 className="text-white text-[18px] font-bold">
            Experiência Profissional
          </h3>
          <p className="text-white">
            Há 10 anos, a nossa clínica odontológica tem sido uma referência em
            cuidados dentários de qualidade.
          </p>
        </div>
        <div className="bg-bluePrimary rounded-[10px] p-[20px] max-w-[370px] max-h-[220px] flex flex-col gap-[5px]">
          <img src={experiencia} alt="" className="w-fit" />
          <h3 className="text-white text-[18px] font-bold">
            Experiência Profissional
          </h3>
          <p className="text-white">
            Há 10 anos, a nossa clínica odontológica tem sido uma referência em
            cuidados dentários de qualidade.
          </p>
        </div>
        <div className="bg-bluePrimary rounded-[10px] p-[20px] max-w-[370px] max-h-[220px] flex flex-col gap-[5px]">
          <img src={experiencia} alt="" className="w-fit" />
          <h3 className="text-white text-[18px] font-bold">
            Experiência Profissional
          </h3>
          <p className="text-white">
            Há 10 anos, a nossa clínica odontológica tem sido uma referência em
            cuidados dentários de qualidade.
          </p>
        </div>
        <div className="bg-bluePrimary rounded-[10px] p-[20px] max-w-[370px] max-h-[220px] flex flex-col gap-[5px]">
          <img src={experiencia} alt="" className="w-fit" />
          <h3 className="text-white text-[18px] font-bold">
            Experiência Profissional
          </h3>
          <p className="text-white">
            Há 10 anos, a nossa clínica odontológica tem sido uma referência em
            cuidados dentários de qualidade.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PorqueNosEscolher
