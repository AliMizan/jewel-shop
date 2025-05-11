import { useQuery } from "react-query";
import { Product } from "../types";
import { toast } from "sonner";


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CATEGORIES: (string | undefined)[]  = [ "Necklace", "Earring", "Bracelet", "Ring" ] 

export const useGetAllProducts = (categorys:string | undefined) => {


    const getAllProductsRequest = async (): Promise<Product[]> => {
        //const accessToken = await getAccessTokenSilently();
        const url = CATEGORIES.includes(categorys) ? `${API_BASE_URL}/api/my/product/${categorys}`:
      categorys == "All%20Products" ?
         `${API_BASE_URL}/api/my/product` : `${API_BASE_URL}/api/my/product`

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    };

    const {
        data: products,
        isLoading,
        error,
    } = useQuery("fetchAllProducts", getAllProductsRequest);

    if (error) {
        toast.error(error.toString());
    }

    return { products, isLoading, error };
};


export const useGetAllProductsByCAtegory = (category:String) => {


    const getAllProductsByCategoryRequest = async (): Promise<Product[]> => {
        //const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/my/product/category/:${category}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        return response.json();
    };

    const {
        data: productsCat,
        isLoading,
        error,
    } = useQuery("fetchAllProductsByCategory", getAllProductsByCategoryRequest);

    if (error) {
        toast.error(error.toString());
    }

    return { productsCat, isLoading, error };
};
