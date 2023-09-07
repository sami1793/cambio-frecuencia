import { ButtonGroup, HStack, Tooltip, useToast } from "@chakra-ui/react";
import { OpenBSCButton } from "./OpenBSCButton";
import { RiLockPasswordLine } from "react-icons/ri";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonIconPrimary } from "./ButtonIconPrimary";

export const ClearButton = ({ clearInputs }) => {
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
    <>
      <HStack justifyContent="center" mb={5}>
        <ButtonGroup>
          <ButtonPrimary name="Limpiar" onClick={clearInputs}></ButtonPrimary>
          <OpenBSCButton />
        </ButtonGroup>
        <Tooltip label="Copiar credenciales BSC">
          <ButtonIconPrimary
            icon={<RiLockPasswordLine />}
            onClick={copyCredencials}
          ></ButtonIconPrimary>
        </Tooltip>
      </HStack>
    </>
  );
};
