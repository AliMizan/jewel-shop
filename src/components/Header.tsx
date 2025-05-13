import { Link } from "react-router-dom";
//import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
// import MobileNav from "./MobileNav";
// import MainNav from "./MainNav";
import logo from "../assets/logo.jpg"
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const Header = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <div className="sticky top-0 z-40 bg-white shadow-md">
     <div className="container mx-auto px-4">
     <div className="flex justify-between items-center py-4">
        <Link
          to="/"
          className="font-playfair text-[#E3AD26] text-2xl md:text-3xl font-bold "
        >
        <img src={logo} height={90} width={90} className="object-cover" />
        </Link>
        <div className="md:hidden flex gap-3">
          <Link 
              to="/cart" 
              className="hover:text-[#E3AD26] transition-colors"
            >
              <div className="relative">
                <ShoppingCart  />

      
        { cart.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
          {cart.length}
        </span>
      )}
      
    </div>
            </Link>
          <MobileNav />
        </div>
        <div className="hidden md:block" >
            <MainNav/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Header;