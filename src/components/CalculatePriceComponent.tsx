import React from "react";
import {HStack, Stack, Text} from "@chakra-ui/react";
import useCheckout from "../hooks/useCheckout";

export const CalculatePriceComponent = () => {
  const {
    subtotal,
    tax,
    total,
  } = useCheckout();

  return (
    <Stack
      w="full"
      bg="#111111"
      p={5}
      spacing={4}
      borderRadius="lg"
    >
      <HStack
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize="sm"
          color="gray.500"
        >
          Subtotal
        </Text>
        <Text
          fontSize="sm"
          color="white"
        >
          ${subtotal.toFixed(2)}
        </Text>
      </HStack>
      <HStack
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize="sm"
          color="gray.500"
        >
          Tax
        </Text>
        <Text
          fontSize="sm"
          color="white"
        >
          ${tax.toFixed(2)}
        </Text>
      </HStack>
      <HStack
        borderTopWidth={1}
        pt={3}
        borderTopColor="gray.500"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text
          fontSize="md"
          fontWeight="bold"
          color="gray.500"
        >
          Total
        </Text>
        <Text
          fontSize="md"
          fontWeight="bold"
          color="white"
        >
          ${total.toFixed(2)}
        </Text>
      </HStack>
    </Stack>
  );
};
