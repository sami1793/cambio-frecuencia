import { Heading } from "@chakra-ui/react";

export const Title = ({ title }) => {
  return (
    <Heading m={5} mb={10} alignSelf="center" color="teal.500">
      {title}
    </Heading>
  );
};
