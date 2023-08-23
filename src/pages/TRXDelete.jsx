import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/react";
import { InputTRXDeleteSection } from "../components/TRXDelete/InputTRXDeleteSection";
import { useState } from "react";
import { ComandTRXDeleteSection } from "../components/TRXDelete/ComandTRXDeleteSection";
import { SelectTRXDelete } from "../components/TRXDelete/SelectTRXDelete";
import { BSCConection } from "../components/buttonSection/BSCConection";
import { Comand } from "../components/comand/Comand";

export const TRXDelete = () => {
  const [values, setValues] = useState({
    bcf: 425,
    bcfexa: "1A9",
    bts1: 425,
    bts2: 426,
    bts3: 427,
    trx1: "0",
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
    dch1: "0",
    dch2: "0",
    dch3: "0",
    dch4: "0",
    dch5: "0",
    dch6: "0",
    dch7: "0",
    dch8: "0",
    dch9: "0",
    dch10: "0",
    dch11: "0",
    dch12: "0",
  });
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  //SELECT
  const [checkedValues, setCheckedValues] = useState([]);

  const handleCheckboxChange = (value) => {
    if (checkedValues.includes(value)) {
      setCheckedValues(checkedValues.filter((item) => item !== value));
    } else {
      setCheckedValues([...checkedValues, value]);
    }
  };

  return (
    <Center bg="gray.100">
      <Flex direction="column">
        <Heading m={5} mb={5} alignSelf="center" color="blue.900">
          Borrado de TRXs
        </Heading>
        <BSCConection />
        <Stack maxW="xl" alignSelf="center">
          <Comand
            comand={`ZEEI:BCF=${values.bcf};`}
            task=""
            color="yellow.200"
          />
        </Stack>

        <SelectTRXDelete
          checkedValues={checkedValues}
          handleCheckboxChange={handleCheckboxChange}
        />
        <InputTRXDeleteSection
          values={values}
          setValues={setValues}
          handleChange={handleChange}
          checkedValues={checkedValues}
        />
        <ComandTRXDeleteSection
          values={values}
          checkedValues={checkedValues}
          handleCheckboxChange={handleCheckboxChange}
        />
      </Flex>
    </Center>
  );
};
