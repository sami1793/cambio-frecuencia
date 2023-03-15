import { useState } from 'react'
import './App.css'
import { ComandSection } from './components/comandSection/ComandSection'
import { InputsSection } from './components/inputsSection/InputsSection'

function App() {

  const [bcf, setBcf] = useState(0);
  const [bts, setBts] = useState(0);
  const [trx, setTrx] = useState(0);
  const [freq, setFreq] = useState(206);
  const [mal, setMal] = useState(0);
  const [newFreq, setNewFreq] = useState(0);

  return (
    <div className="App">
      <h1>Cambio de frecuencia</h1>
      <InputsSection bcf={bcf} setBcf={setBcf} bts={bts} setBts={setBts} trx={trx} setTrx={setTrx} freq={freq} setFreq={setFreq} mal={mal} setMal={setMal} newFreq={newFreq} setNewFreq={setNewFreq} />
      <ComandSection bcf={bcf} bts={bts} trx={trx} freq={freq} mal={mal} newFreq={newFreq}/>
    </div>
  )
}

export default App
