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

export const InputTRXDeleteSection = ({ values, setValues, handleChange }) => {
  const toEXA = (num) => {
    return Number(num).toString(16).toLocaleUpperCase();
  };
  const setBcfBts = (numberInput) => {
    setValues({
      ...values,
      bcf: numberInput,
      bts1: numberInput,
      bts2: Number(numberInput) + 1,
      bts3: Number(numberInput) + 2,
      bcfexa: toEXA(values.bcf),
      trx1: numberInput,
      dch1: toEXA(values.bcf) + 1,
      dch2: toEXA(values.bcf) + 2,
      dch3: toEXA(values.bcf) + 3,
      dch4: toEXA(values.bcf) + 4,
      dch5: toEXA(values.bcf) + 5,
      dch6: toEXA(values.bcf) + 6,
      dch7: toEXA(values.bcf) + 7,
      dch8: toEXA(values.bcf) + 8,
      dch9: toEXA(values.bcf) + 9,
      dch10: toEXA(values.bcf) + "A",
      dch11: toEXA(values.bcf) + "B",
      dch12: toEXA(values.bcf) + "C",
    });
  };

  const setDChannelBCF = (e) => {
    setValues({
      ...values,
      bcfexa: e.target.value.toLocaleUpperCase(),
      dch1: e.target.value.toLocaleUpperCase(),
      dch2: e.target.value.toLocaleUpperCase(),
      dch3: e.target.value.toLocaleUpperCase(),
      dch4: e.target.value.toLocaleUpperCase(),
      dch5: e.target.value.toLocaleUpperCase(),
      dch6: e.target.value.toLocaleUpperCase(),
      dch7: e.target.value.toLocaleUpperCase(),
      dch8: e.target.value.toLocaleUpperCase(),
      dch9: e.target.value.toLocaleUpperCase(),
      dch10: e.target.value.toLocaleUpperCase(),
      dch11: e.target.value.toLocaleUpperCase(),
      dch12: e.target.value.toLocaleUpperCase(),
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
              value={values.bcfexa}
              bg="whiteAlpha.800"
              onChange={setDChannelBCF}
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
            <Input
              type="text"
              name="dch1"
              value={values.dch1}
              bg="whiteAlpha.800"
              size="xs"
              onChange={setDChannelBCF}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 2`}>
            <Input
              type="text"
              name="dch2"
              value={values.dch2}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 3`}>
            <Input
              type="text"
              name="dch3"
              value={values.dch3}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 4`}>
            <Input
              type="text"
              name="dch4"
              value={values.dch4}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 5`}>
            <Input
              type="text"
              name="dch5"
              value={values.dch5}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 6`}>
            <Input
              type="text"
              name="dch6"
              value={values.dch6}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 7`}>
            <Input
              type="text"
              name="dch7"
              value={values.dch7}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 8`}>
            <Input
              type="text"
              name="dch8"
              value={values.dch8}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 9`}>
            <Input
              type="text"
              name="dch9"
              value={values.dch9}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 10`}>
            <Input
              type="text"
              name="dch10"
              value={values.dch10}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 11`}>
            <Input
              type="text"
              name="dch11"
              value={values.dch11}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
          <InputChakra labelName={`D-CHANNEL 12`}>
            <Input
              type="text"
              name="dch12"
              value={values.dch12}
              bg="whiteAlpha.800"
              size="xs"
              onChange={handleChange}
            />
          </InputChakra>
        </VStack>
      </Flex>
    </Box>
  );
};
