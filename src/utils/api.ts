import utils from "./utils";
import http from "./http";
import {Product} from "./state";
import useProductStore from "../store/useProductStore";

const apiName = {
  GET_PRODUCTS: "/products",
};

const responseFormat = {
  products(response: any[]): Product[] {
    return response.map(item => item)
  }
}


const api = {
  getProducts() {
    const url = apiName.GET_PRODUCTS;
    return utils.apiHandler(http.get(encodeURI(url)))
      .then(response => {
        const setProducts = useProductStore.getState().setProducts;
        setProducts(responseFormat.products(response.products)) ;
        return responseFormat.products(response.products);
      });
  },
};

export default api;
