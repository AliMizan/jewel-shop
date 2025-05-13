import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu >
      <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-[#C6C6C6] ">
        <CircleUserRound className="text-[#C6C6C6]" />
        {user?.name}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" bg-amber-50">
       
        <DropdownMenuItem>
          <Link to="/user-profile" className="font-bold hover:text-[#C6C6C6]">
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator className="bg-slate-500" />
        <DropdownMenuItem>
          <Button
            onClick={() => logout()}
            className="flex flex-1 font-bold bg-[#C6C6C6]"
          >
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;