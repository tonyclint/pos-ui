import React, {useEffect} from "react";
import {useQuery} from "react-query";
import api from "../utils/api";
import useConnection from "./useConnection";

const useProducts = () => {
  const {
    isOnline
  } = useConnection();

  const {
    isLoading,
    refetch,
  } = useQuery(
    ['products'],
    () => api.getProducts(),
    {
      enabled: false,
    }
  );

  useEffect(() => {
    if (isOnline) {
      refetch();
    }
  }, [isOnline]);

  return {
    isLoading,
    refetch,
  };
};

export default useProducts;
