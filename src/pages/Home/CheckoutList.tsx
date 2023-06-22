import React, {useCallback} from "react";
import {Box, Button, Stack, VStack} from "@chakra-ui/react";
import useCheckoutProductStore from "../../store/useCheckoutProductStore";
import {SingleCheckoutCard} from "../../components/SingleCheckoutCard";
import {CalculatePriceComponent} from "../../components/CalculatePriceComponent";
import useProductStore from "../../store/useProductStore";

export const CheckoutList = () => {
  const products = useProductStore().products;
  const setProducts = useProductStore().setProducts;
  const checkOutProducts = useCheckoutProductStore().checkoutProducts;
  const setCheckoutProducts = useCheckoutProductStore().setCheckoutProducts;

  const handleCheckout = useCallback(() => {
    setProducts(
      products.map(product => {
        const checkout = checkOutProducts.find(checkout => checkout.id === product.id);
        if (checkout) {
          return { ...product, stock: product.stock - checkout.quantity };
        }
        return product;
      }
    ));
    setCheckoutProducts([]);
  }, [checkOutProducts, products]);

  return (
    <VStack
      flex={1}
      p={2}
      h="100vh"
      flexDirection="column"
      justifyContent="space-between"
      bg="black"
    >
      <Stack
        w="full"
        flexDirection="row"
        flexWrap="wrap"
        spacing={4}
        p={5}
        bg="#111111"
        borderRadius="lg"
        overflowY="scroll"
      >
        { checkOutProducts.map(item => (
          <SingleCheckoutCard
            checkoutProduct={item}
          />
        ))}
      </Stack>
      <VStack w="full" spacing={2}>
        <CalculatePriceComponent />
        <Box w="full" bg="#111111" p={5} borderRadius="lg">
          <Button
            w="full"
            size="md"
            py={7}
            colorScheme="gray"
            isDisabled={checkOutProducts.length <= 0}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Box>
      </VStack>
    </VStack>
  );
};
