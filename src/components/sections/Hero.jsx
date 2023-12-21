import logo from '../../assets/Logo.png'
import hero from '../../assets/hero-person.png'
import Button from '../Button'

const Hero = () => {
  return (
    <div className="relative z-20 hero-bg w-full flex flex-col lg:flex-row px-[10px] sm:px-[50px]">
      <div className="w-[2200px] h-[100px] blur-hero absolute z-20 -bottom-[35px] -ml-[100px]"></div>
      <div className="lg:w-1/2 text-center lg:text-start pl-[10px] pt-[10px] sm:pl-[50px] sm:pt-[50px] xl:p-[50px] 2xl:p-[100px] flex flex-col gap-[20px] text-white">
        <img
          src={logo}
          alt="tethcare logo"
          className="w-[180px] self-center lg:self-start"
        />
        <h1 className="text-[32px] xl:text-[40px] px-[10px] font-bold leading-tight">
          Sorria com Confiança: Cuidado Odontológico de Qualidade
        </h1>
        <p className="px-[10px]">
          No TethCare, nossa equipe de especialistas em odontologia está
          comprometida em proporcionar um atendimento odontológico excepcional.
        </p>
        <Button className="relative z-30 self-center lg:self-start hero-button-gradient w-1/2">
          Agendar Consulta
        </Button>
      </div>
      <div className="lg:w-1/2">
        <img src={hero} alt="Doutora" className="w-full" />
      </div>
    </div>
  )
}

export default Hero
