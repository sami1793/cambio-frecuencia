import { Comand } from "./comand/Comand"

export const ComandSection = ({ bcf, bts, trx, freq, mal, newFreq }) => {
  return (
    <>
      <div>
        <Comand comand={`ZEEI:BCF=${bcf};`} task='SHOW' color='yellow' />
        <Comand comand={`ZEQS:BTS=${bts}:L;`} task='LOCKED BTS' color='blue' />
        <Comand comand={`ZERS:BTS=${bts},TRX=${trx}:L;`} task='LOCKED TRX' color='blue' />
      </div>
      <div>
        <Comand comand={`ZERM:BTS=${bts},TRX=${trx}:FREQ=${newFreq};`} task='CAMBIAR Frecuencia' color='green' />
      </div>
      <div>
        <Comand comand={`ZEQO:BTS=${bts}:HOP:;`} task='BUSCAR ID de MAL' color='yellow' />
        <Comand comand={`ZEBI:MAL,${mal};`} task='VERIFICO MAL' color='yellow' />
        <Comand comand={`ZEBT:MAL,${mal},R:FREQ=${freq};`} task='REMUEVO Frecuencia' color='red' />
        <Comand comand={`ZEBT:MAL,${mal},A:FREQ=${newFreq};`} task='AGREGO Frecuencia' color='green' />
      </div>
      <div>
        <Comand comand={`ZERS:BTS=${bts},TRX=${trx}:U;`} task='UNLOCKED TRX' color='green' />
        <Comand comand={`ZEQS:BTS=${bts}:U;`} task='UNLOCKED BTS' color='green' />
      </div>
    </>

  )
}
