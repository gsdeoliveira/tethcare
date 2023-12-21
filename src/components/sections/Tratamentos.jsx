import clareamento from '../../assets/clareamento-dental.png'
import implante from '../../assets/implantar.png'
import carie from '../../assets/carie.png'
import extracao from '../../assets/extracao-de-dente.png'
import suspensorio from '../../assets/suspensorios.png'
import placa from '../../assets/placa.png'
import CardTratamento from '../CardTratamento'
import Button from '../Button'

const Tratamentos = () => {
  return (
    <div className="w-full pt-[300px] pb-[150px] bg-espaco relative bottom-[150px] p-[10px] sm:px-[50px] xl:px-[100px]">
      <h2 className="text-center text-white px-[10px]">Nossos Tratamentos</h2>
      <p className="text-white text-center mt-[10px] px-[10px]">
        Na Nossa Clínica, Oferecemos uma Gama Completa de Tratamentos
        Odontológicos, Atendendo a Todas as Suas Necessidades.
      </p>
      <div className="flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-[10px] mt-[50px] place-items-center gap-[20px]">
          <CardTratamento
            icone={clareamento}
            title="Clareamento Dental"
            description="Ilumine Seu Sorriso com Nosso Tratamento de Clareamento Dental Avançado."
          />{' '}
          <CardTratamento
            icone={implante}
            title="Implantes Dentários"
            description="Recupere Seus Dentes com Nossos Serviços de Implantes Dentários de Alta Qualidade."
          />{' '}
          <CardTratamento
            icone={carie}
            title="Tratamento de Cárie"
            description="Diga Adeus às Cáries com Nosso Tratamento Inovador e Minimamente Invasivo."
          />{' '}
          <CardTratamento
            icone={extracao}
            title="Extração Dentária"
            description="Tratamento Cuidadoso para uma Extração Sem Preocupações."
          />{' '}
          <CardTratamento
            icone={suspensorio}
            title="Suspensórios"
            description="Descubra a Transformação do Seu Sorriso com Nossos Serviços de Suspensórios Dentários."
          />{' '}
          <CardTratamento
            icone={placa}
            title="Placas Odontológicas"
            description="Experimente o Alívio e a Segurança com Nossas Placas Odontológicas Sob Medida."
          />
        </div>
        <Button className="self-center w-[300px] lg:w-[350px] my-10 bg-cyanPrimary">
          Quero Agendar
        </Button>
      </div>
    </div>
  )
}

export default Tratamentos
