import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

import { useGetMyUser } from "../api/MyUserApi";
import UserProfileForm, { UserFormData } from "./forms/user-profile-form/UserProfileForm";
import { useCartStore } from "../stores/useCartStore";


type Props = {
  onCheckout: (userFormData: UserFormData) => void;
  
};

const CheckoutButton = ({ onCheckout }: Props) => {
    const cart = useCartStore((state) => state.cart);
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();
  const disabled = cart.length === 0;

  const { currentUser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-[#A3] flex-1">
        Log in to check out
      </Button>
    );
  }

  if (isAuthLoading || !currentUser ) {
    return <LoadingButton />;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-[#C6C6C6] flex-1">
          Go to checkout
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] md:min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentUser={currentUser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Deliery Details"
          buttonText="Continue to payment"
        />
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutButton;
