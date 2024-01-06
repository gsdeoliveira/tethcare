const CardTratamento = ({ icone, title, description }) => {
  return (
    <div className="bg-bluePrimary shadow-card max-w-[450px] h-[320px] relative p-[20px] rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
      <img src={icone} width={150} alt="" className="w-[150px]" />
      <div className="text-center flex flex-col gap-[20px] relative z-10">
        <h3 className="text-white text-[20px] font-bold">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  )
}

export default CardTratamento
