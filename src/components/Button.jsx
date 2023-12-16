import { twMerge } from 'tailwind-merge'

const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={twMerge(
        'text-[18px] h-[70px] w-[305px] hover:brightness-105 transition-all rounded-[10px] flex justify-center items-center text-white',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
