import { useState } from 'react'
import './App.css'
import { ComandSection } from './components/comandSection/ComandSection'
import { InputsSection } from './components/inputsSection/InputsSection'

function App() {

  const [bcf, setBcf] = useState(0);
  const [bts, setBts] = useState(0);
  const [trx, setTrx] = useState(0);
  const [freq, setFreq] = useState(206);

  return (
    <div className="App">
      <h1>Cambio de frecuencia</h1>
      <InputsSection bcf={bcf} setBcf={setBcf} bts={bts} setBts={setBts} trx={trx} setTrx={setTrx} freq={freq} setFreq={setFreq} />
      <ComandSection bcf={bcf} bts={bts} trx={trx} freq={freq} />
    </div>
  )
}

export default App
