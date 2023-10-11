import { HStack } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";
import { BSCConection } from "../2G/BSCConection";

export const ClearButton = ({ clearInputs }) => {
  return (
    <>
      <HStack justifyContent="center" mb={5}>
        <ButtonPrimary name="Limpiar" onClick={clearInputs}></ButtonPrimary>
        <BSCConection />
      </HStack>
    </>
  );
};
