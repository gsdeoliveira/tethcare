import feedback1 from '../../assets/feedback1.jpg'
import feedback2 from '../../assets/feedback2.jpg'
import feedback3 from '../../assets/feedback3.jpg'
import feedback4 from '../../assets/feedback4.jpg'
import { useRef, useState } from 'react'
import Testimonial from '../Testimonial'

const Feedbacks = () => {
  const [scrollPosition, setScrollPosition] = useState(1)
  const scrollRef = useRef(null)

  const scrollNext = () => {
    if (scrollRef.current) {
      if (scrollPosition <= 3) {
        scrollRef.current.scrollLeft =
          scrollRef.current.clientWidth * scrollPosition
        setScrollPosition((state) => state + 1)
      } else {
        setScrollPosition(1)
        scrollRef.current.scrollLeft = scrollRef.current.clientWidth * 0
      }
    }
  }

  const scrollPrev = () => {
    if (scrollRef.current) {
      if (scrollPosition > 1) {
        scrollRef.current.scrollLeft =
          scrollRef.current.clientWidth * (scrollPosition - 2)
        setScrollPosition((state) => state - 1)
      } else {
        scrollRef.current.scrollLeft = scrollRef.current.clientWidth * 3
        setScrollPosition(4)
      }
    }
  }

  return (
    <section
      className="p-[10px] sm:px-[50px] xl:px-[100px] mt-[120px]"
      id="feedbacks"
    >
      <h2 className="text-center text-bluePrimary px-[10px]">Feedbacks</h2>
      <p className="text-darkGray text-center px-[10px] mt-[10px]">
        Veja o que os nossos clientes dizem sobre nós
      </p>
      <div
        className="flex w-full scroll-smooth overflow-auto touch-pan-y hide-scrollbar"
        ref={scrollRef}
        draggable={false}
      >
        <Testimonial
          image={feedback1}
          nome="Isabella Oliveira"
          profissao="Designer de Interiores"
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        >
          <p>
            Minha jornada com a TethCare foi verdadeiramente transformadora.
            Durante anos, eu sofria com a vergonha de sorrir devido aos meus
            dentes amarelados. Isso afetou minha confiança e minha disposição
            para interagir socialmente.
          </p>
          <p>
            Fui recebida na clínica com uma calorosa equipe, especialmente pela
            Dra. Ana Oliveira. Ela não apenas entendeu minhas preocupações, mas
            também ofereceu soluções personalizadas para clareamento dental. Ao
            longo do tratamento, ela me guiou com profissionalismo e compaixão,
            sempre certificando-se de que eu me sentisse confortável.
          </p>
        </Testimonial>
        <Testimonial
          image={feedback2}
          nome="Guilherme Lopes"
          profissao="Arquiteto"
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        >
          <p>
            Minha experiência na TethCare foi incrível! Durante muito tempo,
            lidei com a insatisfação em relação à estética do meu sorriso. A
            equipe da clínica, liderada pela Dra. Ana Oliveira, não apenas
            compreendeu minhas preocupações estéticas, mas também apresentou
            soluções inovadoras para melhorar a aparência geral dos meus dentes.
          </p>
          <p>
            Ao longo do tratamento, recebi orientação personalizada e atenção
            especializada, o que fez toda a diferença. A abordagem profissional
            e dedicada da Dra. Ana garantiu não apenas resultados estéticos
            notáveis, mas também me fez sentir confiante e satisfeito com o meu
            sorriso.
          </p>
        </Testimonial>
        <Testimonial
          image={feedback3}
          nome="Eduardo Santos"
          profissao="Estudante de Engenharia"
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        >
          <p>
            Minha experiência na TethCare foi verdadeiramente transformadora.
            Além de receber tratamento odontológico de alta qualidade, encontrei
            apoio compassivo para superar o medo de consultórios dentários. A
            equipe, liderada pela Dra. Ana Oliveira, demonstrou uma atenção
            excepcional às necessidades emocionais dos pacientes.
          </p>
          <p>
            Antes de buscar a TethCare, eu evitava visitas ao dentista devido a
            experiências passadas desagradáveis. No entanto, a abordagem gentil
            e empática da Dra. Ana e de sua equipe mudou minha perspectiva.
            Agora, encaro os cuidados odontológicos como uma parte positiva da
            minha rotina de saúde.
          </p>
        </Testimonial>
        <Testimonial
          image={feedback4}
          nome="Gabriela Lima"
          profissao="Estudante de Psicologia"
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
        >
          <p>
            Minha jornada na TethCare foi além das minhas expectativas. Antes do
            tratamento, eu enfrentava problemas persistentes de sensibilidade
            dentária que afetavam minha qualidade de vida. Ao procurar a Dra.
            Ana Oliveira, encontrei não apenas uma solução eficaz para a
            sensibilidade, mas também uma equipe comprometida em meu bem-estar
            geral.
          </p>
          <p>
            A Dra. Ana não apenas tratou minha sensibilidade dentária com
            eficácia, mas também se dedicou a educar-me sobre práticas
            odontológicas preventivas. Sua abordagem holística e atenção aos
            detalhes fizeram da TethCare minha escolha definitiva para cuidados
            odontológicos.
          </p>
        </Testimonial>
      </div>
    </section>
  )
}

export default Feedbacks
