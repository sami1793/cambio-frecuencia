import {
  Box,
  Center,
  HStack,
  Heading,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { OpenBSCButton } from "./OpenBSCButton";
import { RiLockPasswordLine } from "react-icons/ri";

export const BSCConection = () => {
  const copyCredencials = () => {
    navigator.clipboard.writeText("RIC000\nCONRIC33");
    toast({
      title: "Credenciales copiadas",
      description: "",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    // <Center mt={5} mb={5}>
    //   <Box bg="blue.700" p={3} borderRadius="md">
    //     <Heading size="sm" mb={3} color="white">
    //       Conectarse a BSC
    //     </Heading>
    <HStack justifyContent="center" p={3}>
      <OpenBSCButton />
      <Tooltip label="Copiar credenciales BSC">
        <IconButton
          size={"sm"}
          icon={<RiLockPasswordLine />}
          onClick={copyCredencials}
          variant="solid"
          bg="blue.800"
          border="2px"
          color="white"
          _hover={{ bg: "white", color: "blue.900" }}
        />
      </Tooltip>
    </HStack>
    //   </Box>
    // </Center>
  );
};
