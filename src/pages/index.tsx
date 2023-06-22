import * as React from "react";
import type {HeadFC} from "gatsby";
import {ChakraBaseProvider} from "@chakra-ui/react";
import {theme} from "../../assets/theme/posui-theme";
import {App} from "./App";
import {QueryClient, QueryClientProvider} from "react-query";

const MainPage = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
        retry: 1,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraBaseProvider theme={theme}>
        <App />
      </ChakraBaseProvider>
    </QueryClientProvider>
  );
};

export default MainPage;

export const Head: HeadFC = () => <title>Home Page</title>;
