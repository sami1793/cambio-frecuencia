import { Flex, FormControl, FormLabel, VStack } from "@chakra-ui/react";
export const Input = ({ labelName, children }) => {
  return (
    <FormControl w="180px">
      <VStack gap="0">
        <FormLabel
          textAlign="center"
          bg="gray"
          color="white"
          borderTopRadius="md"
          mb={0}
          width="100%" //si no lo pongo se hace chico
        >
          {labelName}
        </FormLabel>
        {children}
      </VStack>
    </FormControl>
  );
};
