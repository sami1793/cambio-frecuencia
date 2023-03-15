import { Comand } from "./comand/Comand"

export const ComandSection = ({bcf,bts,trx}) => {
  return (
    <div>
        <Comand comand={`ZEEI:BCF=${bcf};`} task='SHOW' color='yellow'/>
        <Comand comand={`ZEQS:BTS=${bts}:L;`} task='LOCKED BTS' color='blue'/>
        <Comand comand={`ZERS:BTS=${bts},TRX=${trx}:L;`} task='LOCKED TRX' color='blue'/>
    </div>
  )
}
