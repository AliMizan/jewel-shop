import { useParams } from "react-router-dom"

import ProductFilters from "../components/product-filter"
import ProductCard from "../components/ProductCard"
import { Separator } from "../components/ui/separator"
import { useEffect } from "react"
import { useQuery } from "react-query"
import { Product } from "../types"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const CATEGORIES: (string | undefined)[]  = [ "Necklace", "Earring", "Bracelet", "Ring" ] 
function ProductsPage() {

  const {category} = useParams()
  useEffect(() => {
    console.log(category)
  })

  const categorys = category
 // const {products,isLoading,error} = useGetAllProducts(categorys)
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products', {category}],
    queryFn: async () => {
      const url = CATEGORIES.includes(categorys) ? `${API_BASE_URL}/api/my/product/${categorys}`:
      categorys == "All%20Products" ?
         `${API_BASE_URL}/api/my/product` : `${API_BASE_URL}/api/my/product`
        
      const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    }
  });

  if(error) return <div> error</div>


  return (
    <main className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">All Products</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar with filters */}
          <div className="lg:w-1/4">
            <ProductFilters currentCategory={categorys}
              
            />
          </div>
          
          <Separator orientation="vertical" className="hidden lg:block" />
          
          {/* Products grid */}
          <div className="lg:w-3/4">
            {isLoading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              </div>
            ) : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products?.map(p => (
                <ProductCard key={p._id} product={p}/>
              ))}
              </div>}
          </div>
        </div>
      </main>
  )
}

export default ProductsPage