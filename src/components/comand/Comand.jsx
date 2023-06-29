import {
  Code,
  Flex,
  HStack,
  IconButton,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";

export const Comand = ({ color, comand, task }) => {
  const toast = useToast();

  const copyComand = () => {
    navigator.clipboard.writeText(comand);
    toast({
      title: "Comando copiado",
      description: "",
      status: "success",
      duration: 1000,
      isClosable: true,
    });
  };

  return (
    <Flex
      bg={color}
      color={"gray.900"}
      p={2}
      borderColor={`gray.400`}
      borderWidth={1}
      borderRadius={"md"}
      justify="space-between"
      alignItems="center"
    >
      <HStack>
        <Text fontSize="sm">{comand}</Text>
        <Tooltip label="Copy Comand">
          <IconButton
            colorScheme="blackAlpha"
            size={"sm"}
            icon={<CopyIcon />}
            onClick={copyComand}
          />
        </Tooltip>
      </HStack>

      <Text fontSize="xs">{task}</Text>
    </Flex>
  );
};
