import {Flex, Spinner, VStack} from "@chakra-ui/react";
import React from "react";
import useProducts from "../../hooks/useProducts";
import {SingleProductCard} from "../../components/SingleProductCard";
import {CheckoutList} from "./CheckoutList";
import useProductStore from "../../store/useProductStore";

export const Home = () => {
  const products = useProductStore().products;
  const {
    isLoading,
  } = useProducts();

  return (
    <Flex
      w="100vw"
      h="100vh"
      flexDirection="row"
    >
      { isLoading &&
        <Spinner size="lg" color="primary.500" />
      }
      <VStack
        flex={4}
        py={5}
        justifyContent="center"
        flexDirection="row"
        flexWrap="wrap"
        overflowY="scroll"
        h="100vh"
        spacing={5}
      >
        { products.map(item => (
          <SingleProductCard
            product={item}
          />
        ))
        }
      </VStack>
      <CheckoutList />
    </Flex>
  );
};
