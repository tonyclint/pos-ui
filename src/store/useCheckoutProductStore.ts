import {create} from "zustand";
import {createJSONStorage, devtools, persist} from "zustand/middleware";
import {CheckoutProduct} from "../utils/state";

type CheckoutStore = {
  checkoutProducts: CheckoutProduct[];
  setCheckoutProducts: (checkoutProducts: CheckoutProduct[]) => void;
}

const useCheckoutProductStore = create<CheckoutStore>(
  devtools(
    persist(
      (set) => ({
        checkoutProducts: [],
        setCheckoutProducts: checkoutProducts => set({ checkoutProducts }),
      }),
      {
        name: 'checkout-products-storage',
        storage: createJSONStorage(() => localStorage),
      })
  )
);

export default useCheckoutProductStore;
