import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Separator } from "@radix-ui/react-dropdown-menu"

//import { UserFormData } from "./forms/user-profile-form/UserProfileForm"
import { useCartStore } from "../stores/useCartStore"


function CartSheet() {
    // const onCheckout = (userFormData: UserFormData) => {
    //     console.log("userData", userFormData)
    // }

    const cart = useCartStore((state) => state.cart);
    const removeItem = useCartStore((state) => state.removeFromCart);
    const increase = useCartStore((state) => state.increaseQuantity);
    const decrease = useCartStore((state) => state.decreaseQuantity);
    const total = cart.reduce((acc, item) => acc + item.productPrice * item.quantity!, 0);
    return (
        <div>
            <Sheet>
                <SheetTrigger>
                    <Button className="flex-1 h-[42px] text-white bg-black hover:bg-gray-500">
                        Check Cart
                    </Button>
                </SheetTrigger>
                <SheetContent className=" bg-gray-100 flex flex-col justify-between  w-[400px] sm:w-2xl border-0  ">
                    <div className="p-8 space-y-3">
                        <div className="w-full text-4xl font-bold font-mono py-3" >Your Cart</div>
                        <Separator className="bg-gray-300 h-1"/>
                        {cart.map((item) => (
                            <div className="flex gap-6 w-full "  >
                                <div>
                                    <img src={item.imageUrl} className="h-30 w-40" />

                                </div>
                                <div className="flex flex-col w-full justify-between ">
                                    <div className="flex justify-between items-center"  >
                                        <div className=" flex flex-col" >
                                            <div className="md:text-2xl font-semibold"> {item.name}</div>
                                            <div className="md:text-3xs text-gray-500   "> {item.productPrice}/- each</div>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item._id)}
                                            className=" hover:text-red-600"
                                            title="Remove item"
                                        >
                                            <Trash2 />
                                        </button>

                                    </div>
                                    <div className="flex justify-between items-center"  >
                                        <div className="md:text-xl  ">  Rs {(item.productPrice * item.quantity!).toFixed(2)}/-</div>
                                        <div className="flex items-center gap-3 mt-4 border-gray-300 border-2 rounded-xl">
                                            <Button
                                                onClick={() => decrease(item._id)}
                                                className="p-2  hover:bg-gray-300 rounded-b-md"
                                            >
                                                <Minus size={16} />
                                            </Button>
                                            <span className="text-lg font-medium">{item.quantity}</span>
                                            <Button
                                                onClick={() => increase(item._id)}
                                                className="p-2  hover:bg-gray-300 "
                                            >
                                                <Plus size={16} />
                                            </Button>
                                        </div>


                                    </div>


                                </div>

                            </div>
                        ))}

                    </div>


                    <div className=" w-full flex flex-col p-8 bg-white h-60 shadow-2xl shadow-black gap-y-6" >
                        <div className="flex justify-between " >
                            <div className=" flex text-xl gap-x-3  " >
                                <div className="font-semibold" >Subtotal</div>
                                <div className="text-gray-500" >
                                    ({cart.length})items
                                </div>

                            </div>
                            <div className="font-bold text-xl" >
                                Rs {total}/-
                            </div>
                        </div>

                        <Button className="bg-black hover:bg-gray-600 h-20 rounded-2xl text-white text-2xl ">
                            Continue to Checkout
                        </Button>
                        <div className="flex items-center justify-center font-semibold ">
                            Hurry up before it sells out
                        </div>
                    </div>



                </SheetContent>
            </Sheet>
        </div>
    )
}

export default CartSheet