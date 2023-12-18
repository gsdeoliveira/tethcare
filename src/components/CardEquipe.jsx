const CardEquipe = ({ imgUrl, title, description }) => {
  return (
    <div className="flex flex-col relative rounded-[10px]">
      <div className="rounded-[10px] relative">
        <div className="h-[70%] absolute bottom-0 bg-bluePrimary w-full rounded-tl-[10px] rounded-tr-[10px]"></div>
        <img
          src={imgUrl}
          alt={title}
          className="w-full relative left-[2px] z-10"
        />
      </div>
      <div className="bg-white h-[50%] flex flex-col rounded-b-[10px] gap-[10px] px-[10px] py-[20px]">
        <h4 className="text-[18px] font-bold">{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default CardEquipe
