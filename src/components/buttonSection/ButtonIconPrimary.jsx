import { IconButton, Tooltip } from "@chakra-ui/react";

export const ButtonIconPrimary = ({ icon, onClick = "", label = "" }) => {
  return (
    <Tooltip label={label}>
      <IconButton
        size={"sm"}
        icon={icon}
        onClick={onClick}
        variant="solid"
        bgGradient="linear(to-r, teal.500, teal.400)"
        color="white"
        _hover={{
          bgGradient: "linear(to-l, teal.500, teal.400)",
          color: "white",
        }}
      />
    </Tooltip>
  );
};
