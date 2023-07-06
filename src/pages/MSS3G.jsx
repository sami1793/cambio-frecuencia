import {
  Box,
  Input,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Wrap,
  WrapItem,
  Center,
  Button,
  Link,
} from "@chakra-ui/react";
import readXlsxFile from "read-excel-file";
import { Comand } from "../components/comand/Comand";
import { useState } from "react";
// import { InputMSS3GSection } from "../components/MSS3G/InputMSS3GSection";

export const MSS3G = () => {
  const [dataMSS, setDataMSS] = useState("");
  // const [inputsMSS3G, setInputsMSS3G] = useState({
  //   name: "",
  //   no: "",
  //   lac: "",
  //   sac: "",
  //   rz: "",
  //   ca: "",
  //   mcc: "",
  //   mnc: "",
  // });
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
    <Center mb={10}>
      <Flex direction="column" alignItems="center" gap={3}>
        <Heading m={5} mb={10} alignSelf="center" color="blue.900">
          Crecimiento MSS 3G
        </Heading>
        <Box>
          <Input type="file" onChange={handleFileUpload} maxW="max" />
        </Box>
        <Button
          variant="solid"
          bg="blue.700"
          color="white"
          border="2px"
          _hover={{ bg: "white", color: "blue.700", borderColor: "blue.700" }}
          as={Link}
          href="https://doxplanning.com/metabase/public/dashboard/f9b71ea3-a2fd-4791-ac6d-d225fa7bddbc"
          isExternal
        >
          Check MSS
        </Button>
        {/* <InputMSS3GSection dataMSS={dataMSS} /> */}
        {dataMSS && (
          <Wrap>
            <WrapItem>
              <Flex direction="column" gap={3}>
                <Box bg="blue.800" p={2}>
                  <Heading color="white" size="sm" mb={3}>
                    CRECER MSS
                  </Heading>
                  {dataMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPC:TYPE=SA,NAME=${value[2]},NO=${value[3]}:LAC=${value[5]},SAC=${value[7]},CA=${value[13]},MCC=${value[15]},MNC=${value[16]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </Box>
                <Box bg="blue.800" p={2}>
                  <Heading color="white" size="sm" mb={3}>
                    ASOCIAR RZ
                  </Heading>
                  {dataMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPR:TYPE=SA,NAME=${value[2]}:RZ=${value[8]};`}
                      task=""
                      color="green.100"
                      key={indexMap}
                    />
                  ))}
                </Box>
                <Box bg="blue.800" p={2}>
                  <Heading color="white" size="sm" mb={3}>
                    DESBLOQUEAR
                  </Heading>
                  {dataMSS.map((value, indexMap) => (
                    <Comand
                      comand={`ZEPS:TYPE=SA,NAME=${value[2]}:U;`}
                      task=""
                      color="blue.200"
                      key={indexMap}
                    />
                  ))}
                </Box>
              </Flex>
            </WrapItem>
            <WrapItem>
              <Flex direction="column" gap={3}>
                <Accordion allowToggle>
                  <AccordionItem>
                    <h2>
                      <AccordionButton p={2}>
                        <Box as="span" flex="1" textAlign="center">
                          VERIFICAR POR NAME
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex direction="column" gap={3}>
                        <Box bg="blue.800" p={2}>
                          <Heading color="white" size="sm" mb={2}>
                            VERIFICAR
                          </Heading>
                          {dataMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPO:TYPE=SA,NAME=${value[2]};`}
                              task=""
                              color="yellow.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                        <Box bg="blue.800" p={2}>
                          <Heading color="white" size="sm" mb={2}>
                            BLOQUEAR
                          </Heading>
                          {dataMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPS:TYPE=SA,NAME=${value[2]}:L;`}
                              task=""
                              color="blue.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                        <Box bg="blue.800" p={2}>
                          <Heading color="white" size="sm" mb={2}>
                            BORRAR
                          </Heading>
                          {dataMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPD:TYPE=SA,NAME=${value[2]};`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton p={2}>
                        <Box as="span" flex="1" textAlign="center">
                          VERIFICAR POR NO
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Flex direction="column" gap={3}>
                        <Box bg="blue.800" p={2}>
                          <Heading color="white" size="sm" mb={2}>
                            VERIFICAR
                          </Heading>
                          {dataMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPO:TYPE=SA,NAME=${value[2]};`}
                              task=""
                              color="yellow.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                        <Box bg="blue.800" p={2}>
                          <Heading color="white" size="sm" mb={2}>
                            BLOQUEAR
                          </Heading>
                          {dataMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPS:TYPE=SA,NAME=${value[2]}:L;`}
                              task=""
                              color="blue.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                        <Box bg="blue.800" p={2}>
                          <Heading color="white" size="sm" mb={2}>
                            BORRAR
                          </Heading>
                          {dataMSS.map((value, indexMap) => (
                            <Comand
                              comand={`ZEPD:TYPE=SA,NAME=${value[2]};`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Flex>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Flex>
            </WrapItem>
          </Wrap>
        )}
      </Flex>
    </Center>
  );
};
