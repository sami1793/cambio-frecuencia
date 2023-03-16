import { Comand } from "../comand/Comand"

import './ComandSection.css'

export const ComandSection = ({inputs}) => {
  return (
    <div className="comandsContainer">
      <div>
        <Comand comand={`ZEEI:BCF=${inputs.bcf};`} task='SHOW' color='yellow' />
        <Comand comand={`ZEQS:BTS=${inputs.bts}:L;`} task='LOCKED BTS' color='blue' />
        <Comand comand={`ZERS:BTS=${inputs.bts},TRX=${inputs.trx}:L;`} task='LOCKED TRX' color='blue' />
      </div>
      <div>
        <Comand comand={`ZERM:BTS=${inputs.bts},TRX=${inputs.trx}:FREQ=${inputs.newFreq};`} task='CAMBIAR Frecuencia' color='green' />
      </div>
      <div>
        <Comand comand={`ZEQO:BTS=${inputs.bts}:HOP:;`} task='BUSCAR ID de MAL' color='yellow' />
        <Comand comand={`ZEBI:MAL,${inputs.mal};`} task='VERIFICO MAL' color='yellow' />
        <Comand comand={`ZEBT:MAL,${inputs.mal},R:FREQ=${inputs.freq};`} task='REMUEVO Frecuencia' color='red' />
        <Comand comand={`ZEBT:MAL,${inputs.mal},A:FREQ=${inputs.newFreq};`} task='AGREGO Frecuencia' color='green' />
      </div>
      <div>
        <Comand comand={`ZERS:BTS=${inputs.bts},TRX=${inputs.trx}:U;`} task='UNLOCKED TRX' color='green' />
        <Comand comand={`ZEQS:BTS=${inputs.bts}:U;`} task='UNLOCKED BTS' color='green' />
      </div>
    </div>

  )
}
