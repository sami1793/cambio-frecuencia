import {
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdCellTower } from "react-icons/md";
export const NavApp = () => {
  return (
    <SimpleGrid columns={2} p={5} backgroundColor="blue.800" color="white">
      <Heading as={NavLink} to="/">
        <Flex>
          <MdCellTower fontSize="larger" />
          <Text>BOIR</Text>
        </Flex>
      </Heading>
      {/* Deskptop */}
      <HStack as="nav" justifyContent="flex-end">
        <HStack
          gap={2}
          justifyContent="flex-end"
          display={{ base: "none", md: "flex" }}
        >
          <Link as={NavLink} to="/">
            Cambio de Canal
          </Link>
          <Link as={NavLink} to="/changeETME">
            Cambio de ETME
          </Link>
          <Link as={NavLink} to="/MSS3G">
            Crecimiento MSS 3G
          </Link>
          <Link as={NavLink} to="/RNCConector">
            Conector RNC
          </Link>
        </HStack>
        {/* Mobile */}
        <Menu>
          <MenuButton
            display={{ base: "flex", md: "none" }}
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            color="white"
            border="2px"
            _hover={{ bg: "white", color: "black" }}
            _active={{ bg: "white", color: "black" }}
          />
          <MenuList color="black">
            <MenuItem as={NavLink} to="/">
              Cambio de Canal
            </MenuItem>
            <MenuItem as={NavLink} to="/changeETME">
              Cambio de ETME
            </MenuItem>
            <MenuItem as={NavLink} to="/MSS3G">
              Crecimiento MSS 3G
            </MenuItem>
            <MenuItem as={NavLink} to="/RNCConector">
              Conector RNC
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </SimpleGrid>
  );
};
