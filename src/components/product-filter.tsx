import { useState } from "react";
import { Separator } from "./ui/separator";

import { Link } from "react-router-dom";





const CATEGORIES = ["All Products", "Necklace", "Earring", "Bracelet", "Ring"];


interface ProductFiltersProps {
    currentCategory?: string;
    //onFilterChange: (filters: { category?: string; priceRange?: { min: number; max: number } }) => void;
  }

function ProductFilters({ currentCategory }: ProductFiltersProps) {


  
  
    const [selectedCategory, setSelectedCategory] = useState(currentCategory || "All Products");
   

    const handlecategoryClick = (category:string) =>{
      setSelectedCategory(category);
    
    }

    

    

  return (
    <div className="space-y-6" >
        <div>
        <h3 className="text-lg font-medium mb-3">Categories</h3>
        <ul className="space-y-2">
          {CATEGORIES.map((category) => (
            <li key={category}>
              <Link to={`/products/${category}`}>
              <button
                className={`w-full text-left py-1 hover:text-[#C6C6C6] transition-colors ${
                  selectedCategory === category ? "text-primary font-medium" : ""
                }`}
                onClick={() => handlecategoryClick(category)}
                
              >
                {category}
              </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Separator className="my-12 bg-[#E7E5E4]" />

      {/* <div>
        <h3 className="text-lg font-medium mb-3">Price</h3>
        <ul className="space-y-2 mb-4">
          {PRICE_RANGES.map((range) => (
            <li key={range.label}>
              <button
                className={`w-full text-left py-1 hover:text-primary transition-colors ${
                  selectedPriceRange?.min === range.min && selectedPriceRange?.max === range.max
                    ? "text-primary font-medium"
                    : ""
                }`}
                // onClick={() => handlePriceRangeClick(range)}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div>
              <Label htmlFor="min-price">Min</Label>
              <Input
              className={cn("border-0",onclick && "border-[#C6C6C6]")}
                id="min-price"
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min="0"
              />
            </div>
            <div className="mt-6">-</div>
            <div>
              <Label htmlFor="max-price">Max</Label>
              <Input 
              className="border-0 focus:border-[#C6C6C6] "
                id="max-price"
                type="number"
                placeholder="∞"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min="0"
              />
            </div>
          </div>
          <Button
            size="sm" 
            className="w-full bg-[#C6C6C6]"

            // onClick={handleCustomPriceFilter}
          >
            Apply
          </Button>
        </div>
      </div> */}

    </div>
  )
}

export default ProductFilters