import React, {FC, useCallback} from "react";
import {Card, CardBody, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {CheckoutProduct} from "../utils/state";
import {ProductCountComponent} from "./ProductCountComponent";
import useCheckoutProductStore from "../store/useCheckoutProductStore";

interface SingleCheckoutProps {
  checkoutProduct: CheckoutProduct;
}

export const SingleCheckoutCard: FC<SingleCheckoutProps> = ({
  checkoutProduct,
}) => {
  const checkoutProductsStore = useCheckoutProductStore().checkoutProducts;
  const setCheckoutProductsStore = useCheckoutProductStore().setCheckoutProducts;

  const handleDecrement = useCallback(() => {
    const updatedProducts: CheckoutProduct[] = checkoutProductsStore.map(item => {
      if (item.id === checkoutProduct.id) {
        item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
      }
      return item;
    }).filter(item => item.quantity > 0);
    setCheckoutProductsStore(updatedProducts);
  }, [checkoutProduct, checkoutProductsStore]);

  const handleIncrement = useCallback(() => {
    const updatedCheckoutProducts: CheckoutProduct[] = checkoutProductsStore.map(item => {
      if (item.id === checkoutProduct.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCheckoutProductsStore(updatedCheckoutProducts);
  }, [checkoutProduct, checkoutProductsStore]);

  return (
    <Card
      w="full"
      bg="#1f1f1f"
      overflow="hidden"
      borderRadius="lg"
      shadow={5}
      px={4}
      py={3}
    >
      <CardBody>
        <HStack
          w="full"
          spacing={5}
          alignItems="center"
        >
          <VStack alignItems="flex-start" w="full">
            <Text
              fontSize="sm"
              color="white"
              noOfLines={1}
            >
              {checkoutProduct.title}
            </Text>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="gray.500"
            >
              ${checkoutProduct.price}
            </Text>
            <ProductCountComponent
              quantity={checkoutProduct.quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
            />
          </VStack>
          <Image
            src={checkoutProduct.thumbnail}
            alt={checkoutProduct.title}
            key={checkoutProduct.id + checkoutProduct.title}
            boxSize="20"
            objectFit="contain"
            borderRadius="lg"
          />
        </HStack>
      </CardBody>
    </Card>
  );
};
