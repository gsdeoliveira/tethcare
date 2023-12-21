import { useState, useEffect } from 'react'
import image1 from '../../assets/image-slide-1.jpg'
import image2 from '../../assets/image-slide-2.jpg'
import image3 from '../../assets/image-slide-3.jpg'
import arrow from '../../assets/arrow.svg'

const NossoEspaco = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showSingleImage, setShowSingleImage] = useState(false)

  const images = [
    image1,
    image2,
    image3,
    image1,
    image2,
    image3,
    // Adicione mais URLs aqui, se desejar
  ]

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    )
  }

  const visibleImages = showSingleImage
    ? [images[currentIndex]]
    : [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length],
      ]

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth
      setShowSingleImage(screenWidth < 1024)
    }

    // Adiciona um event listener para detectar mudanças no tamanho da tela
    window.addEventListener('resize', handleResize)

    // Remove o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Apenas executa este efeito uma vez durante a montagem do componente

  return (
    <div>
      <h2 className="text-bluePrimary text-center px-[20px]">
        Conheça Nosso Espaço
      </h2>
      <p className="text-darkGray text-center px-[20px] mt-[10px] mb-[50px]">
        Um Espaço Planejado para Cuidar do Seu Sorriso com Conforto e
        Tecnologia.
      </p>
      <div className="flex items-center justify-center">
        <img
          src={arrow}
          alt="próxima imagem"
          className="relative z-10 rotate-180 left-20 w-[40px] border-2 border-bluePrimary p-1 rounded-full cursor-pointer"
          onClick={prevImage}
        />

        {visibleImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Imagem ${index}`}
            className={`lg:w-[31%] w-full lg:h-[300px] rounded-[5px] m-2 transform ${
              index === 1 ? 'scale-x-125 opacity-100' : 'scale-75 opacity-80'
            } transition-all duration-700`}
          />
        ))}

        <img
          src={arrow}
          alt="próxima imagem"
          className="relative right-20 w-[40px] border-2 border-bluePrimary p-1 rounded-full cursor-pointer"
          onClick={nextImage}
        />
      </div>
    </div>
  )
}

export default NossoEspaco
