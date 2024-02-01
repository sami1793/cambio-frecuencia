import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Title } from "../components/titles/Title";
import readXlsxFile from "read-excel-file";
import { invertArray } from "../utils/array";
import { BSCConection } from "../components/2G/BSCConection";

export const Dummy2G = () => {
  const [typeBSC, setTypeBSC] = useState("");

  const [dataRFSheet2G, setDataRFSheet2G] = useState("");

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
        setDataDF2GSheet2(arrayDataBTSIPFiltered);

        //Filtro y guardo sola la fila con esa BCF
        let arrayDataAbisBCFFiltered = arrayDataAbisBCF?.filter(
          (value, _) => value[1] == dataRFSheet2G[0][13]
        );
        setDataDF2GSheet3(arrayDataAbisBCFFiltered);

        //Filtro y guardo solo las filas de esa BCF en PacketAbis_LAPD_links
        let arrayDataPacketAbisFiltered = arrayDataPacketAbis?.filter(
          (value, _) => value[1] == dataRFSheet2G[0][13]
        );
        setDataDF2GSheet4(arrayDataPacketAbisFiltered);

        //Filtro y guardo solo las filas de esa BCF en Abis SCTP
        let arrayAbisSCTPFiltered = arrayAbisSCTP?.splice(
          invertArray(arrayAbisSCTP)[1].findIndex(
            (e) =>
              e ==
              (arrayDataPacketAbis?.filter(
                (valueFilter, _) => valueFilter[1] == dataRFSheet2G[0][13]
              ))[0][4]
          ),

          invertArray(arrayAbisSCTP)[4].findIndex(
            (e) =>
              e ==
              (arrayDataPacketAbis?.filter(
                (valueFilter, _) => valueFilter[1] == dataRFSheet2G[0][13]
              ))[0][4]
          ) +
            arrayDataPacketAbis?.filter(
              (value, _) => value[1] == dataRFSheet2G[0][13]
            ).length +
            1
        );
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
        console.log("Error al leer el archivo Excel:", error);
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
            bgColor={"whiteAlpha.900"}
            p={2}
            borderRadius="lg"
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
        {/* {dataDF2GSheet1 && dataRFSheet2G && ipAddressOmuSig && (
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
          </Flex>
        )} */}
      </Flex>
    </Center>
  );
};
