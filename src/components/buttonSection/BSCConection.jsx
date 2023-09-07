import { HStack, Tooltip, useToast } from "@chakra-ui/react";
import { OpenBSCButton } from "./OpenBSCButton";
import { RiLockPasswordLine } from "react-icons/ri";
import { ButtonIconPrimary } from "./ButtonIconPrimary";

export const BSCConection = () => {
  const toast = useToast();
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
    <HStack justifyContent="center" p={3}>
      <OpenBSCButton />
      <Tooltip label="Copiar credenciales BSC">
        {/* <IconButton
          size={"sm"}
          icon={<RiLockPasswordLine />}
          onClick={copyCredencials}
          variant="solid"
          bg="blue.800"
          border="2px"
          color="white"
          _hover={{ bg: "white", color: "blue.900" }}
        /> */}
        <ButtonIconPrimary
          icon={<RiLockPasswordLine />}
          onClick={copyCredencials}
          label="Copiar credenciales BSC"
        ></ButtonIconPrimary>
      </Tooltip>
    </HStack>
  );
};
