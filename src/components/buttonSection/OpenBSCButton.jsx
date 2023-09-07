import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonLinkPrimary } from "./ButtonLinkPrimary";

export const OpenBSCButton = () => {
  return (
    <>
      {/* <Button
        as={Link}
        href="http://boir.oss.claro.amx/Datatable_BSC/Datatable_BSC.html"
        variant="solid"
        bg="blue.800"
        border="2px"
        color="white"
        _hover={{ bg: "white", color: "blue.900" }}
        isExternal
      >
        Abrir BSC
        <ExternalLinkIcon mx="5px" />
      </Button> */}
      <ButtonLinkPrimary
        name={`Abrir BSC `}
        icon={<ExternalLinkIcon mx="5px" />}
        href="http://boir.oss.claro.amx/Datatable_BSC/Datatable_BSC.html"
      ></ButtonLinkPrimary>
    </>
  );
};
