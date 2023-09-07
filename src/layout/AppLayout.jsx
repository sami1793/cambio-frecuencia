import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Flex, Stack } from "@chakra-ui/react";
import { NavApp } from "../components/NavApp";

export const AppLayout = () => {
  return (
    <Flex flexDir="column" minH="100vh" bg="gray.100">
      <NavApp />
      <Stack flex="1">
        <Outlet />
      </Stack>
      <Footer />
    </Flex>
  );
};
