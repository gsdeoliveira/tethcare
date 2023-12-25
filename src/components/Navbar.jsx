import { useEffect, useState } from 'react'
import logo from '../assets/Logo.webp'
import burger from '../assets/burger.svg'
import close from '../assets/close.svg'
import whatsapp from '../assets/whatsapp.svg'
import facebook from '../assets/facebook.svg'
import instagram from '../assets/instagram.svg'
import twitter from '../assets/twitter.svg'

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  const [scrollY, setScrollY] = useState(0)

  const handleScroll = () => {
    setScrollY(window.scrollY)
    console.log(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      <div
        className={`fixed max-w-[1440px] transition-bg ${
          scrollY >= 600 ? 'bg-bluePrimary/50' : 'bg-transparent'
        } z-40 flex items-center justify-between w-full px-[20px] sm:px-[50px] h-[50px]`}
      >
        <img
          src={logo}
          alt="tethcare logo"
          className="w-[120px] self-center lg:self-center"
        />
        <div className="hidden lg:flex">
          <ul className="flex gap-[20px] text-white font-bold">
            <li className="hover:text-cyanPrimary transition-all">
              <a href="#tratamentos">Tratamentos</a>
            </li>
            <li className="hover:text-cyanPrimary transition-all">
              <a href="#nosso-espaco">Nosso Espaço</a>
            </li>
            <li className="hover:text-cyanPrimary transition-all">
              <a href="#nossa-equipe">Nossa Equipe</a>
            </li>
            <li className="hover:text-cyanPrimary transition-all">
              <a href="#feedbacks">Feedbacks</a>
            </li>
            <li className="hover:text-cyanPrimary transition-all">
              <a href="#perguntas-frequentes">Perguntas Frequentes</a>
            </li>
          </ul>
        </div>
        <img
          src={menuIsOpen ? close : burger}
          alt="menu"
          className="lg:hidden w-[24px]"
          onClick={toggleMenu}
        />
      </div>
      <div
        className={`fixed ${
          menuIsOpen ? 'block' : 'hidden'
        } lg:hidden touch-none w-full top-0 bg-bluePrimary/80 h-screen z-30 px-[10px] sm:px-[50px]`}
      >
        <div className="mt-[120px]">
          <ul className="flex flex-col items-center mt-[50px] text-[28px] gap-[20px] text-white font-bold">
            <li
              className="hover:text-cyanPrimary transition-all"
              onClick={toggleMenu}
            >
              <a href="#tratamentos">Tratamentos</a>
            </li>
            <li
              className="hover:text-cyanPrimary transition-all"
              onClick={toggleMenu}
            >
              <a href="#nosso-espaco">Nosso Espaço</a>
            </li>
            <li
              className="hover:text-cyanPrimary transition-all"
              onClick={toggleMenu}
            >
              <a href="#nossa-equipe">Nossa Equipe</a>
            </li>
            <li
              className="hover:text-cyanPrimary transition-all"
              onClick={toggleMenu}
            >
              <a href="#feedbacks">Feedbacks</a>
            </li>
            <li
              className="hover:text-cyanPrimary transition-all"
              onClick={toggleMenu}
            >
              <a href="#perguntas-frequentes">Perguntas Frequentes</a>
            </li>
          </ul>
          <div className="flex justify-center gap-[30px] mt-[100px]">
            <img src={whatsapp} alt="whatsapp" className="w-[40px]" />
            <img src={facebook} alt="facebook" className="w-[40px]" />
            <img src={instagram} alt="instagram" className="w-[40px]" />
            <img src={twitter} alt="twitter" className="w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
