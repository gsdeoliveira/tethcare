import Button from '../Button'

const Cta = () => {
  return (
    <div className="bg-cta translate-y-1/2 text-white w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[50px] rounded-[10px] p-[20px] lg:p-[50px] drop-shadow-lg">
      <div className="lg:w-[60%] text-center lg:text-start">
        <h2>Transforme Seu Sorriso Hoje</h2>
        <p className="mt-[10px]">
          Dê o primeiro passo para conquistar o sorriso dos seus sonhos.Agende
          agora mesmo sua consulta. Se surgir alguma dúvida, nossa equipe de
          suporte está à disposição para ajudar. Estamos ansiosos para
          transformar seu sorriso!
        </p>
      </div>
      <Button className="bg-cyanPrimary w-[250px]">Fazer Agendamento</Button>
    </div>
  )
}

export default Cta
