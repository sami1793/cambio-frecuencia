import {
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Wrap,
  WrapItem,
  VStack,
  InputGroup,
  InputLeftAddon,
  Input,
} from "@chakra-ui/react";
import { Input as InputChakra } from "../input/Input";
export const InputETMESection = ({ values, setValues }) => {
  const setBcfBts = (numberInput) => {
    setValues({
      ...values,
      bcf: numberInput,
      bts1: numberInput,
      bts2: Number(numberInput) + 1,
      bts3: Number(numberInput) + 2,
    });
  };
  return (
    <Box mb={10}>
      <VStack spacing={5}>
        <InputChakra labelName={`BCF`}>
          <NumberInput
            value={values.bcf}
            min={0}
            max={99999}
            size="sm"
            onChange={setBcfBts}
          >
            <NumberInputField bg={"white"} />
            <NumberInputStepper>
              <NumberIncrementStepper bg={"gray.300"} />
              <NumberDecrementStepper bg={"gray.300"} />
            </NumberInputStepper>
          </NumberInput>
        </InputChakra>

        <Wrap justify="center" spacing={5}>
          <WrapItem w="150px">
            <InputChakra labelName={`BTS`}>
              <NumberInput
                value={values.bts1}
                min={0}
                max={99999}
                size="sm"
                onChange={(number) => setValues({ ...values, bts1: number })}
              >
                <NumberInputField bg={"white"} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={"gray.300"} />
                  <NumberDecrementStepper bg={"gray.300"} />
                </NumberInputStepper>
              </NumberInput>
            </InputChakra>
          </WrapItem>

          <WrapItem w="150px">
            <InputChakra labelName={`BTS`}>
              <NumberInput
                value={values.bts2}
                min={0}
                max={99999}
                size="sm"
                onChange={(number) => setValues({ ...values, bts2: number })}
              >
                <NumberInputField bg={"white"} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={"gray.300"} />
                  <NumberDecrementStepper bg={"gray.300"} />
                </NumberInputStepper>
              </NumberInput>
            </InputChakra>
          </WrapItem>

          <WrapItem w="150px">
            <InputChakra labelName={`BTS`}>
              <NumberInput
                value={values.bts3}
                min={0}
                max={99999}
                size="sm"
                onChange={(number) => setValues({ ...values, bts3: number })}
              >
                <NumberInputField bg={"white"} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={"gray.300"} />
                  <NumberDecrementStepper bg={"gray.300"} />
                </NumberInputStepper>
              </NumberInput>
            </InputChakra>
          </WrapItem>
        </Wrap>

        <Wrap justify="center" spacing={5}>
          <WrapItem w="180px">
            <InputChakra labelName={`New ETME`}>
              <NumberInput
                value={values.etme}
                min={0}
                max={4}
                size="sm"
                onChange={(number) => setValues({ ...values, etme: number })}
              >
                <NumberInputField bg={"white"} />
                <NumberInputStepper>
                  <NumberIncrementStepper bg={"gray.300"} />
                  <NumberDecrementStepper bg={"gray.300"} />
                </NumberInputStepper>
              </NumberInput>
            </InputChakra>
          </WrapItem>

          <WrapItem w="180px">
            <InputChakra labelName={`C/U-PLANE IP`}>
              <InputGroup size={"sm"}>
                <InputLeftAddon children="10.234." bg={"white"} />
                <Input
                  type="text"
                  placeholder="xxx.xxx"
                  bg={"white"}
                  w={200}
                  onChange={(e) => console.log(e.target.value)}
                />
              </InputGroup>
            </InputChakra>
          </WrapItem>
        </Wrap>
      </VStack>
    </Box>
  );
};
