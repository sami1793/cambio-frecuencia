import { Button } from "@chakra-ui/react";

export const ButtonPrimary = ({ name, onClick }) => {
  return (
    <Button
      variant="solid"
      bgGradient="linear(to-r, teal.500, teal.400)"
      color="white"
      _hover={{
        bgGradient: "linear(to-l, teal.500, teal.400)",
        color: "white",
      }}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};
