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
            placeholder="Seleccionar RNC"
            w="fit-content"
            name="mss"
            value={dataRNCConection.rnc}
            onChange={handleChange}
          >
            <option value="RASU4">RASU4</option>
            {/*scli*/}
            <option value="RASU5">RASU5</option>
            {/*scli*/}
            <option value="RBAH4">RBAH4</option>
            {/*scli*/}
            <option value="RCOM4">RCOM4</option>
            {/*scli*/}
            <option value="RGRA2">RGRA2</option>
            {/*scli*/}
            <option value="RMAR4">RMAR4</option>
            {/*scli*/}
            <option value="RMAR6">RMAR6</option>
            {/*scli*/}
            <option value="RMEN3">RMEN3</option>
            {/*scli*/}
            <option value="RMEN4">RMEN4</option>
            {/*scli*/}
            <option value="RNEU1">RNEU1</option>
            {/*scli*/}
            <option value="RROS4">RROS4</option>
            {/*scli*/}
            <option value="RROS5">RROS5</option>
            {/*scli*/}
            <option value="RROS6">RROS6</option>
            {/*scli*/}
            <option value="RTORC">RTORC</option>
            {/*scli*/}
            <option value="RCOR6">RCOR6</option>
            {/*scli*/}
            <option value="RCOR8">RCOR8</option>
            {/*scli*/}
            <option value="RCOR9">RCOR9</option>
            {/*scli*/}
            <option value="RCORC">RCORC</option>
            {/*scli*/}
            <option value="RCRR5">RCRR5</option>
            {/*scli*/}
            <option value="RCRR6">RCRR6</option>
            {/*scli*/}
            <option value="RMON1">RMON1</option>
            {/*mml*/}
            <option value="RMON2">RMON2</option>
            {/*mml*/}
            <option value="RMON3">RMON3</option>
            {/*mml*/}
            <option value="RMON4">RMON4</option>
            {/*mml*/}
            <option value="RSAL3">RSAL3</option>
            {/*scli*/}
            <option value="RSAN3">RSAN3</option>
            {/*scli*/}
            <option value="RTUC4">RTUC4</option>
            {/*scli*/}
            <option value="RJOND">RJOND</option>
            {/*scli*/}
            <option value="RJONG">RJONG</option>
            {/*scli*/}
            <option value="RTORB">RTORB</option>
            {/*scli*/}
            <option value="RTORD">RTORD</option>
            {/*scli*/}
            <option value="RTORE">RTORE</option>
            {/*scli*/}
            <option value="RTORH">RTORH</option>
            {/*scli*/}
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
