import {
  Box,
  VStack,
  Input,
  Heading,
  Flex,
  HStack,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import readXlsxFile from "read-excel-file";
import { Comand } from "../components/comand/Comand";
import { useState } from "react";

export const MSS3G = () => {
  const [dataMSS, setDataMSS] = useState("");
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const arrayData = await readXlsxFile(file);
        console.log(arrayData.filter((value, index) => index >= 10));
        setDataMSS(arrayData.filter((value, index) => index >= 10));
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };

  return (
    <VStack mb={10}>
      <Heading m={5} mb={10} alignSelf="center" color="blue.900">
        Crecimiento MSS 3G
      </Heading>
      <Box>
        <Input type="file" onChange={handleFileUpload} />
      </Box>
      {dataMSS && (
        <HStack gap={5}>
          <Flex direction="column" gap={3}>
            <Box>
              {dataMSS.map((value, indexMap) => (
                <Comand
                  comand={`ZEPC:TYPE=SA,NAME=${value[2]},NO=${value[3]}:LAC=${value[5]},SAC=${value[7]},CA=${value[13]},MCC=${value[15]},MCC=${value[16]};`}
                  task="CRECER MSS"
                  color="green.200"
                  key={indexMap}
                />
              ))}
            </Box>
            <Box>
              {dataMSS.map((value, indexMap) => (
                <Comand
                  comand={`ZEPR:TYPE=SA,NAME=${value[2]}:RZ=${value[8]};`}
                  task="ASOCIAR RZ"
                  color="green.100"
                  key={indexMap}
                />
              ))}
            </Box>
            <Box>
              {dataMSS.map((value, indexMap) => (
                <Comand
                  comand={`ZEPS:TYPE=SA,NAME=${value[2]}:U;`}
                  task="DESBLOQUEAR"
                  color="blue.200"
                  key={indexMap}
                />
              ))}
            </Box>
          </Flex>
          <Flex direction="column" gap={3}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton bgColor="gray.100">
                    <Box as="span" flex="1" textAlign="center">
                      Verificar por NAME
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {dataMSS.map((value, indexMap) => (
                      <Comand
                        comand={`ZEPO:TYPE=SA,NAME=${value[2]};`}
                        task="VERIFICAR"
                        color="yellow.200"
                        key={indexMap}
                      />
                    ))}
                  </Box>
                  <Box>
                    {dataMSS.map((value, indexMap) => (
                      <Comand
                        comand={`ZEPS:TYPE=SA,NAME=${value[2]}:L;`}
                        task="BLOQUEAR"
                        color="blue.200"
                        key={indexMap}
                      />
                    ))}
                  </Box>
                  <Box>
                    {dataMSS.map((value, indexMap) => (
                      <Comand
                        comand={`ZEPD:TYPE=SA,NAME=${value[2]};`}
                        task="BORRAR"
                        color="red.200"
                        key={indexMap}
                      />
                    ))}
                  </Box>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton bgColor="gray.100">
                    <Box as="span" flex="1" textAlign="center">
                      Verificar por NO
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Box>
                    {dataMSS.map((value, indexMap) => (
                      <Comand
                        comand={`ZEPO:TYPE=SA,NAME=${value[2]};`}
                        task="VERIFICAR"
                        color="yellow.200"
                        key={indexMap}
                      />
                    ))}
                  </Box>
                  <Box>
                    {dataMSS.map((value, indexMap) => (
                      <Comand
                        comand={`ZEPS:TYPE=SA,NAME=${value[2]}:L;`}
                        task="BLOQUEAR"
                        color="blue.200"
                        key={indexMap}
                      />
                    ))}
                  </Box>
                  <Box>
                    {dataMSS.map((value, indexMap) => (
                      <Comand
                        comand={`ZEPD:TYPE=SA,NAME=${value[2]};`}
                        task="BORRAR"
                        color="red.200"
                        key={indexMap}
                      />
                    ))}
                  </Box>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Flex>
        </HStack>
      )}
    </VStack>
  );
};
