import { Link } from "react-router-dom";
//import MobileNav from "./MobileNav";
import MainNav from "./MainNav";
import MobileNav from "./MobileNav";
// import MobileNav from "./MobileNav";
// import MainNav from "./MainNav";

const Header = () => {
  return (
    <div className="sticky top-0 z-40 bg-white shadow-md">
     <div className="container mx-auto px-4">
     <div className="flex justify-between items-center py-4">
        <Link
          to="/"
          className="font-playfair text-[#E3AD26] text-2xl md:text-3xl font-bold "
        >
          Suva jewels
        </Link>
        <div className="md:hidden">
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