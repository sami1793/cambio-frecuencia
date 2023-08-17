import { Center, Flex, Heading } from "@chakra-ui/react";
import { InputTRXDeleteSection } from "../components/TRXDelete/InputTRXDeleteSection";
import { useState } from "react";

export const TRXDelete = () => {
  const [values, setValues] = useState({
    bcf: 425,
    bcfexa: "1A9",
    bts1: 425,
    bts2: 426,
    bts3: 427,
    trx1: 425,
    trx2: "0",
    trx3: "0",
    trx4: "0",
    trx5: "0",
    trx6: "0",
    trx7: "0",
    trx8: "0",
    trx9: "0",
    trx10: "0",
    trx11: "0",
    trx12: "0",
  });
  return (
    <Center bg="gray.100">
      <Flex direction="column">
        <Heading m={5} mb={10} alignSelf="center" color="blue.900">
          Borrado de TRXs
        </Heading>
        <InputTRXDeleteSection values={values} setValues={setValues} />
      </Flex>
    </Center>
  );
};
