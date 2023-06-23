import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Flex, Stack } from "@chakra-ui/react";

export const AppLayout = () => {
  return (
    <Flex flexDir="column" minH="100vh">
      <Stack flex="1">
        <Outlet />
      </Stack>
      <Footer />
    </Flex>
  );
};
