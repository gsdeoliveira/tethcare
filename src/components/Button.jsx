import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'text-[16px] md:text-[18px] px-[20px] h-[50px] lg:h-[70px] w-[305px] min-w-[170px] hover:brightness-105 transition-all rounded-[5px] flex justify-center items-center text-center text-white',
        className,
      )}
      {...props}
    >
      <a href="https://wa.me/5585986638595" target="_blank" rel="noreferrer">
        {children}
      </a>
    </button>
  )
}

export default Button
