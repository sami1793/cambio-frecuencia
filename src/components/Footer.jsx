import { Box, Text } from "@chakra-ui/react";
import React from "react";

export const Footer = () => {
  return (
    <Box
      p={4}
      bgGradient="linear(to-r, teal.600, teal.400)"
      color="white"
      mt={10}
    >
      <Text textAlign="right" mt={4} fontSize="medium">
        Design by <Text as="i">Samanta Romero</Text>
      </Text>
    </Box>
  );
};
