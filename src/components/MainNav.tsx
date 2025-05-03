
//import { useAuth0 } from "@auth0/auth0-react";
//import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

import { Link } from "react-router";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UserName";
//import UsernameMenu from "./UsernameMenu";

const MainNav = () => {
 const { loginWithRedirect, isAuthenticated} = useAuth0();

  return (
    // <span className="flex space-x-2 items-center">
    //   {isAuthenticated ? (
    //     <>
    //       <Link to="/order-status" className="font-bold hover:text-orange-500">
    //         Order Status
    //       </Link>
    //      {/* <UsernameMenu /> */}
          
    //     </>
    //   ) : (
    //     <Button
    //       variant="ghost"
    //       className="font-bold hover:text-orange-500 hover:bg-white"
    //     //   onClick={async () => await loginWithRedirect()}
    //     >
    //       Log In
    //     </Button>
    //   )}
    // </span>

    <nav className="hidden md:flex space-x-6 text-sm font-medium">
            <Link 
              to="/" 
              className={cn(
                " hover:text-[#E3AD26] transition-colors hover:underline decoration-2 decoration-[#E3AD26] "
              )}
            >
              Home
            </Link>
            <div className="relative group">
              <DropdownMenu >
                <DropdownMenuTrigger asChild>
                  <div className="hover:text-[#E3AD26] flex items-center cursor-pointer">
                    Collections
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48 border-0 bg-amber-50 " >
                  <DropdownMenuItem className="block px-4 py-2 hover:bg-accent">
                    Necklaces
                  </DropdownMenuItem>
                  <DropdownMenuItem className="block px-4 py-2 hover:bg-accent">
                    Earings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="block px-4 py-2 hover:bg-accent">
                    Bracelets
                  </DropdownMenuItem>
                  <DropdownMenuItem className="block px-4 py-2 hover:bg-accent">
                    Rings
                  </DropdownMenuItem>

                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <Link 
              to="/products" 
              className={cn(
                "hover:text-[#E3AD26] transition-colors"
              )}
            >
              All Products
            </Link>
            <Link 
              to="#" 
              className="hover:text-[#E3AD26] transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="#" 
              className="hover:text-[#E3AD26] transition-colors"
            >
              Contact
            </Link>

            
      {isAuthenticated ? (
        <>
         
         <UsernameMenu />
          
        </>
      ) : (
        <Button
          variant="ghost"
          className="font-bold hover:text-[#E3AD26] hover:bg-white"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
   
            
          </nav>


  );
};

export default MainNav;
