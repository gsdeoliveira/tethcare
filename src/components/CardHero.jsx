import React from 'react'

const CardHero = ({ icon, number, description, altText }) => {
  return (
    <div className="relative z-10 w-full min-w-[100px] lg:w-fit bg-bluePrimary/20 flex flex-1 flex-col gap-1 py-[10px] items-center justify-between border-4 border-cyanPrimary rounded-[10px]">
      <img src={icon} alt={altText} className="w-[30px] sm:w-[40px]" />
      <p className="text-[16px] sm:text-[18px] relative  font-extrabold">
        <span className="absolute -left-3">+</span>
        {number}
      </p>
      <p className="text-[8px] sm:text-[10px] leading-tight w-[90%] min-[1230px]:w-[70%] min-[1430]:w-fit text-center font-bold">
        {description}
      </p>
      <div className="w-full h-[5px] bg-cyanPrimary absolute bottom-0"></div>
    </div>
  )
}

export default CardHero
