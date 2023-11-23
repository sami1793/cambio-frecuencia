import { Center, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import { Title } from "../components/titles/Title";
import readXlsxFile from "read-excel-file";

export const RETs = () => {
  const [dataCeldas2G, setDataCeldas2G] = useState("");
  const [dataCeldas3G, setDataCeldas3G] = useState("");
  const [dataCeldas4G, setDataCeldas4G] = useState("");
  const [dataCeldas5G, setDataCeldas5G] = useState("");

  // -------CARGA DE CO(Excel)--------
  const handleCOUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const arrayCeldas2G = await readXlsxFile(file, { sheet: "Celdas 2G" });
        const arrayCeldas3G = await readXlsxFile(file, { sheet: "Celdas 3G" });
        const arrayCeldas4G = await readXlsxFile(file, {
          sheet: "Celdas 4G",
        });
        const arrayCeldas5G = await readXlsxFile(file, {
          sheet: "Celdas 5G",
        });

        setDataCeldas2G(arrayCeldas2G);
        setDataCeldas3G(arrayCeldas3G);
        setDataCeldas4G(arrayCeldas4G);
        setDataCeldas5G(arrayCeldas5G);

        // //Guardo info de BTS_IP:
        // let arrayDataBTSIPFiltered = arrayDataBTSIP?.filter(
        //   (value, _) => value[24] == data2G[0][0]
        // );
        // console.log(arrayDataBTSIPFiltered);
        // setDataDF2GSheet2(arrayDataBTSIPFiltered);

        // //Filtro y guardo sola la fila con esa BCF
        // let arrayDataAbisBCFFiltered = arrayDataAbisBCF?.filter(
        //   (value, _) => value[1] == data2G[0][13]
        // );
        // setDataDF2GSheet3(arrayDataAbisBCFFiltered);

        // //Filtro y guardo solo las filas de esa BCF en PacketAbis_LAPD_links
        // let arrayDataPacketAbisFiltered = arrayDataPacketAbis?.filter(
        //   (value, _) => value[1] == data2G[0][13]
        // );
        // setDataDF2GSheet4(arrayDataPacketAbisFiltered);

        // //Filtro y guardo solo las filas de esa BCF en Abis SCTP
        // let arrayAbisSCTPFiltered = arrayAbisSCTP?.splice(
        //   invertArray(arrayAbisSCTP)[1].findIndex(
        //     (e) =>
        //       e ==
        //       (arrayDataPacketAbis?.filter(
        //         (valueFilter, _) => valueFilter[1] == data2G[0][13]
        //       ))[0][4]
        //   ),

        //   invertArray(arrayAbisSCTP)[4].findIndex(
        //     (e) =>
        //       e ==
        //       (arrayDataPacketAbis?.filter(
        //         (valueFilter, _) => valueFilter[1] == data2G[0][13]
        //       ))[0][4]
        //   ) +
        //     arrayDataPacketAbis?.filter((value, _) => value[1] == data2G[0][13])
        //       .length +
        //     1
        // );
        // setDataDF2GSheet5(arrayAbisSCTPFiltered);
        // getIPOMUTRX(arrayDataBCSUIP);

        // // Guardo las BSCU sugeridas
        // setBcsuAsignedTRX((prevState) => {
        //   const updatedBcsuAsignedTRX = { ...prevState }; // Crear una copia del estado actual

        //   arrayDataPacketAbisFiltered
        //     .filter((_, index) => index > 0)
        //     .forEach((value, indexFor) => {
        //       updatedBcsuAsignedTRX[`bcsuAsignedTRX${indexFor + 1}`] = value[7];
        //     });

        //   return updatedBcsuAsignedTRX; // Devolver la copia actualizada
        // });

        console.log(arrayCeldas2G);
        console.log(arrayCeldas3G);
      } catch (error) {
        console.log("Error al leer el archivo Excel:", error);
      }
    }
  };
  return (
    <Center mt={5}>
      <Flex direction="column" alignItems="center" gap={5}>
        <Title title={`RETs`}></Title>
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
      </Flex>
    </Center>
  );
};
