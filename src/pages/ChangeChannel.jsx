import { Flex, Center } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { InputsSection } from "../components/inputsSection/InputsSection";
import { ClearButton } from "../components/buttonSection/ClearButton";
import { ComandSection } from "../components/comandSection/ComandSection";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";
import { Title } from "../components/titles/Title";

export const ChangeChannel = () => {
  const initialInputs = getLocalStorage("inputStorage") || {
    bcf: 0,
    bts: 0,
    trx: 0,
    freq: 206,
    mal: 0,
    newFreq: 0,
  };
  const [inputs, setInputs] = useState(initialInputs);

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

  useEffect(() => {
    setLocalStorage("inputStorage", inputs);
  }, [inputs]);

  return (
    <Center>
      <Flex direction="column">
        <Title title="Cambio de Canal"></Title>
        <InputsSection inputs={inputs} handleChange={handleChange} />
        <ClearButton clearInputs={clearInputs} />
        <ComandSection inputs={inputs} />
      </Flex>
    </Center>
  );
};
