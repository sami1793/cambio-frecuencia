import { useState } from 'react'
import './App.css'
import { ComandSection } from './components/comandSection/ComandSection'
import { InputsSection } from './components/inputsSection/InputsSection'

function App() {

  const [bcf, setBcf] = useState(0);
  const [bts, setBts] = useState(0);
  const [trx, setTrx] = useState(0);

  return (
    <div className="App">
      <InputsSection bcf={bcf} setBcf={setBcf} bts={bts} setBts={setBts} trx={trx} setTrx={setTrx} />
      <ComandSection bcf={bcf} bts={bts} trx={trx} />
    </div>
  )
}

export default App
