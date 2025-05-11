import { useQuery } from "react-query";
import { Product } from "../types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetProduct = (productId?: string) => {
  const getProductByIdRequest = async (): Promise<Product> => {
    const response = await fetch(
      `${API_BASE_URL}/api/product/${productId}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurant");
    }

    return response.json();
  };

  const { data: product, isLoading ,error} = useQuery(
    "fetchRestaurant",
    getProductByIdRequest,
    {
      enabled: !!productId,
    }
  );

  return { product, isLoading,error };
};