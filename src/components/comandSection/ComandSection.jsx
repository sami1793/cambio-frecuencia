import { Comand } from "../comand/Comand";

export const ComandSection = ({ inputs }) => {
  return (
    <div>
      <div>
        <Comand
          comand={`ZEEI:BCF=${inputs.bcf};`}
          task="SHOW"
          color="yellow.200"
        />
        <Comand
          comand={`ZEQS:BTS=${inputs.bts}:L;`}
          task="LOCKED BTS"
          color="blue.200"
        />
        <Comand
          comand={`ZERS:BTS=${inputs.bts},TRX=${inputs.trx}:L;`}
          task="LOCKED TRX"
          color="blue.200"
        />
      </div>
      <div>
        <Comand
          comand={`ZERM:BTS=${inputs.bts},TRX=${inputs.trx}:FREQ=${inputs.newFreq};`}
          task="CAMBIAR Frecuencia"
          color="green.200"
        />
      </div>
      <div>
        <Comand
          comand={`ZEQO:BTS=${inputs.bts}:HOP:;`}
          task="BUSCAR ID de MAL"
          color="yellow.200"
        />
        <Comand
          comand={`ZEBI:MAL,${inputs.mal};`}
          task="VERIFICO MAL"
          color="yellow.200"
        />
        <Comand
          comand={`ZEBT:MAL,${inputs.mal},R:FREQ=${inputs.freq};`}
          task="REMUEVO Frecuencia"
          color="red.200"
        />
        <Comand
          comand={`ZEBT:MAL,${inputs.mal},A:FREQ=${inputs.newFreq};`}
          task="AGREGO Frecuencia"
          color="green.200"
        />
      </div>
      <div>
        <Comand
          comand={`ZERS:BTS=${inputs.bts},TRX=${inputs.trx}:U;`}
          task="UNLOCKED TRX"
          color="green.200"
        />
        <Comand
          comand={`ZEQS:BTS=${inputs.bts}:U;`}
          task="UNLOCKED BTS"
          color="green.200"
        />
      </div>
    </div>
  );
};
