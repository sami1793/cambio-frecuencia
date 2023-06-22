import { Heading, Flex, Center } from "@chakra-ui/react";
import React, { useState } from "react";
import { InputsSection } from "../components/inputsSection/InputsSection";
import { ClearButton } from "../components/buttonSection/ClearButton";
import { ComandSection } from "../components/comandSection/ComandSection";

export const ChangeChannel = () => {
  const [inputs, setInputs] = useState({
    bcf: 0,
    bts: 0,
    trx: 0,
    freq: 206,
    mal: 0,
    newFreq: 0,
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const clearInputs = () => {
    setInputs({
      bcf: 0,
      bts: 0,
      trx: 0,
      freq: 206,
      mal: 0,
      newFreq: 0,
    });
  };
  return (
    <Center bg="gray.100">
      <Flex direction="column">
        <Heading m={5} mb={10} alignSelf="center" color="blue.900">
          Cambio de Canal
        </Heading>
        <InputsSection inputs={inputs} handleChange={handleChange} />
        <ClearButton clearInputs={clearInputs} />
        <ComandSection inputs={inputs} />
      </Flex>
    </Center>
  );
};
