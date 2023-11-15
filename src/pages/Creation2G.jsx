import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Wrap,
  WrapItem,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Heading,
  Tooltip,
  Stack,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import readXlsxFile from "read-excel-file";
import { Title } from "../components/titles/Title";
import { BoxComands } from "../components/box/BoxComands";
import { Comand } from "../components/comand/Comand";
import { toEXA } from "../utils/conversor";
import { BSCConection } from "../components/2G/BSCConection";

import { invertArray } from "../utils/array";
import { calculateNetwork } from "../utils/calculatorIP";

export const Creation2G = () => {
  let contTRX = 0;
  const MCC = {
    ARG: "722",
    PY: "744",
    UY: "748",
  };
  const MNC = {
    ARG: "310",
    PY: "02",
    UY: "10",
  };
  const getMCC = (pais) => {
    return MCC[`${pais}`];
  };
  const getMNC = (pais) => {
    return MNC[`${pais}`];
  };

  const [typeBSC, setTypeBSC] = useState("");

  const [data2G, setData2G] = useState("");
  const [dataDF2GSheet1, setDataDF2GSheet1] = useState("");
  const [dataDF2GSheet2, setDataDF2GSheet2] = useState("");
  const [dataDF2GSheet3, setDataDF2GSheet3] = useState("");
  const [dataDF2GSheet4, setDataDF2GSheet4] = useState("");
  const [dataDF2GSheet5, setDataDF2GSheet5] = useState("");

  const [ipAddressOmuSig, setIpAddressOmuSig] = useState(null);

  const [IPOMUTRX, setIPOMUTRX] = useState([]);

  const [inputOMUTRXID, setInputOMUTRXID] = useState({
    bcsu1: "0",
    bcsu2: "1",
    bcsu3: "2",
    bcsu4: "3",
    bcsu5: "4",
    bcsu6: "5",
    bcsu7: "6",
    bcsu8: "7",
    bcsu9: "8",
  });

  const [bcsuAsignedTRX, setBcsuAsignedTRX] = useState({
    bcsuAsignedOMU: "1",
    bcsuAsignedTRX1: "1",
    bcsuAsignedTRX2: "1",
    bcsuAsignedTRX3: "1",
    bcsuAsignedTRX4: "1",
    bcsuAsignedTRX5: "1",
    bcsuAsignedTRX6: "1",
    bcsuAsignedTRX7: "1",
    bcsuAsignedTRX8: "1",
    bcsuAsignedTRX9: "1",
    bcsuAsignedTRX10: "1",
    bcsuAsignedTRX11: "1",
    bcsuAsignedTRX12: "1",
    bcsuAsignedTRX13: "1",
    bcsuAsignedTRX14: "1",
    bcsuAsignedTRX15: "1",
    bcsuAsignedTRX16: "1",
    bcsuAsignedTRX17: "1",
    bcsuAsignedTRX18: "1",
    bcsuAsignedTRX19: "1",
    bcsuAsignedTRX20: "1",
  });

  const setInputsBSCU = (numberInput, bcsu) => {
    setInputOMUTRXID({
      ...inputOMUTRXID,
      [bcsu]: numberInput,
    });
  };

  const setInputsBSCUAsigned = (numberInput, bcsu) => {
    setBcsuAsignedTRX({
      ...bcsuAsignedTRX,
      [bcsu]: numberInput,
    });
  };

  //Obtengo la posicion de ese bcsu
  const posicionBCSU = (bcsu) => {
    let bcsuID = null;
    //Obtengo la propiedad (bcsu1, bcsu2, bcsu3) que tiene el valor, null si ninguno
    for (const prop in inputOMUTRXID) {
      if (inputOMUTRXID[prop] == bcsu) {
        bcsuID = prop;
        break;
      }
    }
    if (bcsuID !== null) {
      let posicion = bcsuID[bcsuID.length - 1];
      return Number(posicion) - 1;
    } else {
      return null;
    }
  };

  const getTRXSIGIP = (bcsu) => {
    let posicion = posicionBCSU(bcsu);
    if (posicion !== null) return IPOMUTRX[posicion][5];
    return "NO ENCONTRADO";
  };

  const getOMUSIGIP = (bcsu) => {
    let posicion = posicionBCSU(bcsu);
    if (posicion !== null) return IPOMUTRX[posicion][4];
    return "NO ENCONTRADO";
  };

  const getBCSUAvailable = () => {
    let arrayBCSUAvailable = [];
    IPOMUTRX.map((value, index) => {
      if (value[4] !== "SPARE")
        arrayBCSUAvailable.push(inputOMUTRXID[`bcsu${index + 1}`]);
    });
    console.log(arrayBCSUAvailable);
    return arrayBCSUAvailable;
  };

  //Obtengo el BSCU de OMUSIG
  const getBSCUOMUSIG = () => {
    let bcsuOMUSIG = "NO ENCONTRADO";
    IPOMUTRX.map((value, index) => {
      if (value[4] == ipAddressOmuSig) {
        bcsuOMUSIG = inputOMUTRXID[`bcsu${index + 1}`];
      }
    });
    return bcsuOMUSIG;
  };

  //Obtener un aleatorio entre lo BCSU disponibles
  const randomBCSU = () =>
    getBCSUAvailable()[Math.floor(Math.random() * getBCSUAvailable().length)];

  const setBCSUAvailable = () => {
    let arrayBCSUAvailable = getBCSUAvailable();
    let arrayBCSUAvailableAsigned = [];
    getIPOMUTRX.map((value, index) => {
      arrayBCSUAvailableAsigned.push(arrayBCSUAvailable[index]);
    });
  };

  //Obtengo todas las filas con BSCU
  const getIPOMUTRX = (sheet) => {
    console.log(
      sheet.filter(
        (value, index) =>
          index >= 8 && index < 20 && String(value[1]).substr(0, 2) == "BC"
      )
    );
    setIPOMUTRX(
      sheet.filter(
        (value, index) =>
          index >= 8 && index < 20 && String(value[1]).substr(0, 2) == "BC"
      )
    );
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const arrayData = await readXlsxFile(file);
        // console.log(arrayData.filter((value, index) => index >= 0));
        setData2G(
          arrayData.filter(
            (value, index) => index <= 26 && index >= 2 && value[0]
          )
        );
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };

  const handleFileDF2GUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const arrayDataBCSUIP = await readXlsxFile(file, { sheet: "BCSU_IP" });
        const arrayDataBTSIP = await readXlsxFile(file, { sheet: "@BTS_IP" });
        const arrayDataAbisBCF = await readXlsxFile(file, {
          sheet: "Abis BCF",
        });
        const arrayDataPacketAbis = await readXlsxFile(file, {
          sheet: "PacketAbis_LAPD_links",
        });
        const arrayAbisSCTP = await readXlsxFile(file, { sheet: "Abis SCTP" });

        //Setear el tipo de BSC
        setTypeBSC(arrayDataBCSUIP[0][2]);

        setDataDF2GSheet1(arrayDataBCSUIP);

        //Guardo info de BTS_IP:
        let arrayDataBTSIPFiltered = arrayDataBTSIP?.filter(
          (value, _) => value[24] == data2G[0][0]
        );
        console.log(arrayDataBTSIPFiltered);
        setDataDF2GSheet2(arrayDataBTSIPFiltered);

        //Filtro y guardo sola la fila con esa BCF
        let arrayDataAbisBCFFiltered = arrayDataAbisBCF?.filter(
          (value, _) => value[1] == data2G[0][13]
        );
        setDataDF2GSheet3(arrayDataAbisBCFFiltered);

        //Filtro y guardo solo las filas de esa BCF en PacketAbis_LAPD_links
        let arrayDataPacketAbisFiltered = arrayDataPacketAbis?.filter(
          (value, _) => value[1] == data2G[0][13]
        );
        setDataDF2GSheet4(arrayDataPacketAbisFiltered);

        //Filtro y guardo solo las filas de esa BCF en Abis SCTP
        let arrayAbisSCTPFiltered = arrayAbisSCTP?.splice(
          invertArray(arrayAbisSCTP)[1].findIndex(
            (e) =>
              e ==
              (arrayDataPacketAbis?.filter(
                (valueFilter, _) => valueFilter[1] == data2G[0][13]
              ))[0][4]
          ),

          invertArray(arrayAbisSCTP)[4].findIndex(
            (e) =>
              e ==
              (arrayDataPacketAbis?.filter(
                (valueFilter, _) => valueFilter[1] == data2G[0][13]
              ))[0][4]
          ) +
            arrayDataPacketAbis?.filter((value, _) => value[1] == data2G[0][13])
              .length +
            1
        );
        setDataDF2GSheet5(arrayAbisSCTPFiltered);
        getIPOMUTRX(arrayDataBCSUIP);

        // Guardo las BSCU sugeridas
        setBcsuAsignedTRX((prevState) => {
          const updatedBcsuAsignedTRX = { ...prevState }; // Crear una copia del estado actual

          arrayDataPacketAbisFiltered
            .filter((_, index) => index > 0)
            .forEach((value, indexFor) => {
              updatedBcsuAsignedTRX[`bcsuAsignedTRX${indexFor + 1}`] = value[7];
            });

          return updatedBcsuAsignedTRX; // Devolver la copia actualizada
        });

        console.log(arrayAbisSCTPFiltered);
        console.log(arrayDataAbisBCFFiltered);
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };

  // -------CARGA DE SCF(XML)--------
  const handleFileSCFUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const reader = new FileReader();

        reader.onload = (e) => {
          const xmlText = e.target.result;

          // Procesa el contenido del archivo XML (xmlText) aquí
          // Puedes utilizar el DOMParser para analizar el archivo XML y trabajar con los datos

          const parser = new DOMParser();
          const xmlDoc = parser.parseFromString(xmlText, "text/xml");
          const IPOMU = xmlDoc.querySelector(
            'p[name="mPlaneRemoteIpAddressOmuSig"]'
          ).textContent;

          setIpAddressOmuSig(IPOMU);

          console.log("Valor de mPlaneRemoteIpAddressOmuSig: " + IPOMU);
        };
        reader.readAsText(file);
      } catch (error) {
        console.log("Error al leer el archivo XML:", error);
      }
    }
  };

  return (
    <Center mt={5}>
      <Flex direction="column" alignItems="center" gap={5}>
        <Title title={`Crecimiento 2G`}></Title>
        {dataDF2GSheet1 && data2G && (
          <Heading
            mb={3}
            as="h3"
            size="lg"
            color="teal.600"
            bgColor={"whiteAlpha.900"}
            p={2}
            borderRadius="lg"
          >
            {data2G[0][0]}
          </Heading>
        )}

        <Flex gap={3}>
          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar RF Sheet</FormLabel>
            <Input
              type="file"
              onChange={handleFileUpload}
              maxW="max"
              color="gray.800"
              bgColor="gray.100"
            />
          </FormControl>

          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar DF</FormLabel>
            <Input
              type="file"
              onChange={handleFileDF2GUpload}
              maxW="max"
              bgColor="gray.100"
              color="gray.800"
            />
          </FormControl>

          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar SCF</FormLabel>
            <Input
              type="file"
              onChange={handleFileSCFUpload}
              maxW="max"
              bgColor="gray.100"
              color="gray.800"
            />
          </FormControl>
        </Flex>
        <BSCConection />
        {/* *******COMANDOS DF*********** */}
        {dataDF2GSheet1 && data2G && ipAddressOmuSig && (
          <Flex direction="column" gap={3}>
            <HStack gap={5}>
              <Tooltip label="ORDENAR BSCUs" placement="top">
                <TableContainer bgColor={"gray.200"}>
                  <Table
                    size="sm"
                    variant="striped"
                    colorScheme="teal"
                    borderRadius="3xl"
                    borderWidth={2}
                    borderColor={"teal.700"}
                  >
                    <Thead>
                      <Tr>
                        <Th>BCSU</Th>
                        <Th isNumeric>N° BCSU</Th>
                        <Th>OMUSIG</Th>
                        <Th>TRXSIG</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {IPOMUTRX.map((value, indexMap) => (
                        <Tr key={indexMap}>
                          <Td>{value[1]}</Td>
                          <Td>
                            <NumberInput
                              defaultValue={indexMap}
                              name={`bcsu${indexMap + 1}`}
                              min={0}
                              max={IPOMUTRX.length - 1}
                              size="xs"
                              width="100px"
                              bgColor="whiteAlpha.500"
                              onChange={(numberInput) =>
                                setInputsBSCU(
                                  numberInput,
                                  `bcsu${indexMap + 1}`
                                )
                              }
                            >
                              <NumberInputField />
                              <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                              </NumberInputStepper>
                            </NumberInput>
                          </Td>
                          <Td> {value[4]}</Td>
                          <Td>{value[5]}</Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                  <Comand
                    comand={`${dataDF2GSheet1[10][8]}`}
                    task="VERIFICAR IP DE OMUSIG"
                    color="yellow.200"
                  />
                  <Comand
                    comand={`${dataDF2GSheet1[11][8]}`}
                    task="VERIFICAR IP DE TRXSIG"
                    color="yellow.200"
                  />
                </TableContainer>
              </Tooltip>
              <Tooltip label="ASIGNAR BSCUs VÁLIDOS" placement="top">
                <TableContainer bgColor={"gray.200"}>
                  <Table
                    size="sm"
                    variant="striped"
                    colorScheme="teal"
                    borderRadius="3xl"
                    borderWidth={2}
                    borderColor={"teal.700"}
                  >
                    <Thead>
                      <Tr>
                        <Th>SCTP Association name</Th>
                        <Th isNumeric>N° BCSU</Th>
                        <Th>OMUSIG</Th>
                        <Th>TRXSIG</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Tr key={indexMap}>
                            <Td>{value[1]}</Td>
                            <Td>
                              <NumberInput
                                defaultValue={
                                  bcsuAsignedTRX[
                                    `bcsuAsignedTRX${indexMap + 1}`
                                  ]
                                }
                                name={`bcsuAsignedTRX${indexMap + 1}`}
                                min={0}
                                max={IPOMUTRX.length - 1}
                                size="xs"
                                width="100px"
                                bgColor="whiteAlpha.500"
                                onChange={(numberInput) =>
                                  setInputsBSCUAsigned(
                                    numberInput,
                                    `bcsuAsignedTRX${indexMap + 1}`
                                  )
                                }
                              >
                                <NumberInputField />
                                <NumberInputStepper>
                                  <NumberIncrementStepper />
                                  <NumberDecrementStepper />
                                </NumberInputStepper>
                              </NumberInput>
                            </Td>
                            <Td>
                              {getOMUSIGIP(
                                bcsuAsignedTRX[`bcsuAsignedTRX${indexMap + 1}`]
                              )}
                            </Td>
                            <Td>
                              {getTRXSIGIP(
                                bcsuAsignedTRX[`bcsuAsignedTRX${indexMap + 1}`]
                              )}
                            </Td>
                          </Tr>
                        ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Tooltip>
            </HStack>

            <Stack gap={3} m={5}></Stack>

            {/* --------COMANDOS SEÑALIZACION BCF----------- */}
            <BoxComands title="SEÑALIZACIÓN DE BCF(OMU)">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                  <Tab>Borrar</Tab>
                </TabList>
                <Tooltip label="CREAR ASOCIACION SCTP" placement="top">
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYX:${value[1]}:${value[2]}:${value[3]}:${
                              typeBSC === "mcBSC" ? "BCXU" : "BCSU"
                            },${getBSCUOMUSIG()}:${value[6]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYV:${value[2]}:NAME=${value[1]}:A;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYY:${value[2]}:${value[1]};`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>

              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                </TabList>
                <Tooltip
                  label="ASIGNAR DIRECCION IP A ASOCIACION"
                  placement="top"
                >
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYP:${value[2]}:${value[1]}:"${ipAddressOmuSig}",,${value[18]}:"${value[19]}",${value[22]},,,${value[18]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYV:${value[2]}:NAME=${value[1]}:A;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>

              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                  <Tab>Borrar</Tab>
                </TabList>
                <Tooltip label="CREAR DCHANNEL" placement="top">
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet4
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZDWP:${value[2]}:${
                              typeBSC === "mcBSC" ? "BCXU" : "BCSU"
                            },${getBSCUOMUSIG()}:${value[8]},${value[9]}:${
                              value[4]
                            },${value[5]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet4
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZDWQ:NAME=${value[2]};`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet4
                        .filter((_, index) => index == 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZDWD:NAME=${value[2]};`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>
            </BoxComands>
            {/* --------COMANDOS SEÑALIZACION TRX----------- */}
            <BoxComands title="SEÑALIZACIÓN DE TRX(TRXSIG)">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                  <Tab>Borrar</Tab>
                </TabList>
                <Tooltip label="CREAR ASOCIACIONES SCTP" placement="top">
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYX:${value[1]}:${value[2]}:${value[3]}:${
                              typeBSC === "mcBSC" ? "BCXU" : "BCSU"
                            },${
                              bcsuAsignedTRX[`bcsuAsignedTRX${indexMap + 1}`]
                            }:${value[6]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYV:${value[2]}:NAME=${value[1]}:A;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYY:${value[2]}:${value[1]};`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                </TabList>
                <Tooltip
                  label="ASIGNAR DIRECCION IP A ASOCIACIONES"
                  placement="top"
                >
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYP:${value[2]}:${
                              value[1]
                            }:"${getTRXSIGIP(
                              bcsuAsignedTRX[`bcsuAsignedTRX${indexMap + 1}`]
                            )}",,${value[18]}:"${value[19]}",${value[22]},,,${
                              value[18]
                            };`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYV:${value[2]}:NAME=${value[1]}:A;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                  <Tab>Borrar</Tab>
                </TabList>
                <Tooltip label="CREAR DCHANNELS" placement="top">
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet4
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZDWP:${value[2]}:${
                              typeBSC === "mcBSC" ? "BCXU" : "BCSU"
                            },${
                              bcsuAsignedTRX[`bcsuAsignedTRX${indexMap + 1}`]
                            }:${value[8]},${value[9]}:${value[4]},${value[5]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet4
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZDWQ:NAME=${value[2]};`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet4
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZDWD:NAME=${value[2]};`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                </TabList>
                <Tooltip label="ACTIVAR ASOCIACIONES" placement="top">
                  <TabPanels>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYS:${value[2]}:${value[1]}:ACT;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {dataDF2GSheet5
                        .filter((_, index) => index > 0)
                        .map((value, indexMap) => (
                          <Comand
                            comand={`ZOYV:${value[2]}:NAME=${value[1]}:A;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                    </TabPanel>
                  </TabPanels>
                </Tooltip>
              </Tabs>
            </BoxComands>

            {/* ------------CREACIÓN DE BCF------------- */}
            <BoxComands title="CREACIÓN DE BCF">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecimiento</Tab>
                  <Tab>Verificar</Tab>
                  <Tab>Borrar</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    {dataDF2GSheet3
                      .filter((_, index) => index == 0)
                      .map((value, indexMap) => (
                        <Flex key={indexMap} direction="column">
                          {typeBSC !== "mcBSC" && (
                            // AICT = 2 PERO ERA VALUE[4] VER
                            <Comand
                              comand={`ZEFC:${value[1]},${value[2]},R,2:DNAME=${value[10]}:::::BCUIP="${dataDF2GSheet2[0][11]}",SMCUP=${value[42]},BMIP="${value[43]}",SMMP=${value[44]},ETPGID=${value[23]},VLANID=${value[35]}::;`}
                              task="**FLEXI**"
                              color="green.100"
                            />
                          )}
                          {typeBSC === "mcBSC" && (
                            <Comand
                              comand={`ZEFC:${value[1]},${value[2]},R,2:DNAME=${value[10]}:::::BCUIP="${dataDF2GSheet2[0][11]}",SMCUP=${value[42]},BMIP="${value[43]}",SMMP=${value[44]},ETMEID=${value[23]},VLANID=${value[35]}::;`}
                              task="**MULTICONTROLER**"
                              color="green.100"
                            />
                          )}
                          <Comand
                            comand={`ZEFM:${value[1]}:CS=BSSTOP;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZEFM:${value[1]}::T200F=780;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZEFM:${value[1]}::T200F=780;`}
                            task=""
                            color="green.200"
                          />
                        </Flex>
                      ))}
                  </TabPanel>
                  <TabPanel>
                    {dataDF2GSheet3
                      .filter((_, index) => index == 0)
                      .map((value, indexMap) => (
                        <Flex key={indexMap} direction="column">
                          <Comand
                            comand={`ZEEI:BCF=${value[1]};`}
                            task=""
                            color="yellow.200"
                          />
                          <Comand
                            comand={`ZEFO:${value[1]}:ALL;`}
                            task=""
                            color="yellow.200"
                          />
                          <Comand
                            comand={`ZEFO:${value[1]}:IDE;`}
                            task=""
                            color="yellow.200"
                          />
                        </Flex>
                      ))}
                  </TabPanel>
                  <TabPanel>
                    {dataDF2GSheet3
                      .filter((_, index) => index == 0)
                      .map((value, indexMap) => (
                        <Flex key={indexMap} direction="column">
                          <Comand
                            comand={`ZEFS:${value[1]}:L;`}
                            task=""
                            color="red.200"
                          />
                          <Comand
                            comand={`ZEFD:${value[1]};`}
                            task=""
                            color="red.200"
                          />
                        </Flex>
                      ))}
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </BoxComands>
          </Flex>
        )}

        {/* *******COMANDOS RFSHEET************ */}
        {data2G && dataDF2GSheet1 && ipAddressOmuSig && (
          <Wrap>
            <WrapItem>
              <Flex direction="column" gap={3}>
                {typeBSC === "mcBSC" && (
                  <BoxComands title="CONFIGURACIÓN DE RUTAS ESTÁTICAS ETMA">
                    <Center m={5} p={5} backgroundColor="whiteAlpha.500">
                      <Tooltip label="ORDENAR ETME" placement="top">
                        <TableContainer bgColor={"gray.200"}>
                          <Table
                            size="sm"
                            variant="striped"
                            colorScheme="teal"
                            borderRadius="3xl"
                            borderWidth={2}
                            borderColor={"teal.700"}
                          >
                            <Thead>
                              <Tr>
                                <Th>ETME</Th>
                                <Th isNumeric>ETME-ID</Th>
                                <Th>IP</Th>
                              </Tr>
                            </Thead>
                            <Tbody>
                              {dataDF2GSheet1
                                .filter((_, index) => index >= 20 && index < 24)
                                .map((value, indexMap) => (
                                  <Tr key={indexMap}>
                                    <Td>{value[1].slice(0, -1)}</Td>
                                    <Td>
                                      <NumberInput
                                        min={0}
                                        max={4}
                                        size="xs"
                                        width="100px"
                                        bgColor="whiteAlpha.500"
                                      >
                                        <NumberInputField />
                                        <NumberInputStepper>
                                          <NumberIncrementStepper />
                                          <NumberDecrementStepper />
                                        </NumberInputStepper>
                                      </NumberInput>
                                    </Td>
                                    <Td> {value[4]}</Td>
                                  </Tr>
                                ))}
                            </Tbody>
                          </Table>
                          <Comand
                            comand={`${"ZQRI:ETME,::VLAN48:ALL;"}`}
                            task="VERIFICAR IP DE ETME"
                            color="yellow.200"
                          />
                        </TableContainer>
                      </Tooltip>
                      <TableContainer backgroundColor="whiteAlpha.800" m={3}>
                        <Table size="sm">
                          <Thead>
                            <Tr>
                              <Th>ETME-ID</Th>
                              <Th>IP BTS</Th>
                              <Th>MASK</Th>
                              <Th>SUBNET</Th>
                            </Tr>
                          </Thead>
                          <Tbody>
                            <Tr>
                              <Td>{dataDF2GSheet3[0][23]}</Td>
                              <Td>{dataDF2GSheet3[0][41]}</Td>
                              <Td>{dataDF2GSheet3[0][42]}</Td>
                              <Td bgColor="yellow.500">
                                {calculateNetwork(
                                  dataDF2GSheet3[0][41],
                                  dataDF2GSheet3[0][42]
                                )}
                              </Td>
                            </Tr>
                          </Tbody>
                        </Table>
                      </TableContainer>
                    </Center>
                    <Tabs variant="line" colorScheme="whiteAlpha">
                      <TabList bgColor="whiteAlpha.300" color="white">
                        <Tab>Crecimiento</Tab>
                        <Tab>Verificar</Tab>
                        <Tab>Borrar</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <Heading size="md" color="white">
                            ETME 2
                          </Heading>
                          <Comand
                            comand={`ZQKC:ETMA,0::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.92":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZQKC:ETMA,1::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.92":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZQKC:ETMA,2::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.92":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZQKC:ETMA,3::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.92":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Heading size="md" color="white">
                            ETME 3
                          </Heading>
                          <Comand
                            comand={`ZQKC:ETMA,0::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.93":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZQKC:ETMA,1::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.93":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZQKC:ETMA,2::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.93":LOG;`}
                            task=""
                            color="green.200"
                          />
                          <Comand
                            comand={`ZQKC:ETMA,3::"${calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42]
                            )}",30:"10.0.3.93":LOG;`}
                            task=""
                            color="green.200"
                          />
                        </TabPanel>
                        <TabPanel>
                          {[0, 1, 2, 3].map((value, indexMap) => (
                            <Comand
                              comand={`ZQKB:ETMA,${value};`}
                              task=""
                              color="yellow.200"
                              key={indexMap}
                            />
                          ))}
                        </TabPanel>
                        <TabPanel>
                          {[0, 1, 2, 3].map((value, indexMap) => (
                            <Comand
                              comand={`ZQKA:`}
                              task="Completar con valor correspondiente"
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </BoxComands>
                )}
                <BoxComands title="CREACION DE BTS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                      <Tab>Borrar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQC:BCF=${value[13]},BTS=${
                              value[14]
                            },NAME=${value[1]},SEG=${value[14]},SEGNAME=${
                              value[1]
                            }:CI=${value[10]},BAND=${
                              value[7] == "850" ? "800" : value[7]
                            }:NCC=${value[26]},BCC=${value[27]}:MCC=${getMCC(
                              value[174]
                            )},MNC=${getMNC(value[174])},LAC=${
                              value[24]
                            }:HOP=RF,HSN1=${value[69]},HSN2=${
                              value[70]
                            }:GENA=Y,RAC=${value[25]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEEI:BTS=${value[14]};`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQD:BTS=${value[14]}:Y;`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <Tooltip placement="top-start" label="MODIFICACION DE HOPPING">
                  <Box>
                    <BoxComands title="">
                      <Tabs variant="line" colorScheme="whiteAlpha">
                        <TabList bgColor="whiteAlpha.300" color="white">
                          <Tab>Crecimiento</Tab>
                          <Tab>Verificar</Tab>
                        </TabList>
                        <TabPanels>
                          <TabPanel>
                            {data2G.map((value, indexMap) => (
                              <Comand
                                comand={`ZEQE:BTS=${value[14]}:AHOP=${
                                  value[144] == 1 ? "Y" : "N"
                                };`}
                                task=""
                                color="green.200"
                                key={indexMap}
                              />
                            ))}
                          </TabPanel>
                          <TabPanel>
                            {data2G.map((value, indexMap) => (
                              <Comand
                                comand={`ZEQO:BTS=${value[14]}:HOP:;`}
                                task=""
                                color="yellow.200"
                                key={indexMap}
                              />
                            ))}
                          </TabPanel>
                        </TabPanels>
                      </Tabs>
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top-start"
                  label="HABILITO EN LAS BTS DIVERSIDADES TRX PRIORITY IN TCH ALLOCATION, DTX MODE, MS TXPWR MIN, MAX NUMBER OF RETRANSMISSION, NUMBER OF SLOTS SPREAD TRANS"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQM:BTS=${value[14]}:CB=Y,RDIV=${
                            value[143] == 1 ? "Y" : "N"
                          },TRP=${value[57]},DTX=1,PMIN=${
                            value[7] == "850" ? "13" : "14"
                          },RET=2,SLO=16,FRL=${value[77]},FRU=${
                            value[78]
                          },STIRC=${
                            value[145] == 1 ? "Y" : "N"
                          },:::QSRI=7,QSRP=7;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                        //VER PMIN que en 850 es 13 y aca 14!!!!!!!!!
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip label="MODIFICACION DE MEAS" placement="top-start">
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQB:BTS=${value[14]}:MEAS=N;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  label="HABILITO EN LAS BTS NUMBER OF MULTIFRAMES, TIMER FOR PERIODIC MS LOCATION UPDATING"
                  placement="top-start"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQJ:BTS=${value[14]}:MFR=4,PER=6.0;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  label="HABILITO EN LAS BTS PLMN PERMITTED, DIRECTED RETRY USED, CALL RE-ESTABLISHMENT ALLOWED, DIRECTED RETRY METHOD, MIN TIME LIMIT DIRECTED RETRY, MAX TIME LIMIT DIRECTED RETRY"
                  placement="top-start"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQF:BTS=${value[14]}:PLMN=0&&7,DR=Y,RE=Y,DRM=1,MIDR=2,MADR=7;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  label="HABILITO EN LAS BTS CELL RESELECT HYSTERESIS, RXLEV ACCESS MIN, RADIO LINK TIMEOUT"
                  placement="top-start"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQG:BTS=${value[14]}:HYS=6,RXP=${value[150]},RLT=${value[147]},GRXP=${value[151]};`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  label="HABILITO EN LAS BTS MAX QUEUE LENGTH, TIME LIMIT CALL, TIME LIMIT HANDOVER, QUEUEING PRIORITY CALL, QUEUEING PRIORITY URGENT HANDOVER, QUEUEING PRIORITY NON-URGENT HANDOVER"
                  placement="top-start"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQH:BTS=${value[14]}:MQL=25,TLC=7,TLH=2,QPC=9,QPH=8,QPN=10;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                {/* ****** FREC DE MAL************ */}
                <BoxComands title="MAL: CREAR MAL Y AGREGAR FRECUENCIA">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBE:MAL,${value[73]},${
                              value[7] == 850 ? "800" : value[7]
                            }:FREQ=${value[125]}${
                              value[126]
                                ? `&${value[126]}${
                                    value[127]
                                      ? `&${value[127]}${
                                          value[128]
                                            ? `&${value[128]}${
                                                value[129]
                                                  ? `&${value[129]}${
                                                      value[130]
                                                        ? `&${value[130]}${
                                                            value[131]
                                                              ? `&${
                                                                  value[131]
                                                                }${
                                                                  value[132]
                                                                    ? `&${
                                                                        value[132]
                                                                      }${
                                                                        value[133]
                                                                          ? `&${
                                                                              value[133]
                                                                            }${
                                                                              value[134]
                                                                                ? `&${value[134]}`
                                                                                : ""
                                                                            }`
                                                                          : ""
                                                                      }`
                                                                    : ""
                                                                }`
                                                              : ""
                                                          }`
                                                        : ""
                                                    }`
                                                  : ""
                                              }`
                                            : ""
                                        }`
                                      : ""
                                  }`
                                : ""
                            };`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBI:MAL,${value[73]};`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="ASOCIAR MAL A BTS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                      <Tab>Agregar frecuencias</Tab>
                      <Tab>Eliminar frecuencias</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQA:BTS=${value[14]}:MAL=${value[73]},MO=${value[74]},MS=${value[76]};`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQO:BTS=${value[14]}:HOP;`}
                            task=""
                            color="yellow.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBT:MAL,${value[73]},A:FREQ=${
                              value[125]
                            }${
                              value[126]
                                ? `&${value[126]}${
                                    value[127]
                                      ? `&${value[127]}${
                                          value[128]
                                            ? `&${value[128]}${
                                                value[129]
                                                  ? `&${value[129]}${
                                                      value[130]
                                                        ? `&${value[130]}${
                                                            value[131]
                                                              ? `&${
                                                                  value[131]
                                                                }${
                                                                  value[132]
                                                                    ? `&${
                                                                        value[132]
                                                                      }${
                                                                        value[133]
                                                                          ? `&${
                                                                              value[133]
                                                                            }${
                                                                              value[134]
                                                                                ? `&${value[134]}`
                                                                                : ""
                                                                            }`
                                                                          : ""
                                                                      }`
                                                                    : ""
                                                                }`
                                                              : ""
                                                          }`
                                                        : ""
                                                    }`
                                                  : ""
                                              }`
                                            : ""
                                        }`
                                      : ""
                                  }`
                                : ""
                            };`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEBT:MAL,${value[73]},R:FREQ=${
                              value[125]
                            }${
                              value[126]
                                ? `&${value[126]}${
                                    value[127]
                                      ? `&${value[127]}${
                                          value[128]
                                            ? `&${value[128]}${
                                                value[129]
                                                  ? `&${value[129]}${
                                                      value[130]
                                                        ? `&${value[130]}${
                                                            value[131]
                                                              ? `&${
                                                                  value[131]
                                                                }${
                                                                  value[132]
                                                                    ? `&${
                                                                        value[132]
                                                                      }${
                                                                        value[133]
                                                                          ? `&${
                                                                              value[133]
                                                                            }${
                                                                              value[134]
                                                                                ? `&${value[134]}`
                                                                                : ""
                                                                            }`
                                                                          : ""
                                                                      }`
                                                                    : ""
                                                                }`
                                                              : ""
                                                          }`
                                                        : ""
                                                    }`
                                                  : ""
                                              }`
                                            : ""
                                        }`
                                      : ""
                                  }`
                                : ""
                            };`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>

                  {/* ****REVISAR MO!! PORQUE LE PUSE 74 Y NO 75******* */}
                </BoxComands>
                <Tooltip
                  placement="top-start"
                  label="HABILITO LOS CODEC AMR HR A NIVEL DE BTS"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQY:BTS=${value[14]}:ARLT=${value[147]},HRC=1&4&16;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top-start"
                  label="HABILITO EN LAS BTS POWER CONTROL"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEUC:BTS=${value[14]};`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top-start"
                  label="HABILITO EN LAS BTS HANDOVER CONTROL"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEHC:BTS=${value[14]};`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip
                  placement="top-start"
                  label="MODIFICACIONES DE HANDOVER CONTROL"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEHG:BTS=${value[14]}:EFA=Y,EFP=Y,EFH=Y,HPP=4,HPU=4;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <BoxComands title="MODIFICACIONES DE HOC">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHN:BTS=${value[14]}:QSRC=${value[156]},WCP=${
                        value[157]
                      },LTSC=${value[158]},UMIU=${value[159]},IDE=${
                        value[160] ? "Y" : "N"
                      },FDMR=${value[161]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHA:BTS=${value[14]}:LDW=2,LUW=2,QDW=2,QUW=2;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHQ:BTS=${value[14]}:QDR=5,QUR=5;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHS:BTS=${value[14]}:LDR=-91,LUR=-101;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHI:BTS=${value[14]}:IDR=-76,IUR=-86;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEHD:BTS=${value[14]}:MSWS=20,MSP=10,MSN=16;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                </BoxComands>
                <BoxComands title="MODIFICACIONES DE POWER CONTROL">
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUG:BTS=${value[14]}:PENA=Y,PMAX2=${value[162]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUG:BTS=${value[14]}:PMAX1=${value[163]};`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUA:BTS=${value[14]}:LDW=2,LUW=2,QDW=2,QUW=2;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUQ:BTS=${value[14]}:UDP=4,UDN=4,UUP=4,UUN=4;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                  {data2G.map((value, indexMap) => (
                    <Comand
                      comand={`ZEUS:BTS=${value[14]}:UDR=-68,UUR=-78,LDR=-80,LUR=-90;`}
                      task=""
                      color="green.200"
                      key={indexMap}
                    />
                  ))}
                  <br />
                </BoxComands>
                <Tooltip
                  label="HABILITO EN LAS BTS DEDICATED GPRS CAPACITY, DEFAULT GPRS CAPACITY, MAX GPRS CAPACITY, PREFER BCCH FREQUENCY GPRS, GPRS ENABLED, EGPRS ENABLED, INITIAL MCS FOR UNACKNOWLEDGED MODE, MAXIMUM BLER IN ACKNOWLEDGED MODE, MAXIMUM BLER IN UNACKNOWLEDGED MODE, MEAN BEP OFFSET GMSK, MEAN BEP OFFSET 8PSK"
                  placement="top"
                >
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQV:BTS=${value[14]}:CDED=${
                            value[55]
                          },CDEF=${value[54]},CMAX=${value[53]},BFG=${
                            value[56]
                          },GENA=N,EGENA=${value[56] ? "Y" : "N"},MCU=6,BLA=${
                            value[85]
                          },BLU=${value[86]},MBG=0,MBP=0;`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip label="PARÁMETROS GPRS">
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEQV:BTS=${value[14]}:DLA=${value[79]},DLBH=${value[80]},ULBH=${value[83]},DLB=${value[81]},ULA=${value[82]},MCA=${value[137]},MCU=${value[138]},ULB=${value[84]},BLA=${value[85]},BLU=${value[86]};`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                <Tooltip label="PARÁMETROS POC">
                  <Box>
                    <BoxComands title="">
                      {data2G.map((value, indexMap) => (
                        <Comand
                          comand={`ZEUM:BTS=${value[14]}:ALPHA=${value[87]},GAMMA=${value[88]},BEP=${value[89]};`}
                          task=""
                          color="green.200"
                          key={indexMap}
                        />
                      ))}
                    </BoxComands>
                  </Box>
                </Tooltip>
                {/* *******TRX********** */}
                <BoxComands title="CREACIÓN DE TRX">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Crecimiento</Tab>
                      <Tab>Verificar</Tab>
                      <Tab>Borrar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERC:BTS=${
                                    value[14]
                                  },TRX=${contTRX}:PREF=${
                                    index == 0 ? "P" : "N"
                                  },GTRX=${
                                    value[29 + index * 2] ? "Y" : "N"
                                  },:FREQ=${value[28 + index * 2]},TSC=${
                                    value[27]
                                  },:DNAME=${
                                    "T" + toEXA(Number(value[13])) + contTRX
                                  }:CH0=${index == 0 ? "MBCCH" : "TCHD"},CH1=${
                                    index == 0 ? "SDCCB" : "TCHD"
                                  };`}
                                  task=""
                                  color="green.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                      <TabPanel>
                        <Comand
                          comand={`ZEEI:BCF=${data2G[0][13]};`}
                          task=""
                          color="yellow.200"
                        />
                      </TabPanel>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERD:BTS=${value[14]},TRX=${contTRX};`}
                                  task=""
                                  color="red.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="MODIFICACION DE TCH DE TRX (DUAL RATE - SDCCH - TCHD) POSIBILITANDO TAMBIEN CAMBIO DE FRECUENCIA">
                  {!!(contTRX = 0)}
                  {data2G.map((value, indexMap) =>
                    Array(value[6])
                      .fill()
                      .map((_, index) => {
                        contTRX++;
                        return (
                          <Comand
                            comand={`ZERM:BTS=${
                              value[14]
                            },TRX=${contTRX}:HRS=Y,FREQ=${
                              value[28 + index * 2]
                            },${
                              index == 0
                                ? "CH0=MBCCH,CH1=SDCCB,CH2=CCCHE,CH3=SDCCH,CH4=TCHD,CH5=TCHD,CH6=TCHD,CH7=TCHD"
                                : "CH0=TCHD,CH1=TCHD,CH2=TCHD,CH3=TCHD,CH4=TCHD,CH5=TCHD,CH6=TCHD,CH7=TCHD"
                            };`}
                            task=""
                            color="green.200"
                            key={index}
                          />
                        );
                      })
                  )}
                </BoxComands>
                <BoxComands title="HABILITO EN LAS BTS GPRS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Habilitar</Tab>
                      <Tab>Deshabilitar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQV:BTS=${value[14]}:GENA=Y, EGENA=Y;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQV:BTS=${value[14]}:GENA=N, EGENA=N;`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="DESBLOQUEAR TRX">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Desbloquear</Tab>
                      <Tab>Bloquear</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERS:BTS=${value[14]},TRX=${contTRX}:U;`}
                                  task=""
                                  color="green.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                      <TabPanel>
                        {!!(contTRX = 0)}
                        {data2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERS:BTS=${value[14]},TRX=${contTRX}:L;`}
                                  task=""
                                  color="red.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="DESBLOQUEAR BTS">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Desbloquear</Tab>
                      <Tab>Bloquear</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQS:BTS=${value[14]}:U;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                      <TabPanel>
                        {data2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQS:BTS=${value[14]}:L;`}
                            task=""
                            color="red.200"
                            key={indexMap}
                          />
                        ))}
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="DESBLOQUEAR BCF">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Desbloquear</Tab>
                      <Tab>Bloquear</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Comand
                          comand={`ZEFS:${data2G[0][13]}:U;`}
                          task=""
                          color="green.200"
                        />
                      </TabPanel>
                      <TabPanel>
                        <Comand
                          comand={`ZEFS:${data2G[0][13]}:L;`}
                          task=""
                          color="red.200"
                        />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
                <BoxComands title="DESBLOQUEAR OMU">
                  <Tabs variant="line" colorScheme="whiteAlpha">
                    <TabList bgColor="whiteAlpha.300" color="white">
                      <Tab>Desbloquear</Tab>
                      <Tab>Verificar</Tab>
                    </TabList>
                    <TabPanels>
                      <TabPanel>
                        <Comand
                          comand={`ZOYS:IUA:BCF${data2G[0][13]}OMU:ACT;`}
                          task=""
                          color="green.200"
                        />
                      </TabPanel>
                      <TabPanel>
                        <Comand
                          comand={`ZEEI:BCF=${data2G[0][13]};`}
                          task=""
                          color="yellow.200"
                        />
                      </TabPanel>
                    </TabPanels>
                  </Tabs>
                </BoxComands>
              </Flex>
            </WrapItem>
          </Wrap>
        )}
      </Flex>
    </Center>
  );
};
