import {
  Box,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
  Flex,
  Input,
} from "@chakra-ui/react";
import { Input as InputChakra } from "../input/Input";

export const InputTRXDeleteSection = ({ values, setValues }) => {
  const setBcfBts = (numberInput) => {
    setValues({
      ...values,
      bcf: numberInput,
      bts1: numberInput,
      bts2: Number(numberInput) + 1,
      bts3: Number(numberInput) + 2,
      trx1: numberInput,
    });
  };
  return (
    <Box mb={10}>
      <Flex gap={10}>
        <VStack>
          <InputChakra labelName={`BCF`}>
            <NumberInput
              value={values.bcf}
              min={0}
              max={99999}
              size="sm"
              onChange={setBcfBts}
              mb={10}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>

          <InputChakra labelName="BCF EXA">
            <Input
              type="text"
              name="bcfexa"
              value={Number(values.bcf).toString(16).toLocaleUpperCase()}
              bg="whiteAlpha.800"
              //   onChange={}
            />
          </InputChakra>

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
        </VStack>
        {/* ------TRXs------- */}
        <VStack>
          <InputChakra labelName={`TRX 1`}>
            <NumberInput
              value={values.trx1}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx1: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 2`}>
            <NumberInput
              value={values.trx2}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx2: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 3`}>
            <NumberInput
              value={values.trx3}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx3: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 4`}>
            <NumberInput
              value={values.trx4}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx4: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 5`}>
            <NumberInput
              value={values.trx5}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx5: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 6`}>
            <NumberInput
              value={values.trx6}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx6: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 7`}>
            <NumberInput
              value={values.trx7}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx7: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 8`}>
            <NumberInput
              value={values.trx8}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx8: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 9`}>
            <NumberInput
              value={values.trx9}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx9: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 10`}>
            <NumberInput
              value={values.trx10}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx10: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 11`}>
            <NumberInput
              value={values.trx11}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx11: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`TRX 12`}>
            <NumberInput
              value={values.trx12}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx12: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
        </VStack>

        {/* ------D-CHANNEL------- */}
        <VStack>
          <InputChakra labelName={`D-CHANNEL 1`}>
            <NumberInput
              value={values.trx1}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx1: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 2`}>
            <NumberInput
              value={values.trx2}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx2: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 3`}>
            <NumberInput
              value={values.trx3}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx3: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 4`}>
            <NumberInput
              value={values.trx4}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx4: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 5`}>
            <NumberInput
              value={values.trx5}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx5: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 6`}>
            <NumberInput
              value={values.trx6}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx6: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 7`}>
            <NumberInput
              value={values.trx7}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx7: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 8`}>
            <NumberInput
              value={values.trx8}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx8: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 9`}>
            <NumberInput
              value={values.trx9}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx9: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 10`}>
            <NumberInput
              value={values.trx10}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx10: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 11`}>
            <NumberInput
              value={values.trx11}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx11: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 12`}>
            <NumberInput
              value={values.trx12}
              min={1}
              size="xs"
              onChange={(number) => setValues({ ...values, trx12: number })}
            >
              <NumberInputField bg={"white"} />
              <NumberInputStepper>
                <NumberIncrementStepper bg={"gray.300"} />
                <NumberDecrementStepper bg={"gray.300"} />
              </NumberInputStepper>
            </NumberInput>
          </InputChakra>
        </VStack>
      </Flex>
    </Box>
  );
};
