import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Input,
  Select,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";

export const RNCConector = () => {
  const initialDataRNCConection = {
    user: "",
    rnc: "",
  };
  const [dataRNCConection, setDataRNCConection] = useState(
    initialDataRNCConection
  );
  const handleChange = (e) => {
    setDataRNCConection({
      ...dataRNCConection,
      [e.target.name]: e.target.value,
    });
  };
  const toast = useToast();
  const copyCredencials = () => {
    navigator.clipboard.writeText(
      `ssh -p 4422 "CTIMOVIL\\${dataRNCConection.user.toLocaleUpperCase()}@BOIR01@${
        dataRNCConection.rnc
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
    <Center mt={5}>
      <Box bg="blue.700" p={3} borderRadius="md">
        <Heading size="sm" mb={3} color="white">
          Conectar a RNC
        </Heading>
        <Flex gap={3} w="full" justifyContent="center" bg="gray.200" p={2}>
          <Input
            bg="white"
            placeholder="Escriba su exa.."
            w="fit-content"
            name="user"
            value={dataRNCConection.user}
            onChange={handleChange}
          />

          <Select
            bg="white"
            placeholder="Seleccionar MSS"
            w="fit-content"
            name="mss"
            value={dataRNCConection.rnc}
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
    </Center>
  );
};
