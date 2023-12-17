import logo from '../../assets/Logo.png'
import hero from '../../assets/hero-person.png'
import sorriso from '../../assets/sorriso.png'
import certificado from '../../assets/certificado.png'
import experiencia from '../../assets/experiencia.png'
import Button from '../Button'
import CardHero from '../CardHero'

const Hero = () => {
  return (
    <div className="relative z-20 hero-bg w-full flex flex-col lg:flex-row p-[10px]">
      <div className="w-[2200px] h-[100px] blur-hero absolute z-10 -bottom-[50px] -ml-[100px]"></div>
      <div className="lg:w-1/2 text-center lg:text-start xl:p-[50px] 2xl:p-[100px] flex flex-col gap-[20px] text-white">
        <img
          src={logo}
          alt="tethcare logo"
          className="w-[180px] self-center lg:self-start"
        />
        <h1 className="text-[28px] sm:text-[32px] lg:text-[40px] font-bold leading-tight">
          Sorria com Confiança: Cuidado Odontológico de Qualidade
        </h1>
        <p>
          No TethCare, nossa equipe de especialistas em odontologia está
          comprometida em proporcionar um atendimento odontológico excepcional.
        </p>
        <Button className="self-center lg:self-start hero-button-gradient w-1/2">
          Agendar Consulta
        </Button>
        <div className="flex justify-evenly p-[5px] gap-[3px] sm:gap-[10px] w-full sm:p-[10px] lg:w-fit absolute z-50 left-1/2 lg:-bottom-0 bottom-0 -translate-x-1/2 translate-y-1/2">
          <CardHero
            icon={sorriso}
            number="1000"
            description="Sorrisos Transformados"
            altText="Sorriso"
          />
          <CardHero
            icon={certificado}
            number="10"
            description="Certificados em Odontologia"
            altText="Certificado"
          />
          <CardHero
            icon={experiencia}
            number="20"
            description="Anos de Experiência"
            altText="Experiência"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <img src={hero} alt="Doutora" className="w-full" />
      </div>
    </div>
  )
}

export default Hero
