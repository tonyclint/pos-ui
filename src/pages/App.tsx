import {Flex} from "@chakra-ui/react";
import React from "react";
import {Home} from "./Home/Home";

export const App = () => {
  return (
    <Flex
      bg="#f6f6f6"
      flexDirection="column"
    >
      <Home />
    </Flex>
  );
};
