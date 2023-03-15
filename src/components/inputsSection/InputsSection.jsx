import { Input } from '../input/Input'

import './InputsSection.css'

export const InputsSection = ({bcf,setBcf, bts, setBts, trx, setTrx, freq, setFreq, mal, setMal, newFreq, setNewFreq}) => {
    return (
        <div className='inputContainer'>
            <div className='inputsSection'>
                <Input labelName='BCF'><input type="number" value={bcf} onChange={(e)=>setBcf(e.target.value)} /></Input>
                <Input labelName='BTS'><input type="number" value={bts} onChange={(e)=>setBts(e.target.value)} /></Input>
                <Input labelName='TRX'><input type="number" value={trx} onChange={(e)=>setTrx(e.target.value)} /></Input>
            </div>
            <div className='inputsSection'>
                <Input labelName='FREQ'><input type="number" value={freq} onChange={(e)=>setFreq(e.target.value)} /></Input>
                <Input labelName='MAL'><input type="number" value={mal} onChange={(e)=>setMal(e.target.value)} /></Input>
                <Input labelName='NEW FREQ'><input type="number" value={newFreq} onChange={(e)=>setNewFreq(e.target.value)} /></Input>
            </div>
        </div>
    )
}
