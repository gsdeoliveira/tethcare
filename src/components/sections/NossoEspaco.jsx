import Slider from '../Slider'

const NossoEspaco = () => {
  return (
    <section className="px-[10px] sm:px-[50px] xl:px-[100px]" id="nosso-espaco">
      <h2 className="text-bluePrimary text-center px-[10px]">
        Conheça Nosso Espaço
      </h2>
      <p className="text-darkGray text-center px-[10px] mt-[10px]">
        Um Espaço Planejado para Cuidar do Seu Sorriso com Conforto e
        Tecnologia.
      </p>
      <Slider />
    </section>
  )
}

export default NossoEspaco
