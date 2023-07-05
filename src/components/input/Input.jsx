import { FormControl, FormLabel, VStack } from "@chakra-ui/react";
export const Input = ({ labelName, children }) => {
  return (
    <FormControl w="180px">
      <VStack>
        <FormLabel
          textAlign="center"
          bg="blue.800"
          color="white"
          borderTopRadius="md"
          mb={0}
          width="100%" //si no lo pongo se hace chico
          // h="50px"
        >
          {labelName}
        </FormLabel>
        {children}
      </VStack>
    </FormControl>
  );
};
