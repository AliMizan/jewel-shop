import { Link } from "react-router-dom";
import { Product } from "../types";
import { Button } from "./ui/button";
import { Star } from "lucide-react";


interface ProductCardProps {
  product: Product;
}

function ProductCard({product}:ProductCardProps) {
  return (
    <>
    {/* <div className="flex flex-col" >
    
        <div className="mb-4 relative overflow-hidden rounded-lg">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-80 object-cover transition-transform group-hover:scale-105"
          />
          <Button
            size="icon"
            className="absolute bottom-4 right-4 bg-white hover:bg-accent rounded-full p-3 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={handleAddToCart}
            disabled={isLoading}
            aria-label="Add to cart"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary"></div>
            ) : (
              <i className="fas fa-shopping-bag text-primary"></i>
            )}
          </Button>
        </div>
        <h3 className="font-playfair font-medium text-lg">{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="font-medium text-primary">{product.productPrice}</p>
          <div className="flex items-center">
            {(product.rating)}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
        </div>
      
      </div> */}

      <Link to={`/detail/${product._id}`} >
      <div className="max-w-xs rounded-2xl overflow-hidden shadow-lg bg-white p-4 hover:shadow-xl transition">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-80 object-cover transition-transform group-hover:scale-105"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-primary text-xl font-bold mt-1">Rs {product.productPrice}/-</p>
        <div className="flex items-center mt-2 space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              fill={i < product.rating ? '#facc15' : 'none'}
              stroke={i < product.rating ? '#facc15' : '#d1d5db'}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({product.reviews} reviews)</span>
        </div>
      </div>
    </div>
    </Link>
    </>
  )
}

export default ProductCard