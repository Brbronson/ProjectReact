
import './App.css'
import Card from './components/Card'
import img01 from "./assets/imgs/Paisagem-1.jpg"
import img02 from "./assets/imgs/paisagem2.webp"
import img03 from "./assets/imgs/paisagem3.jpg"

function App() {

  return (
    <>
      <Card
      title="Batatinha"
      image={img01}
      text1="Descrição da paisagem"
      text2="Curitiba"
      />
      <Card
      title="Batatinha"
      image={img02}
      text1="Descrição da paisagem"
      text2="Guaratuba"
      />
      <Card
      title="Batatinha"
      image={img03}
      text1="Descrição da paisagem"
      text2="Colombo"
      />
    </>
  )
}

export default App
