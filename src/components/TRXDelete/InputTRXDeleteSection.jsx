import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  VStack,
  Flex,
  Input,
  Center,
  Select,
} from "@chakra-ui/react";
import { Input as InputChakra } from "../input/Input";

export const InputTRXDeleteSection = ({
  values,
  setValues,
  handleChange,
  checkedValues,
}) => {
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
      bcfexa: toEXA(numberInput),
      dch1: "T" + toEXA(values.bcf) + 1,
      dch2: "T" + toEXA(values.bcf) + 2,
      dch3: "T" + toEXA(values.bcf) + 3,
      dch4: "T" + toEXA(values.bcf) + 4,
      dch5: "T" + toEXA(values.bcf) + 5,
      dch6: "T" + toEXA(values.bcf) + 6,
      dch7: "T" + toEXA(values.bcf) + 7,
      dch8: "T" + toEXA(values.bcf) + 8,
      dch9: "T" + toEXA(values.bcf) + 9,
      dch10: "T" + toEXA(values.bcf) + "A",
      dch11: "T" + toEXA(values.bcf) + "B",
      dch12: "T" + toEXA(values.bcf) + "C",
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
    <Center mb={10}>
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
          {checkedValues.includes("trx1") && (
            <InputChakra labelName={`TRX 1`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx1"
                value={values.trx1}
                onChange={(e) => setValues({ ...values, trx1: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx2") && (
            <InputChakra labelName={`TRX 2`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx2"
                value={values.trx2}
                onChange={(e) => setValues({ ...values, trx2: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx3") && (
            <InputChakra labelName={`TRX 3`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx3"
                value={values.trx3}
                onChange={(e) => setValues({ ...values, trx3: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx4") && (
            <InputChakra labelName={`TRX 4`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx4"
                value={values.trx4}
                onChange={(e) => setValues({ ...values, trx4: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx5") && (
            <InputChakra labelName={`TRX 5`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx5"
                value={values.trx5}
                onChange={(e) => setValues({ ...values, trx5: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx6") && (
            <InputChakra labelName={`TRX 6`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx6"
                value={values.trx6}
                onChange={(e) => setValues({ ...values, trx6: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx7") && (
            <InputChakra labelName={`TRX 7`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx7"
                value={values.trx7}
                onChange={(e) => setValues({ ...values, trx7: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx8") && (
            <InputChakra labelName={`TRX 8`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx8"
                value={values.trx8}
                onChange={(e) => setValues({ ...values, trx8: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx9") && (
            <InputChakra labelName={`TRX 9`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx9"
                value={values.trx9}
                onChange={(e) => setValues({ ...values, trx9: e.target.value })}
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx10") && (
            <InputChakra labelName={`TRX 10`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx10"
                value={values.trx10}
                onChange={(e) =>
                  setValues({ ...values, trx10: e.target.value })
                }
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx11") && (
            <InputChakra labelName={`TRX 11`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx11"
                value={values.trx11}
                onChange={(e) =>
                  setValues({ ...values, trx11: e.target.value })
                }
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
          {checkedValues.includes("trx12") && (
            <InputChakra labelName={`TRX 12`}>
              <Select
                bg="white"
                placeholder="Seleccione BTS"
                size="xs"
                name="trx12"
                value={values.trx12}
                onChange={(e) =>
                  setValues({ ...values, trx12: e.target.value })
                }
              >
                <option value={values.bts1}>{values.bts1}</option>

                <option value={values.bts2}>{values.bts2}</option>

                <option value={values.bts3}>{values.bts3}</option>
              </Select>
            </InputChakra>
          )}
        </VStack>

        {/* ------D-CHANNEL------- */}
        <VStack>
          {checkedValues.includes("trx1") && (
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
          )}
          {checkedValues.includes("trx2") && (
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
          )}
          {checkedValues.includes("trx3") && (
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
          )}
          {checkedValues.includes("trx4") && (
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
          )}
          {checkedValues.includes("trx5") && (
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
          )}
          {checkedValues.includes("trx6") && (
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
          )}
          {checkedValues.includes("trx7") && (
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
          )}
          {checkedValues.includes("trx8") && (
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
          )}
          {checkedValues.includes("trx9") && (
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
          )}
          {checkedValues.includes("trx10") && (
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
          )}
          {checkedValues.includes("trx11") && (
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
          )}
          {checkedValues.includes("trx12") && (
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
          )}
        </VStack>
      </Flex>
    </Center>
  );
};
