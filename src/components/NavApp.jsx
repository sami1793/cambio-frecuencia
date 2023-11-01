import {
  Button,
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
} from "@chakra-ui/react";
import { Link as NavLink } from "react-router-dom";
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import { MdCellTower } from "react-icons/md";
export const NavApp = () => {
  return (
    <SimpleGrid
      columns={2}
      p={5}
      bgGradient="linear(to-r, teal.600, teal.400)"
      color="white"
      borderRadius="lg"
    >
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
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="whiteAlpha.100"
              border="1px"
              _hover={{
                bgGradient: "linear(to-l, teal.500, teal.400)",
                color: "white",
              }}
              _expanded={{ bgGradient: "linear(to-l, teal.400, teal.300)" }}
            >
              Planillas 2G
            </MenuButton>
            <MenuList>
              <MenuItem color="teal.600">
                <Link as={NavLink} to="/">
                  Cambio de Canal
                </Link>
              </MenuItem>
              <MenuItem color="teal.600">
                <Link as={NavLink} to="/changeETME">
                  Cambio de ETME
                </Link>
              </MenuItem>
              <MenuItem color="teal.600">
                <Link as={NavLink} to="/TRXDelete">
                  Borrado TRX
                </Link>
              </MenuItem>
              {/* <MenuItem color="teal.600">
                <Link as={NavLink} to="/Creation2G">
                  Crecimiento 2G
                </Link>

              </MenuItem> */}

              <MenuItem color="teal.600">
                <Link as={NavLink} to="/MSS2G">
                  Crecimiento MSS 2G
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              bg="whiteAlpha.100"
              border="1px"
              _hover={{
                bgGradient: "linear(to-l, teal.500, teal.400)",
                color: "white",
              }}
              _expanded={{ bgGradient: "linear(to-l, teal.400, teal.300)" }}
            >
              Planillas 3G
            </MenuButton>
            <MenuList>
              <MenuItem color="teal.600">
                <Link as={NavLink} to="/MSS3G">
                  Crecimiento MSS 3G
                </Link>
              </MenuItem>
              <MenuItem color="teal.600">
                <Link as={NavLink} to="/RNCConector">
                  Conector RNC
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
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
            <MenuItem as={NavLink} to="/TRXDelete">
              Borrado TRX
            </MenuItem>
            <MenuItem as={NavLink} to="/Creation2G">
              Crecimiento 2G
            </MenuItem>
            <MenuItem color="teal.600">
              <Link as={NavLink} to="/MSS2G">
                Crecimiento MSS 2G
              </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </SimpleGrid>
  );
};
