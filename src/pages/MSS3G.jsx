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
  Select,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import readXlsxFile from "read-excel-file";
import { Comand } from "../components/comand/Comand";
import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
// import { InputMSS3GSection } from "../components/MSS3G/InputMSS3GSection";

export const MSS3G = () => {
  const initialDataMSSConection = {
    user: "",
    mss: "",
  };
  const [dataMSS, setDataMSS] = useState("");
  const [dataMSSConection, setDataMSSConection] = useState(
    initialDataMSSConection
  );
  const handleChange = (e) => {
    setDataMSSConection({
      ...dataMSSConection,
      [e.target.name]: e.target.value,
    });
  };
  const toast = useToast();
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
  const copyCredencials = () => {
    navigator.clipboard.writeText(
      `ssh -p 4422 "CTIMOVIL\\${dataMSSConection.user.toLocaleUpperCase()}@BOIR01@${
        dataMSSConection.mss
      }@pbps.claro.amx"`
    );
    toast({
      title: "Se obtuvo el comando correctamente",
      description: "",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
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
        <Box bg="blue.700" p={3} borderRadius="md">
          <Heading size="sm" mb={3} color="white">
            Conectar
          </Heading>
          <Flex gap={3} w="full" justifyContent="center" bg="gray.200" p={2}>
            <Input
              bg="white"
              placeholder="Escriba su exa.."
              w="fit-content"
              name="user"
              value={dataMSSConection.user}
              onChange={handleChange}
            />

            <Select
              bg="white"
              placeholder="Seleccionar MSS"
              w="fit-content"
              name="mss"
              value={dataMSSConection.mss}
              onChange={handleChange}
            >
              <option value="MSSASU02">MSSASU02</option>
              <option value="MSSASU03">MSSASU03</option>
              <option value="MSSBAH03">MSSBAH03</option>
              <option value="MSSBAR02">MSSBAR02</option>
              <option value="MSSCOR04">MSSCOR04</option>
              <option value="MSSCOR05">MSSCOR05</option>
              {/* <option value="option2">MSSCOR06</option> */}
              <option value="MSSCRR03">MSSCRR03</option>
              <option value="MSSGRA02">MSSGRA02</option>
              <option value="MSSJON03">MSSJON03</option>
              <option value="MSSM1PYASU1">MSSM1PYASU1</option>
              <option value="MSSM1PYOLL2">MSSM1PYOLL2</option>
              {/* <option value="option3">MSSM01ARCOR1</option> */}
              {/* <option value="option3">MSSM01AROLL2</option> */}
              {/* <option value="option3">MSSM2ARCOR2</option> */}
              <option value="MSSM2AROLL1">MSSM2AROLL1</option>
              <option value="MSSM3ARCOR1">MSSM3ARCOR1</option>
              <option value="MSSM3AROLL1">MSSM3AROLL1</option>
              <option value="MSSMAR03">MSSMAR03</option>
              <option value="MSSMEN03">MSSMEN03</option>
              <option value="MSSMON04">MSSMON04</option>
              <option value="MSSMON05">MSSMON05</option>
              <option value="MSSNEU03">MSSNEU03</option>
              <option value="MSSOLL01">MSSOLL01</option>
              {/* <option value="option3">MSSOLL02</option> */}
              <option value="MSSROS04">MSSROS04</option>
              <option value="MSSROS05">MSSROS05</option>
              <option value="MSSSAN03">MSSSAN03</option>
              <option value="MSSTOR03">MSSTOR03</option>
              <option value="MSSTUC03">MSSTUC03</option>
            </Select>
            <Tooltip label="Obtener comando PowerShell">
              <IconButton
                icon={<RiLockPasswordLine />}
                onClick={copyCredencials}
                variant="solid"
                bg="blue.800"
                border="2px"
                color="white"
                _hover={{ bg: "white", color: "blue.900" }}
              />
            </Tooltip>
          </Flex>
        </Box>

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
