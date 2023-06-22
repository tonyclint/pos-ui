import React, {useEffect, useState} from "react";
import useCheckoutProductStore from "../store/useCheckoutProductStore";

const useCheckout = () => {
  const checkOutProducts = useCheckoutProductStore().checkoutProducts;

  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let calculateSubtotal = 0;
    let calculateTax: number;
    let calculateTotal: number;
    checkOutProducts.forEach(item => {
      calculateSubtotal += item.quantity * item.price;
    });
    calculateTax = calculateSubtotal * 0.1;
    calculateTotal = calculateSubtotal + calculateTax;
    setSubtotal(calculateSubtotal);
    setTax(calculateTax);
    setTotal(calculateTotal);
  }, [checkOutProducts]);

  return {
    subtotal,
    tax,
    total,
  };
};

export default useCheckout;
