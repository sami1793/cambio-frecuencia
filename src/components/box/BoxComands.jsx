import { Box, Heading } from "@chakra-ui/react";

export const BoxComands = ({ title, children }) => {
  return (
    <Box bg="teal.600" p={3} borderRadius="md">
      <Heading color="white" size="sm" mb={3}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};
