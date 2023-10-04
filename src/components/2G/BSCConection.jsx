import { RiLockPasswordLine } from "react-icons/ri";
import { ButtonIconPrimary } from "../buttonSection/ButtonIconPrimary";
import { OpenBSCButton } from "../buttonSection/OpenBSCButton";
import { HStack, useToast } from "@chakra-ui/react";

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
    <HStack>
      <OpenBSCButton />
      <ButtonIconPrimary
        icon={<RiLockPasswordLine />}
        onClick={copyCredencials}
        label="Copiar credenciales BSC"
      ></ButtonIconPrimary>
    </HStack>
  );
};
