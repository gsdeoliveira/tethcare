const CardEquipe = ({ imgUrl, title, description }) => {
  return (
    <div className="flex flex-col lg:w-[33%] h-full relative rounded-[10px] lg:min-w-[200px] xl">
      <div className="rounded-[10px] relative">
        <div className="h-[70%] grow absolute bottom-0 bg-bluePrimary w-full rounded-tl-[10px] rounded-tr-[10px]"></div>
        <img
          src={imgUrl}
          alt={title}
          className="w-full relative left-[2px] z-10"
        />
      </div>
      <div className="bg-white h-[60%] flex flex-col rounded-b-[10px] gap-[10px] px-[10px] py-[20px]">
        <h4 className="text-[18px] font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardEquipe
