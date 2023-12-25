import Tratamentos from './components/sections/Tratamentos'
import Hero from './components/sections/Hero'
import NossaEquipe from './components/sections/NossaEquipe'
import PerguntasFrequentes from './components/sections/PerguntasFrequentes'
import NossoEspaco from './components/sections/NossoEspaco'
import Feedbacks from './components/sections/Feedbacks'
import PorqueNosEscolher from './components/sections/PorqueNosEscolher'
import Cta from './components/sections/Cta'
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="max-w-[1440px] mx-auto font-montserrat overflow-x-hidden bg-[#EEEEEE]">
      <Hero />
      <div className="bg-sections">
        <PorqueNosEscolher />
        <Tratamentos />
        <NossoEspaco />
        <NossaEquipe />
        <Feedbacks />
        <PerguntasFrequentes />
        <Cta />
      </div>
      <Footer />
    </div>
  )
}

export default App
