import {
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { OpenBSCButton } from "./OpenBSCButton";
import { RiLockPasswordLine } from "react-icons/ri";

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
      <HStack justifyContent="center">
        <ButtonGroup>
          <Button onClick={clearInputs}>Limpiar</Button>
          <OpenBSCButton />
        </ButtonGroup>
        <Tooltip label="Copiar credenciales">
          <IconButton
            size={"sm"}
            icon={<RiLockPasswordLine />}
            onClick={copyCredencials}
          />
        </Tooltip>
      </HStack>
    </>
  );
};
