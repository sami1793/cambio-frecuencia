import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
} from "@chakra-ui/react";
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
      <Divider orientation="horizontal" color={"black"} p={3} />
      {/* <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton bg={"blue.200"}>
              <Box as="span" flex="1" textAlign="left">
                Bloqueos
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}> */}
      <Comand
        comand={`ZEFS:${values.bcf}:L;`}
        color={`orange.200`}
        task={`BLOQUEAR BCF`}
      ></Comand>
      <Comand
        comand={`ZEQS:BTS=${values.bts1}:L;`}
        color={`orange.200`}
        task={`BLOQUEAR BTS`}
      ></Comand>
      <Comand
        comand={`ZEQS:BTS=${values.bts2}:L;`}
        color={`orange.200`}
        task={`BLOQUEAR BTS`}
      ></Comand>
      <Comand
        comand={`ZEQS:BTS=${values.bts3}:L;`}
        color={`orange.200`}
        task={`BLOQUEAR BTS`}
      ></Comand>
      <Divider orientation="horizontal" color={"black"} p={1} />
      <Comand
        comand={`ZEQV:BTS=${values.bts1}:GENA=N, EGENA=N;`}
        color={`orange.200`}
        task={`DESHABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts2}:GENA=N, EGENA=N;`}
        color={`orange.200`}
        task={`DESHABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts3}:GENA=N, EGENA=N;`}
        color={`orange.200`}
        task={`DESHABILITAR GENA`}
      ></Comand>
      <Divider orientation="horizontal" color={"black"} p={3} />
      <Comand
        comand={`ZEFM:475::::ETMEID=${values.etme};`}
        color={`green.200`}
        task={`CAMBIAR ETME ID`}
      ></Comand>
      <Divider orientation="horizontal" color={"black"} p={3} />
      {/* </AccordionPanel>
        </AccordionItem> */}

      {/* <AccordionItem>
          <h2>
            <AccordionButton bg={"green.200"}>
              <Box as="span" flex="1" textAlign="left">
                Desbloqueos
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}> */}
      <Comand
        comand={`ZEQV:BTS=${values.bts1}:GENA=Y, EGENA=Y;`}
        color={`blue.200`}
        task={`HABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts2}:GENA=Y, EGENA=Y;`}
        color={`blue.200`}
        task={`HABILITAR GENA`}
      ></Comand>
      <Comand
        comand={`ZEQV:BTS=${values.bts3}:GENA=Y, EGENA=Y;`}
        color={`blue.200`}
        task={`HABILITAR GENA`}
      ></Comand>
      <Divider orientation="horizontal" color={"black"} p={1} />
      <Comand
        comand={`ZEQS:BTS=${values.bts1}:U;`}
        task="UNLOCKED BTS"
        color="blue.200"
      />
      <Comand
        comand={`ZEQS:BTS=${values.bts2}:U;`}
        task="UNLOCKED BTS"
        color="blue.200"
      />
      <Comand
        comand={`ZEQS:BTS=${values.bts3}:U;`}
        task="UNLOCKED BTS"
        color="blue.200"
      />
      {/* </AccordionPanel>
        </AccordionItem>
      </Accordion> */}
    </Flex>
  );
};
