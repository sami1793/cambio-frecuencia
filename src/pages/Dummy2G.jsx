import {
  Box,
  Center,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { Title } from "../components/titles/Title";
import readXlsxFile from "read-excel-file";
import { invertArray } from "../utils/array";
import { BSCConection } from "../components/2G/BSCConection";
import { Comand } from "../components/comand/Comand";
import { BoxComands } from "../components/box/BoxComands";

import styles from "./Dummy2G.module.css";
import { calculateNetwork } from "../utils/calculatorIP";
import { restaStrings } from "../utils/Calculos";

export const Dummy2G = () => {
  const [typeBSC, setTypeBSC] = useState("");
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

  const [dataRFSheet2G, setDataRFSheet2G] = useState("");

  const [dataDF2GSheet1, setDataDF2GSheet1] = useState("");
  const [dataDF2GSheet2, setDataDF2GSheet2] = useState("");
  const [dataDF2GSheet3, setDataDF2GSheet3] = useState("");
  const [dataDF2GSheet4, setDataDF2GSheet4] = useState("");
  const [dataDF2GSheet5, setDataDF2GSheet5] = useState("");

  const [ipAddressOmuSig, setIpAddressOmuSig] = useState(null);
  const [BCFID, setBCFID] = useState(null);
  const [IPGESTION, setIPGESTION] = useState();

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

  const [ETMEID, setETMEID] = useState("");

  const [TRX, setTRX] = useState({
    trx1: "1",
    trx2: "2",
    trx3: "3",
    trx4: "4",
    trx5: "5",
    trx6: "6",
    trx7: "7",
    trx8: "8",
    trx9: "9",
    trx10: "10",
    trx11: "11",
    trx12: "12",
    trx13: "13",
    trx14: "14",
    trx15: "15",
    trx16: "16",
  });

  const handleETMEID = (e) => {
    setETMEID(e.target.value);
  };

  // ------FUNCIONES--------

  //Obtener todas las filas con BSCU
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

  const getOMUSIGIP = (bcsu) => {
    let posicion = posicionBCSU(bcsu);
    if (posicion !== null) return IPOMUTRX[posicion][4];
    return "NO ENCONTRADO";
  };

  const getTRXSIGIP = (bcsu) => {
    let posicion = posicionBCSU(bcsu);
    if (posicion !== null) return IPOMUTRX[posicion][5];
    return "NO ENCONTRADO";
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

  const setTRXAsigned = (numberInput, trx) => {
    setTRX({
      ...TRX,
      [trx]: numberInput,
    });
  };

  // --------------------------------------------------

  //   ----MANEJO CARGA DE ARCHIVO RFSHEET-----
  const handleFileRFSheetUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const arrayData = await readXlsxFile(file);
        console.log(arrayData.filter((value, index) => index >= 2));
        setDataRFSheet2G(
          arrayData.filter((value, index) => index >= 2 && value[0])
        );
        const bcfid = arrayData.filter((value, index) => index == 2)[0][13];
        setBCFID(bcfid);
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };
  // -------MANEJO CARGA DE ARCHIVO DF(Excel)--------
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

        //Guardar info de BTS_IP:
        let arrayDataBTSIPFiltered = arrayDataBTSIP?.filter(
          (value, _) => value[24] == dataRFSheet2G[0][0]
        );
        console.log(arrayDataBTSIPFiltered);
        if (arrayDataBTSIPFiltered.length === 0) {
          alert(`No se encuentra ${dataRFSheet2G[0][0]} en DF`);
          window.location.reload();
        }
        setDataDF2GSheet2(arrayDataBTSIPFiltered);

        //Filtro y guardo solo la fila con esa BCF
        let arrayDataAbisBCFFiltered = arrayDataAbisBCF?.filter(
          (value, _) => value[1] == BCFID
        );
        setDataDF2GSheet3(arrayDataAbisBCFFiltered);

        //Filtro y guardo solo las filas de esa BCF en PacketAbis_LAPD_links
        let arrayDataPacketAbisFiltered = arrayDataPacketAbis?.filter(
          (value, _) => value[1] == BCFID
        );

        //Filtro y guardo solo las filas de esa BCF en Abis SCTP
        let arrayDataPacketAbisUltimoDF = arrayDataPacketAbis?.filter(
          (value, _) => value[1] == BCFID
        );
        console.log(arrayDataPacketAbisUltimoDF);
        //Con esto me aseguro que solo se tome el ultimo OMU en caso que hayan otros viejos
        arrayDataPacketAbisUltimoDF = arrayDataPacketAbisUltimoDF.slice(
          arrayDataPacketAbisUltimoDF.findLastIndex(
            (element) => element[4] === `BCF${BCFID}OMU`
          )
        );
        setDataDF2GSheet4(arrayDataPacketAbisUltimoDF);

        let arrayAbisSCTPFiltered = arrayAbisSCTP?.splice(
          invertArray(arrayAbisSCTP)[1].findLastIndex(
            (e) =>
              e ==
              (arrayDataPacketAbis?.filter(
                (valueFilter, _) => valueFilter[1] == BCFID //dataRFSheet2G[0][13]
              ))[0][4]
          ),

          invertArray(arrayAbisSCTP)[4].findIndex(
            (e) =>
              e ==
              (arrayDataPacketAbis?.filter(
                (valueFilter, _) => valueFilter[1] == BCFID
              ))[0][4]
          ) +
            arrayDataPacketAbisUltimoDF.length +
            1
        );

        setIPGESTION(arrayAbisSCTPFiltered[0][19]);
        setDataDF2GSheet5(arrayAbisSCTPFiltered);
        getIPOMUTRX(arrayDataBCSUIP);

        // Guardar las BSCU sugeridas
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
        console.log("Error al leer DF:", error);
      }
    }
  };
  // -------MANEJO CARGA DE ARCHIVO SCF(XML)--------
  const handleFileSCFUpload = async (event) => {
    const file = event.target.files[0];

    if (file) {
      try {
        const reader = new FileReader();

        reader.onload = (e) => {
          const xmlText = e.target.result;

          // Procesa el contenido del archivo XML (xmlText) aquí
          // DOMParser analiza el archivo XML y permite trabajar con los datos

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
        <Title title={`Dummy 2G`}></Title>
        {dataRFSheet2G && (
          <Heading
            mb={3}
            as="h3"
            size="lg"
            color="teal.600"
            // bgColor={"whiteAlpha.900"}
            p={2}
            borderRadius="lg"
            className={styles.siteName}
          >
            {dataRFSheet2G[0][0]}
          </Heading>
        )}
        {/* ---INPUTS DE CARGA DE ARCHIVOS--- */}
        <Flex gap={3}>
          {/* CARGA RFSHEET */}
          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar RF Sheet</FormLabel>
            <Input
              type="file"
              onChange={handleFileRFSheetUpload}
              maxW="max"
              color="gray.800"
              bgColor="gray.100"
            />
          </FormControl>
          {/* CARGA DF */}
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
          {/* CARGA SCF */}
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
        {/* CONEXION AL 2G */}
        <BSCConection />

        {dataDF2GSheet1 && dataRFSheet2G && ipAddressOmuSig && (
          <Flex direction="column" gap={3}>
            {/* ORDENAMIENTO BSCU */}
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
                      {/* <Th>BCSU</Th> */}
                      <Th>N° BCSU</Th>
                      <Th>OMUSIG</Th>
                      <Th>TRXSIG</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {IPOMUTRX.map((value, indexMap) => (
                      <Tr key={indexMap}>
                        {/* <Td>{value[1]}</Td> */}
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
                              setInputsBSCU(numberInput, `bcsu${indexMap + 1}`)
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

            {/* --------VERIFICACIÓN DE SITIO----------- */}
            <BoxComands title="VERIFICAR SITIO">
              <Comand
                comand={`ZEEI:BCF=${BCFID};`}
                task=""
                color="yellow.200"
              />
              <HStack mt={3} justifyContent={"center"}>
                <Tooltip
                  label="ORDENAR SEGÚN COMO ESTABAN ANTES TRXs"
                  placement="top"
                >
                  <TableContainer bgColor={"gray.200"}>
                    <Table
                      size="sm"
                      variant="striped"
                      colorScheme="teal"
                      borderRadius="3xl"
                      borderWidth={2}
                      borderColor={"teal.700"}
                      width="max-content"
                    >
                      <Thead>
                        <Tr>
                          <Th></Th>
                          <Th isNumeric>N° TRX</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {dataDF2GSheet5
                          .filter((_, index) => index > 0)
                          .map((value, indexMap) => (
                            <Tr key={indexMap}>
                              <Td>TRX</Td>
                              <Td>
                                <NumberInput
                                  defaultValue={
                                    TRX[`trx${indexMap + 1}`]
                                    // bcsuAsignedTRX[
                                    //   `bcsuAsignedTRX${indexMap + 1}`
                                    // ]
                                  }
                                  name={`trx${indexMap + 1}`}
                                  min={1}
                                  size="xs"
                                  width="100px"
                                  bgColor="whiteAlpha.500"
                                  onChange={(numberInput) =>
                                    setTRXAsigned(
                                      numberInput,
                                      `trx${indexMap + 1}`
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
                            </Tr>
                          ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Tooltip>
                <Tooltip label="ORDENAR SEGÚN COMO ESTÁ" placement="top">
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
                        <Tr>
                          <Td>{`BCF${BCFID}OMU`}</Td>
                          <Td>
                            <NumberInput
                              defaultValue={bcsuAsignedTRX[`bcsuAsignedOMU`]}
                              name={`bcsuAsignedOMU`}
                              min={0}
                              max={IPOMUTRX.length - 1}
                              size="xs"
                              width="100px"
                              bgColor="whiteAlpha.500"
                              onChange={(numberInput) =>
                                setInputsBSCUAsigned(
                                  numberInput,
                                  `bcsuAsignedOMU`
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
                            {getOMUSIGIP(bcsuAsignedTRX[`bcsuAsignedOMU`])}
                          </Td>
                          <Td>
                            {getTRXSIGIP(bcsuAsignedTRX[`bcsuAsignedOMU`])}
                          </Td>
                        </Tr>
                        {dataDF2GSheet5
                          .filter((_, index) => index > 0)
                          .map((value, indexMap) => (
                            <Tr key={indexMap}>
                              <Td>{`BCF${BCFID}TRX${
                                TRX[`trx${indexMap + 1}`]
                              }`}</Td>
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
                                  bcsuAsignedTRX[
                                    `bcsuAsignedTRX${indexMap + 1}`
                                  ]
                                )}
                              </Td>
                              <Td>
                                {getTRXSIGIP(
                                  bcsuAsignedTRX[
                                    `bcsuAsignedTRX${indexMap + 1}`
                                  ]
                                )}
                              </Td>
                            </Tr>
                          ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Tooltip>
              </HStack>
            </BoxComands>
            <BoxComands title="BLOQUEAR ELEMENTOS">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Bloquear</Tab>
                  <Tab>Desbloquear</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      {/* ---BLOQUEO DE BCF--- */}
                      <Tooltip label="BLOQUEAR BCF" placement="top">
                        <Box>
                          <Comand
                            comand={`ZEFS:${BCFID}:L;`}
                            task=""
                            color="red.200"
                          />
                        </Box>
                      </Tooltip>

                      {/* ---BLOQUEO DE BTS--- */}
                      <Tooltip label="BLOQUEAR BTS" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) => (
                            <Comand
                              comand={`ZEQS:BTS=${value[14]}:L;`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Tooltip>

                      {/* ---BLOQUEO DE TRX--- */}
                      {!!(contTRX = 0)}
                      <Tooltip label="BLOQUEAR TRXs" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) =>
                            Array(value[6])
                              .fill()
                              .map((_, index) => {
                                contTRX++;
                                return (
                                  <Comand
                                    comand={`ZERS:BTS=${value[14]},TRX=${
                                      TRX[`trx${contTRX}`]
                                    }:L;`}
                                    task=""
                                    color="red.200"
                                    key={index}
                                  />
                                );
                              })
                          )}
                        </Box>
                      </Tooltip>

                      {/* ---DESHABILITAR GPRS--- */}
                      <Tooltip label="DESHABILITAR GENA" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) => (
                            <Comand
                              comand={`ZEQV:BTS=${value[14]}:GENA=N, EGENA=N;`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Comand
                        comand={`ZEFS:${BCFID}:U;`}
                        task=""
                        color="green.200"
                      />

                      <Box>
                        {dataRFSheet2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQS:BTS=${value[14]}:U;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </Box>

                      {!!(contTRX = 0)}
                      <Box>
                        {dataRFSheet2G.map((value, indexMap) =>
                          Array(value[6])
                            .fill()
                            .map((_, index) => {
                              contTRX++;
                              return (
                                <Comand
                                  comand={`ZERS:BTS=${value[14]},TRX=${
                                    TRX[`trx${contTRX}`]
                                  }:U;`}
                                  task=""
                                  color="green.200"
                                  key={index}
                                />
                              );
                            })
                        )}
                      </Box>

                      <Box>
                        {dataRFSheet2G.map((value, indexMap) => (
                          <Comand
                            comand={`ZEQV:BTS=${value[14]}:GENA=Y, EGENA=Y;`}
                            task=""
                            color="green.200"
                            key={indexMap}
                          />
                        ))}
                      </Box>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </BoxComands>

            {/* ---COMANDOS SEÑALIZACIÓN DOWN--- */}
            <BoxComands title="SEÑALIZACIÓN DOWN">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>DOWN</Tab>
                  <Tab>ACT</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Tooltip label="SEÑALIZACIÓN OMU DOWN" placement="top">
                        <Box>
                          <Comand
                            comand={`ZOYS:IUA:BCF${BCFID}OMU:DOWN;`}
                            task=""
                            color="red.200"
                          />
                        </Box>
                      </Tooltip>

                      <Tooltip label="SEÑALIZACIÓN TRXs DOWN" placement="top">
                        <Box>
                          {dataDF2GSheet5
                            .filter((_, index) => index > 0)
                            .map((value, indexMap) => {
                              // contTRX++;
                              return (
                                <Comand
                                  comand={`ZOYS:${value[2]}:BCF${BCFID}TRX${
                                    TRX[`trx${indexMap + 1}`]
                                  }:DOWN;`}
                                  task=""
                                  color="red.200"
                                  key={indexMap}
                                />
                              );
                            })}
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Tooltip label="SEÑALIZACIÓN OMU ACT" placement="top">
                        <Box>
                          <Comand
                            comand={`ZOYS:IUA:BCF${BCFID}OMU:ACT;`}
                            task=""
                            color="green.200"
                          />
                        </Box>
                      </Tooltip>

                      <Tooltip label="SEÑALIZACIÓN TRXs ACT" placement="top">
                        <Box>
                          {dataDF2GSheet5
                            .filter((_, index) => index > 0)
                            .map((value, indexMap) => (
                              <Comand
                                comand={`ZOYS:${value[2]}:BCF${BCFID}TRX${
                                  TRX[`trx${indexMap + 1}`]
                                }:ACT;`}
                                task=""
                                color="green.200"
                                key={indexMap}
                              />
                            ))}
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </BoxComands>

            {/* ---COMANDOS CRECER SEÑALIZACIÓN--- */}
            <BoxComands title="CRECER SEÑALIZACIÓN">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Crecer</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Tooltip label="SEÑALIZACIÓN OMU" placement="top">
                        <Box>
                          {dataDF2GSheet5
                            .filter((_, index) => index == 0)
                            .map((value, indexMap) => (
                              <Comand
                                comand={`ZOYP:${
                                  value[2]
                                }:BCF${BCFID}OMU:"${getOMUSIGIP(
                                  bcsuAsignedTRX[`bcsuAsignedOMU`]
                                )}",,${value[18]}:"${value[19]}",${
                                  value[22]
                                },,,${value[18]};`}
                                task=""
                                color="green.200"
                                key={indexMap}
                              />
                            ))}
                        </Box>
                      </Tooltip>

                      <Tooltip label="SEÑALIZACIÓN TRXs" placement="top">
                        <Box>
                          {dataDF2GSheet5
                            .filter((_, index) => index > 0)
                            .map((value, indexMap) => (
                              <Comand
                                comand={`ZOYP:${value[2]}:BCF${BCFID}TRX${
                                  TRX[`trx${indexMap + 1}`]
                                }:"${getTRXSIGIP(
                                  bcsuAsignedTRX[
                                    `bcsuAsignedTRX${indexMap + 1}`
                                  ]
                                )}",,${value[18]}:"${value[19]}",${
                                  value[22]
                                },,,${
                                  value[18] +
                                  restaStrings(
                                    TRX[`trx${indexMap + 1}`],
                                    TRX[`trx${indexMap}`]
                                      ? TRX[`trx${indexMap}`]
                                      : 0
                                  ) -
                                  1
                                };`}
                                task=""
                                color="green.200"
                                key={indexMap}
                              />
                            ))}
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                  {/* <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Tooltip label="SEÑALIZACIÓN OMU ACT" placement="top">
                        <Box>
                          <Comand
                            comand={`ZOYS:IUA:BCF${dataRFSheet2G[0][13]}OMU:ACT;`}
                            task=""
                            color="green.200"
                          />
                        </Box>
                      </Tooltip>

                      <Tooltip label="SEÑALIZACIÓN TRXs ACT" placement="top">
                        <Box>
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
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel> */}
                </TabPanels>
              </Tabs>
            </BoxComands>

            <BoxComands title="ACTUALIZAR BCF">
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem colSpan={1}>
                  <Comand
                    comand={`ZEFO:${BCFID}:IDE;`}
                    task=""
                    color="yellow.200"
                  />
                  <FormControl
                    p={3}
                    mt={5}
                    mb={5}
                    backgroundColor="whiteAlpha.900"
                    borderRadius={5}
                  >
                    <FormLabel>ETME ID</FormLabel>
                    <Input
                      type="number"
                      value={ETMEID}
                      onChange={handleETMEID}
                    />
                    <FormHelperText>
                      Completar con ETME ID de comando anterior
                    </FormHelperText>
                  </FormControl>
                </GridItem>
                <GridItem colSpan={1}></GridItem>
              </Grid>

              {/* <Input labelName="BCF">
                <InputChakra
                  type="number"
                  name="bcf"
                  // value={inputs.bcf}
                  bg="whiteAlpha.800"
                  // onChange={handleChange}
                />
              </Input> */}

              <Box>
                {dataDF2GSheet3
                  .filter((_, index) => index == 0)
                  .map((value, indexMap) => (
                    <Flex key={indexMap} direction="column">
                      {typeBSC !== "mcBSC" && (
                        // AICT = 2 PERO ERA VALUE[4] VER
                        <Comand
                          comand={`ZEFM:${value[1]}::::BCUIP="${
                            dataDF2GSheet2[0][11]
                          }",SMCUP=${
                            value[42] > 32 ? "30" : value[42]
                          },BMIP="${IPGESTION}",SMMP=${
                            value[44] > 32 ? "30" : value[44]
                          },ETPGID=${ETMEID},VLANID=${value[35]}::;`}
                          task="**FLEXI**"
                          color="green.100"
                        />
                      )}
                      {typeBSC === "mcBSC" && (
                        <Comand
                          comand={`ZEFM:${value[1]}::::BCUIP="${
                            dataDF2GSheet2[0][11]
                          }",SMCUP=${
                            value[42] > 32 ? "30" : value[42]
                          },BMIP="${IPGESTION}",SMMP=${
                            value[44] > 32 ? "30" : value[44]
                          },ETMEID=${ETMEID},VLANID=${value[35]}::;`}
                          task="**MULTICONTROLER**"
                          color="green.100"
                        />
                      )}
                    </Flex>
                  ))}
              </Box>
            </BoxComands>

            {/* CONFIGURACION DE ETMA */}
            {typeBSC === "mcBSC" && (
              <BoxComands title="CONFIGURACIÓN DE RUTAS ESTÁTICAS ETMA">
                <HStack m={5} p={5} backgroundColor="whiteAlpha.500">
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
                          {/* Viene mal la mascara en el DF */}
                          <Td>{dataDF2GSheet3[0][23]}</Td>
                          <Td>{dataDF2GSheet3[0][41]}</Td>
                          <Td>
                            {dataDF2GSheet3[0][42] > 30
                              ? "30"
                              : dataDF2GSheet3[0][42]}
                          </Td>
                          <Td bgColor="yellow.500">
                            {calculateNetwork(
                              dataDF2GSheet3[0][41],
                              dataDF2GSheet3[0][42] > 30
                                ? "30"
                                : dataDF2GSheet3[0][42]
                            )}
                          </Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </HStack>
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
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
                        )}",30:"10.0.3.92":LOG;`}
                        task=""
                        color="green.200"
                      />
                      <Comand
                        comand={`ZQKC:ETMA,1::"${calculateNetwork(
                          dataDF2GSheet3[0][41],
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
                        )}",30:"10.0.3.92":LOG;`}
                        task=""
                        color="green.200"
                      />
                      <Comand
                        comand={`ZQKC:ETMA,2::"${calculateNetwork(
                          dataDF2GSheet3[0][41],
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
                        )}",30:"10.0.3.92":LOG;`}
                        task=""
                        color="green.200"
                      />
                      <Comand
                        comand={`ZQKC:ETMA,3::"${calculateNetwork(
                          dataDF2GSheet3[0][41],
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
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
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
                        )}",30:"10.0.3.93":LOG;`}
                        task=""
                        color="green.200"
                      />
                      <Comand
                        comand={`ZQKC:ETMA,1::"${calculateNetwork(
                          dataDF2GSheet3[0][41],
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
                        )}",30:"10.0.3.93":LOG;`}
                        task=""
                        color="green.200"
                      />
                      <Comand
                        comand={`ZQKC:ETMA,2::"${calculateNetwork(
                          dataDF2GSheet3[0][41],
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
                        )}",30:"10.0.3.93":LOG;`}
                        task=""
                        color="green.200"
                      />
                      <Comand
                        comand={`ZQKC:ETMA,3::"${calculateNetwork(
                          dataDF2GSheet3[0][41],
                          dataDF2GSheet3[0][42] > 30
                            ? "30"
                            : dataDF2GSheet3[0][42]
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

            {/* ---COMANDOS ACTIVAR SEÑALIZACIÓN--- */}
            <BoxComands title="SEÑALIZACIÓN ACT">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>ACT</Tab>
                  <Tab>DOWN</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Tooltip label="SEÑALIZACIÓN TRXs ACT" placement="top">
                        <Box>
                          {dataDF2GSheet5
                            .filter((_, index) => index > 0)
                            .map((value, indexMap) => (
                              <Comand
                                comand={`ZOYS:${value[2]}:BCF${BCFID}TRX${
                                  TRX[`trx${indexMap + 1}`]
                                }:ACT;`}
                                task=""
                                color="green.200"
                                key={indexMap}
                              />
                            ))}
                        </Box>
                      </Tooltip>
                      <Tooltip label="SEÑALIZACIÓN OMU ACT" placement="top">
                        <Box>
                          <Comand
                            comand={`ZOYS:IUA:BCF${BCFID}OMU:ACT;`}
                            task=""
                            color="green.200"
                          />
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      <Tooltip label="SEÑALIZACIÓN TRXs DOWN" placement="top">
                        <Box>
                          {dataDF2GSheet5
                            .filter((_, index) => index > 0)
                            .map((value, indexMap) => {
                              // contTRX++;
                              return (
                                <Comand
                                  comand={`ZOYS:${value[2]}:BCF${BCFID}TRX${
                                    TRX[`trx${indexMap + 1}`]
                                  }:DOWN;`}
                                  task=""
                                  color="red.200"
                                  key={indexMap}
                                />
                              );
                            })}
                        </Box>
                      </Tooltip>
                      <Tooltip label="SEÑALIZACIÓN OMU DOWN" placement="top">
                        <Box>
                          <Comand
                            comand={`ZOYS:IUA:BCF${BCFID}OMU:DOWN;`}
                            task=""
                            color="red.200"
                          />
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </BoxComands>

            {/* ---COMANDOS DESBLOQUEAR ELEMENTOS--- */}
            <BoxComands title="DESBLOQUEAR ELEMENTOS">
              <Tabs variant="line" colorScheme="whiteAlpha">
                <TabList bgColor="whiteAlpha.300" color="white">
                  <Tab>Desbloquear</Tab>
                  <Tab>Bloquear</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      {/* ---HABILITAR GPRS--- */}
                      <Tooltip label="HABILITAR GENA" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) => (
                            <Comand
                              comand={`ZEQV:BTS=${value[14]}:GENA=Y, EGENA=Y;`}
                              task=""
                              color="green.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Tooltip>

                      {/* ---DESBLOQUEO DE TRX--- */}
                      {!!(contTRX = 0)}
                      <Tooltip label="DESBLOQUEAR TRXs" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) =>
                            Array(value[6])
                              .fill()
                              .map((_, index) => {
                                contTRX++;
                                return (
                                  <Comand
                                    comand={`ZERS:BTS=${value[14]},TRX=${
                                      TRX[`trx${contTRX}`]
                                    }:U;`}
                                    task=""
                                    color="green.200"
                                    key={index}
                                  />
                                );
                              })
                          )}
                        </Box>
                      </Tooltip>

                      {/* ---DESBLOQUEO DE BTS--- */}
                      <Tooltip label="DESBLOQUEAR BTS" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) => (
                            <Comand
                              comand={`ZEQS:BTS=${value[14]}:U;`}
                              task=""
                              color="green.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Tooltip>

                      {/* ---DESBLOQUEO DE BCF--- */}
                      <Tooltip label="DESBLOQUEAR BCF" placement="top">
                        <Box>
                          <Comand
                            comand={`ZEFS:${BCFID}:U;`}
                            task=""
                            color="green.200"
                          />
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex direction="column" gap={5}>
                      {/* ---DESHABILITAR GPRS--- */}
                      <Tooltip label="DESHABILITAR GENA" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) => (
                            <Comand
                              comand={`ZEQV:BTS=${value[14]}:GENA=N, EGENA=N;`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Tooltip>

                      {/* ---BLOQUEO DE TRX--- */}
                      {!!(contTRX = 0)}
                      <Tooltip label="BLOQUEAR TRXs" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) =>
                            Array(value[6])
                              .fill()
                              .map((_, index) => {
                                contTRX++;
                                return (
                                  <Comand
                                    comand={`ZERS:BTS=${value[14]},TRX=${
                                      TRX[`trx${contTRX}`]
                                    }:L;`}
                                    task=""
                                    color="red.200"
                                    key={index}
                                  />
                                );
                              })
                          )}
                        </Box>
                      </Tooltip>

                      {/* ---BLOQUEO DE BTS--- */}
                      <Tooltip label="BLOQUEAR BTS" placement="top">
                        <Box>
                          {dataRFSheet2G.map((value, indexMap) => (
                            <Comand
                              comand={`ZEQS:BTS=${value[14]}:L;`}
                              task=""
                              color="red.200"
                              key={indexMap}
                            />
                          ))}
                        </Box>
                      </Tooltip>

                      {/* ---BLOQUEO DE BCF--- */}
                      <Tooltip label="BLOQUEAR BCF" placement="top">
                        <Box>
                          <Comand
                            comand={`ZEFS:${BCFID}:L;`}
                            task=""
                            color="red.200"
                          />
                        </Box>
                      </Tooltip>
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </BoxComands>
          </Flex>
        )}
      </Flex>
    </Center>
  );
};
