import { Flex } from "@chakra-ui/react";
import { Comand } from "../comand/Comand";

export const ComandETMESection = ({ values }) => {
  return (
    <Flex direction="column" gap={2} mb={5}>
      <Comand
        comand={`ZEFO:${values.bcf}:IDE;`}
        color={`yellow.200`}
        task={`SHOW ETME ID`}
      ></Comand>
      <Comand
        comand={`ZQRI:ETME,::VLAN48:ALL;`}
        color={`yellow.200`}
        task={`VERIFICAR ETME ID`}
      ></Comand>
      <Comand
        comand={`ZQKB:ETMA,0;`}
        color={`yellow.200`}
        task={`VERIFICAR ETMA`}
      ></Comand>
      <Comand
        comand={`ZQKB:ETMA,1;`}
        color={`yellow.200`}
        task={`VERIFICAR ETMA`}
      ></Comand>
      <Comand
        comand={`ZQKB:ETMA,2;`}
        color={`yellow.200`}
        task={`VERIFICAR ETMA`}
      ></Comand>
      <Comand
        comand={`ZQKB:ETMA,3;`}
        color={`yellow.200`}
        task={`VERIFICAR ETMA`}
      ></Comand>
      <Comand
        comand={`ZEFS:${values.bcf}:L;`}
        color={`blue.200`}
        task={`BLOQUEAR BCF`}
      ></Comand>
      <Comand
        comand={`ZEQS:BTS=${values.bts1}:L;`}
        color={`blue.200`}
        task={`BLOQUEAR BTS`}
      ></Comand>
      <Comand
        comand={`ZEQS:BTS=${values.bts2}:L;`}
        color={`blue.200`}
        task={`BLOQUEAR BTS`}
      ></Comand>
      <Comand
        comand={`ZEQS:BTS=${values.bts3}:L;`}
        color={`blue.200`}
        task={`BLOQUEAR BTS`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts1}:GENA=N, EGENA=N;`}
        color={`red.200`}
        task={`DESHABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts2}:GENA=N, EGENA=N;`}
        color={`red.200`}
        task={`DESHABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts3}:GENA=N, EGENA=N;`}
        color={`red.200`}
        task={`DESHABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEFM:475::::ETMEID=${values.etme};`}
        color={`green.200`}
        task={`CAMBIAR ETME ID`}
      ></Comand>
    </Flex>
  );
};
