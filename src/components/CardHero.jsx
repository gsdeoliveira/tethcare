import React from 'react'

const CardHero = ({ icon, number, description, altText }) => {
  return (
    <div className="relative z-10 bg-bluePrimary/20 flex py-[20px] items-center border-4 border-cyanPrimary rounded-[10px]">
      <img src={icon} alt={altText} className="" />
      <div className="flex flex-col items-start justify-center">
        <p className="text-[16px] sm:text-[30px] relative font-extrabold">
          {/* <span className="absolute -left-3">+</span> */}+{number}
        </p>
        <p className="text-[8px] sm:text-[14px] leading-tight font-bold">
          {description}
        </p>
      </div>
      {/* <div className="w-full h-[5px] bg-cyanPrimary absolute bottom-0"></div> */}
    </div>
  )
}

export default CardHero
