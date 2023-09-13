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
        <ButtonIconPrimary
          icon={<RiLockPasswordLine />}
          onClick={copyCredencials}
          label="Copiar credenciales BSC"
        ></ButtonIconPrimary>
      </Tooltip>
    </HStack>
  );
};
