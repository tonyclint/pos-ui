import React, {FC, useCallback} from "react";
import {Card, CardBody, CardFooter, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {CheckoutProduct, Product} from "../utils/state";
import useCheckoutProductStore from "../store/useCheckoutProductStore";
import {AddToCardComponent} from "./AddToCardComponent";

interface SingleProductProps {
  product: Product;
}

export const SingleProductCard: FC<SingleProductProps> = ({
  product,
}) => {
  const checkoutProductsStore = useCheckoutProductStore().checkoutProducts;
  const setCheckoutProductsStore = useCheckoutProductStore().setCheckoutProducts;

  const handleAddToCartOnPress = useCallback(() => {
    const updatedProducts: CheckoutProduct[] = checkoutProductsStore.map(item => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    if (!updatedProducts.some((item) => item.id === product.id)) {
      updatedProducts.push({
        id: product.id,
        title: product.title,
        thumbnail: product.thumbnail,
        price: product.price,
        quantity: 1
      });
    }
    setCheckoutProductsStore(updatedProducts);
  }, [product, checkoutProductsStore]);

  return (
    <Card
      w="xs"
      bg="white"
      overflow="hidden"
      borderRadius={10}
      shadow={5}
      p={3}
    >
      <CardBody>
        <HStack w="full" spacing={5} alignItems="flex-start">
          <Image
            src={product.thumbnail}
            alt={product.title}
            key={product.id + product.title}
            boxSize="32"
            objectFit="contain"
            borderRadius="lg"
          />
          <VStack
            spacing={5}
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <VStack alignItems="flex-start">
              <Text
                fontSize="md"
                fontWeight="bold"
                noOfLines={1}
              >
                {product.title}
              </Text>
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.400"
                noOfLines={3}
              >
                {product.description}
              </Text>
            </VStack>
            <Text
              fontSize="xs"
              fontWeight="bold"
              color="gray.400"
              noOfLines={1}
            >
              {product.brand} &#x2022; {product.category}
            </Text>
          </VStack>
        </HStack>
        <CardFooter mt={4}>
          <HStack w="full" justifyContent="space-between">
            <VStack alignItems="flex-start">
              <Text
                fontSize="xs"
                fontWeight="bold"
                color="gray.400"
              >
                Stock: {product.stock}
              </Text>
              <Text
                fontSize="md"
                fontWeight="bold"
                color="blue.500"
              >
                ${product.price}
              </Text>
            </VStack>
            <AddToCardComponent
              handleAddToCartOnPress={handleAddToCartOnPress}
            />
          </HStack>
        </CardFooter>
      </CardBody>
    </Card>
  );
};
