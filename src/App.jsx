import './App.css'
import { Cabecera } from './components/Cabecera/Cabecera'
import { Columnas } from './components/Columnas/Columnas'
import { Footer } from './components/Footer/Footer'
import { Redes } from './components/Redes/Redes'
import { Slider } from './components/Slider/Slider'

function App() {
  
  return (
    <div>
      <Cabecera />
      <Slider />
      <Columnas />
      <Redes />
      <Footer />
    </div>
  )
}

export default App
