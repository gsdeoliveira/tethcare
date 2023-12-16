import React from 'react'

const CardHero = ({ icon, number, description, altText }) => {
  return (
    <div className="relative z-10 bg-bluePrimary/20 flex flex-1 flex-col p-[10px] items-center justify-between border-4 border-cyanPrimary rounded-[10px]">
      <img src={icon} alt={altText} className="w-[48px]" />
      <p className="text-[28px] relative  font-extrabold">
        <span className="absolute -left-5">+</span>
        {number}
      </p>
      <p className="text-[12px] w-[90%] min-[1230px]:w-[70%] min-[1430]:w-fit text-center font-bold">
        {description}
      </p>
      <div className="w-full h-[5px] bg-cyanPrimary absolute bottom-0"></div>
    </div>
  )
}

export default CardHero
