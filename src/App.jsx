import Tratamentos from './components/sections/Tratamentos'
import Hero from './components/sections/Hero'
import NossaEquipe from './components/sections/NossaEquipe'
// import NossoEspaco from './components/sections/NossoEspaco'
import PerguntasFrequentes from './components/sections/PerguntasFrequentes'

function App() {
  return (
    <div className="max-w-[1920px] mx-auto font-montserrat overflow-x-hidden bg-[#EEEEEE]">
      <Hero />
      <Tratamentos />
      <div className="bg-sections">
        {/* <NossoEspaco /> */}
        <NossaEquipe />
        <PerguntasFrequentes />
      </div>
    </div>
  )
}

export default App
