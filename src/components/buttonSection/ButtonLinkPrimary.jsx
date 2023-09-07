import { Button, Link } from "@chakra-ui/react";

export const ButtonLinkPrimary = ({ name, href, icon }) => {
  return (
    <Button
      as={Link}
      href={href}
      variant="solid"
      bgGradient="linear(to-r, teal.500, teal.400)"
      color="white"
      _hover={{
        bgGradient: "linear(to-l, teal.500, teal.400)",
        color: "white",
      }}
      isExternal
    >
      {name}
      {icon}
    </Button>
  );
};
