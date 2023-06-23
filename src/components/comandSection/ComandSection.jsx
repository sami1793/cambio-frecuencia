import { Flex } from "@chakra-ui/react";
import { Comand } from "../comand/Comand";

export const ComandSection = ({ inputs }) => {
  return (
    <Flex direction="column" gap={2} mb={5}>
      <Comand
        comand={`ZEEI:BCF=${inputs.bcf};`}
        task="SHOW"
        color="yellow.200"
      />
      <Comand
        comand={`ZEQS:BTS=${inputs.bts}:L;`}
        task="LOCKED BTS"
        color="orange.200"
      />
      <Comand
        comand={`ZERS:BTS=${inputs.bts},TRX=${inputs.trx}:L;`}
        task="LOCKED TRX"
        color="orange.200"
      />
      <Comand
        comand={`ZERM:BTS=${inputs.bts},TRX=${inputs.trx}:FREQ=${inputs.newFreq};`}
        task="CAMBIAR Frecuencia"
        color="green.200"
      />
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
      <Comand
        comand={`ZERS:BTS=${inputs.bts},TRX=${inputs.trx}:U;`}
        task="UNLOCKED TRX"
        color="blue.200"
      />
      <Comand
        comand={`ZEQS:BTS=${inputs.bts}:U;`}
        task="UNLOCKED BTS"
        color="blue.200"
      />
    </Flex>
  );
};
