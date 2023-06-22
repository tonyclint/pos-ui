import React, {FC} from "react";
import {Button, HStack, Text} from "@chakra-ui/react";
import {AddIcon, MinusIcon} from "@chakra-ui/icons";

interface ProductCountProps {
  quantity: number;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

export const ProductCountComponent: FC<ProductCountProps> = ({
  quantity,
  handleDecrement,
  handleIncrement
}) => {
  return (
    <HStack spacing={3} alignItems="center">
      <Button
        size="xs"
        borderRadius="md"
        colorScheme="blackAlpha"
        onClick={handleDecrement}
      >
        <MinusIcon />
      </Button>
      <Text
        fontSize="xs"
        fontWeight="bold"
        color="gray.500"
      >
        {quantity}
      </Text>
      <Button
        size="xs"
        borderRadius="md"
        colorScheme="blackAlpha"
        onClick={handleIncrement}
      >
        <AddIcon />
      </Button>
    </HStack>
  );
};
