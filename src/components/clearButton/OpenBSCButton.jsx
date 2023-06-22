import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";

export const OpenBSCButton = () => {
  return (
    <>
      <Button
        as={Link}
        href="http://boir.oss.claro.amx/Datatable_BSC/Datatable_BSC.html"
        isExternal
      >
        Abrir BSC
        <ExternalLinkIcon mx="5px" />
      </Button>
    </>
  );
};
