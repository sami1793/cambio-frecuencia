import { Input } from "../input/Input";
import { Flex, Input as InputChakra, Wrap, WrapItem } from "@chakra-ui/react";

export const InputsSection = ({ inputs, handleChange }) => {
  return (
    <Flex direction="column" gap={5} mb={5}>
      <Wrap justify="center" spacing={5}>
        <WrapItem>
          <Input labelName="BCF">
            <InputChakra
              type="number"
              name="bcf"
              value={inputs.bcf}
              bg="whiteAlpha.800"
              onChange={handleChange}
            />
          </Input>
        </WrapItem>
        <WrapItem>
          <Input labelName="BTS">
            <InputChakra
              type="number"
              name="bts"
              value={inputs.bts}
              bg="whiteAlpha.800"
              onChange={handleChange}
            />
          </Input>
        </WrapItem>
        <WrapItem>
          <Input labelName="TRX">
            <InputChakra
              type="number"
              name="trx"
              value={inputs.trx}
              bg="whiteAlpha.800"
              onChange={handleChange}
            />
          </Input>
        </WrapItem>
      </Wrap>

      <Wrap justify="center" spacing={5}>
        <WrapItem>
          <Input labelName="FREQ">
            <InputChakra
              type="number"
              name="freq"
              value={inputs.freq}
              bg="whiteAlpha.800"
              onChange={handleChange}
            />
          </Input>
        </WrapItem>
        <WrapItem>
          <Input labelName="MAL">
            <InputChakra
              type="number"
              name="mal"
              value={inputs.mal}
              bg="whiteAlpha.800"
              onChange={handleChange}
            />
          </Input>
        </WrapItem>
        <WrapItem>
          <Input labelName="NEW FREQ">
            <InputChakra
              type="number"
              name="newFreq"
              value={inputs.newFreq}
              bg="whiteAlpha.800"
              onChange={handleChange}
            />
          </Input>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};
