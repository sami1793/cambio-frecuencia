import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";
import { ButtonPrimary } from "./ButtonPrimary";
import { ButtonLinkPrimary } from "./ButtonLinkPrimary";

export const OpenBSCButton = () => {
  return (
    <ButtonLinkPrimary
      name={`Abrir BSC `}
      icon={<ExternalLinkIcon mx="5px" />}
      href="http://boir.oss.claro.amx/Datatable_BSC/Datatable_BSC.html"
    />
  );
};
