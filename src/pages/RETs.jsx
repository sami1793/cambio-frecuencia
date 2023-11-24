import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../components/titles/Title";
import readXlsxFile from "read-excel-file";

export const RETs = () => {
  const [dataHardware, setDataHardware] = useState("");
  const [dataCeldas2G, setDataCeldas2G] = useState("");
  const [dataCeldas3G, setDataCeldas3G] = useState("");
  const [dataCeldas4G, setDataCeldas4G] = useState("");
  const [dataCeldas5G, setDataCeldas5G] = useState("");

  // -------CARGA DE CO(Excel)--------
  const handleCOUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const arrayHardware = await readXlsxFile(file, { sheet: "Hardware" });
        const arrayCeldas2G = await readXlsxFile(file, { sheet: "Celdas 2G" });
        const arrayCeldas3G = await readXlsxFile(file, { sheet: "Celdas 3G" });
        const arrayCeldas4G = await readXlsxFile(file, {
          sheet: "Celdas 4G",
        });
        const arrayCeldas5G = await readXlsxFile(file, {
          sheet: "Celdas 5G",
        });

        setDataHardware(arrayHardware);
        //Filtro solo la info de datos 2G
        let arrayCeldas2GFiltered = arrayCeldas2G?.filter(
          (value, index) => value[3] && value[4] && index >= 3
        );
        setDataCeldas2G(arrayCeldas2GFiltered);

        //Filtro solo la info de datos 3G
        let arrayCeldas3GFiltered = arrayCeldas3G?.filter(
          (value, index) => value[2] && value[3] && index >= 2
        );
        setDataCeldas3G(arrayCeldas3GFiltered);

        //Filtro solo la info de datos 4G
        let arrayCeldas4GFiltered = arrayCeldas4G?.filter(
          (value, index) => value[2] && value[3] && index >= 2
        );
        setDataCeldas4G(arrayCeldas4GFiltered);
        setDataCeldas5G(arrayCeldas5G);

        console.log(arrayCeldas2GFiltered);
        console.log(arrayCeldas3G);
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };
  return (
    <Center mt={5} maxW="full">
      <Flex direction="column" alignItems="center" gap={5} mb={5}>
        <Title title={`RETs en Call Off`}></Title>
        <Flex gap={3}>
          <FormControl p={2} borderRadius="lg" color="white" bgColor="teal.500">
            <FormLabel>Cargar Call Off</FormLabel>
            <Input
              type="file"
              onChange={handleCOUpload}
              maxW="max"
              color="gray.800"
              bgColor="gray.100"
            />
          </FormControl>
        </Flex>
        <Flex gap={5}>
          {dataCeldas2G && dataCeldas2G.length !== 0 && (
            <TableContainer>
              <Table variant="striped" colorScheme="blackAlpha" border="1px">
                <Thead>
                  <Tr>
                    {/* <Th>TECNOLOGIA</Th> */}
                    <Th>ETIQUETA</Th>
                    <Th>ANTENA</Th>
                    <Th>TILT ELECTRICO</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataCeldas2G.map((value, indexMap) => (
                    <Tr key={indexMap}>
                      {/* <Td>{value[8]}</Td> */}
                      <Td>G{value[8].slice(-2)}</Td>
                      <Td>{value[9]}</Td>
                      <Td>{value[11]}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}
          {dataCeldas3G && dataCeldas3G.length !== 0 && (
            <TableContainer>
              <Table variant="striped" colorScheme="blackAlpha" border="1px">
                <Thead>
                  <Tr>
                    {/* <Th>TECNOLOGIA</Th> */}
                    <Th>ETIQUETA</Th>
                    <Th>ANTENA</Th>
                    <Th>TILT ELECTRICO</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {dataCeldas3G.map((value, indexMap) => (
                    <Tr key={indexMap}>
                      {/* <Td>{value[8]}</Td> */}
                      <Td>U{value[8].slice(-2)}</Td>
                      <Td>{value[9]}</Td>
                      <Td>{value[11]}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}
          {dataCeldas4G && dataCeldas4G.length !== 0 && (
            <TableContainer>
              <Table variant="striped" colorScheme="blackAlpha" border="1px">
                <Thead>
                  <Tr>
                    {/* <Th>TECNOLOGIA</Th> */}
                    <Th>ETIQUETA</Th>
                    <Th>ANTENA</Th>
                    <Th>TILT ELECTRICO</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {/* Divido por portadora a 4G */}
                  {dataCeldas4G
                    .filter(
                      (value, index) => value[2] === "F1" && value[5] !== "N"
                    )
                    .map((value, indexMap) => (
                      <Tr key={indexMap}>
                        {/* <Td>{value[8]}</Td> */}
                        <Td>L{value[8].slice(-2)}</Td>
                        <Td>{value[9]}</Td>
                        <Td>{value[11]}</Td>
                      </Tr>
                    ))}
                  <br />
                  {dataCeldas4G
                    .filter(
                      (value, index) => value[2] === "F2" && value[5] !== "N"
                    )
                    .map((value, indexMap) => (
                      <Tr key={indexMap}>
                        {/* <Td>{value[8]}</Td> */}
                        <Td>L{value[8].slice(-2)}</Td>
                        <Td>{value[9]}</Td>
                        <Td>{value[11]}</Td>
                      </Tr>
                    ))}
                  <br />
                  {dataCeldas4G
                    .filter(
                      (value, index) => value[2] === "F3" && value[5] !== "N"
                    )
                    .map((value, indexMap) => (
                      <Tr key={indexMap}>
                        {/* <Td>{value[8]}</Td> */}
                        <Td>L{value[8].slice(-2)}</Td>
                        <Td>{value[9]}</Td>
                        <Td>{value[11]}</Td>
                      </Tr>
                    ))}
                  <br />
                  {dataCeldas4G
                    .filter(
                      (value, index) => value[2] === "F4" && value[5] !== "N"
                    )
                    .map((value, indexMap) => (
                      <Tr key={indexMap}>
                        {/* <Td>{value[8]}</Td> */}
                        <Td>L{value[8].slice(-2)}</Td>
                        <Td>{value[9]}</Td>
                        <Td>{value[11]}</Td>
                      </Tr>
                    ))}
                  <br />
                  {dataCeldas4G
                    .filter(
                      (value, index) => value[2] === "F5" && value[5] !== "N"
                    )
                    .map((value, indexMap) => (
                      <Tr key={indexMap}>
                        {/* <Td>{value[8]}</Td> */}
                        <Td>L{value[8].slice(-2)}</Td>
                        <Td>{value[9]}</Td>
                        <Td>{value[11]}</Td>
                      </Tr>
                    ))}
                </Tbody>
              </Table>
            </TableContainer>
          )}
        </Flex>
      </Flex>
    </Center>
  );
};
