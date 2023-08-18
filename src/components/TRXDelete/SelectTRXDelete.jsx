import { Checkbox, HStack, Heading, VStack } from "@chakra-ui/react";

export const SelectTRXDelete = ({ checkedValues, handleCheckboxChange }) => {
  return (
    <VStack
      alignSelf="center"
      direction="column"
      mb={8}
      p={3}
      maxW="max-content"
      borderRadius="lg"
    >
      <Heading alignSelf="center" size="sm" mb={3} color="blue.800">
        TRXs a borrar:
      </Heading>
      <HStack spacing={2}>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx1")}
          onChange={() => handleCheckboxChange("trx1")}
        >
          TRX 1
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx2")}
          onChange={() => handleCheckboxChange("trx2")}
        >
          TRX 2
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx3")}
          onChange={() => handleCheckboxChange("trx3")}
        >
          TRX 3
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx4")}
          onChange={() => handleCheckboxChange("trx4")}
        >
          TRX 4
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx5")}
          onChange={() => handleCheckboxChange("trx5")}
        >
          TRX 5
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx6")}
          onChange={() => handleCheckboxChange("trx6")}
        >
          TRX 6
        </Checkbox>
      </HStack>
      <HStack spacing={2}>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx7")}
          onChange={() => handleCheckboxChange("trx7")}
        >
          TRX 7
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx8")}
          onChange={() => handleCheckboxChange("trx8")}
        >
          TRX 8
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx9")}
          onChange={() => handleCheckboxChange("trx9")}
        >
          TRX 9
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx10")}
          onChange={() => handleCheckboxChange("trx10")}
        >
          TRX 10
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx11")}
          onChange={() => handleCheckboxChange("trx11")}
        >
          TRX 11
        </Checkbox>
        <Checkbox
          bgColor="blue.900"
          color="white"
          p={1}
          rounded="lg"
          isChecked={checkedValues.includes("trx12")}
          onChange={() => handleCheckboxChange("trx12")}
        >
          TRX 12
        </Checkbox>
      </HStack>
    </VStack>
  );
};
