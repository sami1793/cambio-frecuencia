import { Input } from '../input/Input'

import './InputsSection.css'

export const InputsSection = ({inputs, handleChange}) => {
    return (
        <div className='inputContainer'>
            <div className='inputsSection'>
                <Input labelName='BCF'><input type="number" name='bcf' value={inputs.bcf} onChange={handleChange} /></Input>
                <Input labelName='BTS'><input type="number" name='bts' value={inputs.bts} onChange={handleChange} /></Input>
                <Input labelName='TRX'><input type="number" name='trx' value={inputs.trx} onChange={handleChange} /></Input>
            </div>
            <div className='inputsSection'>
                <Input labelName='FREQ'><input type="number" name='freq' value={inputs.freq} onChange={handleChange} /></Input>
                <Input labelName='MAL'><input type="number" name='mal' value={inputs.mal} onChange={handleChange} /></Input>
                <Input labelName='NEW FREQ'><input type="number" name='newFreq' value={inputs.newFreq} onChange={handleChange}  /></Input>
            </div>
        </div>
    )
}
