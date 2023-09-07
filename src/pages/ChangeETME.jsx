import { useState } from "react";
import { InputETMESection } from "../components/changeETME/InputETMESection";
import { Center, Flex } from "@chakra-ui/react";
import { ComandETMESection } from "../components/changeETME/ComandETMESection";
import { ClearButton } from "../components/buttonSection/ClearButton";
import { Title } from "../components/titles/Title";

export const ChangeETME = () => {
  const [values, setValues] = useState({
    bcf: 425,
    bts1: 425,
    bts2: 426,
    bts3: 427,
    etme: 1,
  });

  const clearInputs = () => {
    setValues({
      bcf: 0,
      bts1: 0,
      bts2: 0,
      bts3: 0,
      etme: 1,
    });
  };

  return (
    <Center>
      <Flex direction="column">
        <Title title="Cambio de ETME"></Title>
        <InputETMESection values={values} setValues={setValues} />
        <ClearButton clearInputs={clearInputs} />
        <ComandETMESection values={values} />
      </Flex>
    </Center>
  );
};
