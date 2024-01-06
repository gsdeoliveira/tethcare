const Card = ({ image, title, description }) => {
  return (
    <div className="bg-bluePrimary rounded-[10px] p-[20px] max-w-[370px] h-[210px] sm:h-[260px] md:h-[240px] lg:h-[260px] xl:h-[240px] flex flex-col gap-[10px]">
      <img src={image} width={64} height={64} alt={title} className="w-fit" />
      <h3 className="text-white text-[18px] font-bold">{title}</h3>
      <p className="text-white text-[14px]">{description}</p>
    </div>
  )
}

export default Card
