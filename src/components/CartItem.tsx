

import { CardContent, CardHeader, CardTitle } from "../components/ui/card";

import { Badge } from "../components/ui/badge";

import { Trash } from "lucide-react";
import { Product } from "../types";
import { Separator } from "../components/ui/separator";
import { CartItem } from "../pages/DetailPage";



type Props = {
  product: Product;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const Cart = ({ product, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + product.productPrice;

    return (totalWithDelivery ).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>Rs {getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {item.quantity}
              </Badge>
              {item.name}
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              Rs {((item.price * item.quantity) ).toFixed(2)}
            </span>
          </div>
        ))}
         <Separator className="my-12 bg-[#E7E5E4]" />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Rs 100/-</span>
        </div>
         <Separator className="my-12 bg-[#E7E5E4]" />
      </CardContent>
    </>
  );
};

export default Cart;
