import { useState } from 'react'
import './App.css'
import { ComandSection } from './components/comandSection/ComandSection'
import { InputsSection } from './components/inputsSection/InputsSection'

function App() {

  const [inputs, setInputs] = useState({
    bcf:0,
    bts:0,
    trx:0,
    freq:206,
    mal:0,
    newFreq:0
  })

  const handleChange = (e) =>{
    setInputs({
      ...inputs,
      [e.target.name]:e.target.value
    })
  }

  return (
    <div className="App">
      <h1>Cambio de frecuencia</h1>
      <InputsSection inputs={inputs} handleChange={handleChange}/>
      <ComandSection inputs={inputs}/>
    </div>
  )
}

export default App
