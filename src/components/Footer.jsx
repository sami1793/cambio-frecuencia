import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box p={2} bg="blue.800" color="white">
      <Text textAlign="right" mt={5} fontSize="medium">
        Design by <Text as="i">Samanta Romero</Text>
      </Text>
    </Box>
  );
};
