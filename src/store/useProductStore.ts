import {create} from "zustand";
import {createJSONStorage, devtools, persist} from "zustand/middleware";
import {Product} from "../utils/state";

type ProductStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const useProductStore = create<ProductStore>(
  devtools(
    persist(
      (set) => ({
        products: [],
        setProducts: products => set({ products }),
      }),
      {
        name: 'products-storage',
        storage: createJSONStorage(() => localStorage),
      })
  )
);

export default useProductStore;
