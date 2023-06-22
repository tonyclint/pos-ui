import React, {FC} from "react";
import {Button} from "@chakra-ui/react";

interface AddToCardProps {
  handleAddToCartOnPress: () => void;
}

export const AddToCardComponent: FC<AddToCardProps> = ({
  handleAddToCartOnPress,
}) => {
  return (
    <Button
      size="sm"
      borderRadius="md"
      onClick={handleAddToCartOnPress}
    >
      Add to cart
    </Button>
  );
};
