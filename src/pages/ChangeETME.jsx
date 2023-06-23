import { useState } from "react";
import { InputETMESection } from "../components/changeETME/InputETMESection";
import { Center, Flex, Heading } from "@chakra-ui/react";
import { ComandETMESection } from "../components/changeETME/ComandETMESection";

export const ChangeETME = () => {
  const [values, setValues] = useState({
    bcf: 425,
    bts1: 425,
    bts2: 426,
    bts3: 427,
    etme: 1,
  });
  return (
    <Center bg="gray.100">
      <Flex direction="column">
        <Heading m={5} mb={10} alignSelf="center" color="blue.900">
          Cambio de ETME
        </Heading>
        <InputETMESection values={values} setValues={setValues} />
        <ComandETMESection values={values} />
      </Flex>
    </Center>
  );
};
