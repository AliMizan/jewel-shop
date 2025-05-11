
import { Minus, Plus, Trash } from "lucide-react";

import { useCartStore } from "../stores/useCartStore";


// type CartItem = {
//   _id: string;
//   name: string;
//   price: number;
//   quantity: number;
//   image:string
// };


export default function Cart() {

  const cart = useCartStore((state) => state.cart);
  const removeItem = useCartStore((state) => state.removeFromCart);
  const increase = useCartStore((state) => state.increaseQuantity);
  const decrease = useCartStore((state) => state.decreaseQuantity);

  const total = cart.reduce((acc, item) => acc + item.productPrice * item.quantity!, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
        <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-500 text-lg">Browse products and add items to your cart.</p>
      </div>
    );
  }

//   const { user } = useAuth0();
//  //// const storedCartItems = sessionStorage.getItem(`cartItems-${user?.name}`);
//  const [cartItems, setCartItems] = useState<CartItem[]>([]);

//    const removeFromCart = (cartItem: CartItem) => {
//      setCartItems((prevCartItems) => {
//        const updatedCartItems = prevCartItems.filter(
//          (item) => cartItem._id !== item._id
//        );
 
//        sessionStorage.setItem(
//          `cartItems-${user?.name}`,
//          JSON.stringify(updatedCartItems)
//        );
 
//        return updatedCartItems;
//      });
//    }

//   useEffect(() => {
//     const storedCart = sessionStorage.getItem(`cartItems-${user?.name}`);
//     if (storedCart) {
//       setCartItems(JSON.parse(storedCart));
//     }
//   }, []);

//   if (cartItems.length === 0) {
//     return <div className="p-6 text-xl">Your cart is empty.</div>;
//   }

//   const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   if (cartItems.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center text-2xl text-gray-600">
//         Your cart is empty.
//       </div>
//     );
//   }

  return (
    // <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //   <h1 className="text-4xl font-playfair font-bold mb-10 text-gray-900">Your Shopping Bag</h1>
    //   {cartItems.length}

    //   <div className="space-y-8">
    //     {cartItems.map((item) => (
         
    //       <div
    //         key={item._id}
    //         className="flex flex-col sm:flex-row items-center sm:items-start justify-between border-b pb-8"
    //       >
    //          <Link to={`/detail/${item._id}`}>
    //         <div className="flex items-center gap-6 w-full sm:w-2/3">
    //           <img
    //             src={item.image}
    //             alt={item.name}
    //             className="w-28 h-28 object-cover rounded-xl border"
    //           />
    //           <div>
    //             <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
    //             <p className="text-gray-500 text-sm mt-1">Qty: {item.quantity}</p>
    //             <p className="text-gray-800 font-medium mt-2">
    //               Rs {(item.price * item.quantity).toFixed(2)}
    //             </p>
    //           </div>
    //         </div>
    //         </Link>
    //         <div className="mt-4 flex sm:mt-0 text-right w-full sm:w-1/3">
    //         <Trash
    //             className="cursor-pointer"
    //             color="red"
    //             size={20}
    //             onClick={() => removeFromCart(item)}
    //           />
    //           <p className="text-lg font-medium text-gray-700">
    //             Rs {item.price.toFixed(2)} <span className="text-sm text-gray-500">/ each</span>
    //           </p>
    //         </div>
    //       </div>
        
    //     ))}
    //   </div>

    //   <div className="text-right mt-10">
    //     <p className="text-2xl font-semibold text-gray-900">
    //       Total: <span className="text-amber-600">${total.toFixed(2)}</span>
    //     </p>
    //     <button className="mt-6 inline-block bg-black text-white text-lg px-8 py-3 rounded-full hover:bg-gray-900 transition-all">
    //       Proceed to Checkout
    //     </button>
    //   </div>
    // </div>

    <>
     {/* <div>
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length}
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item._id} className="flex items-center gap-4 mb-4">
            <img src={item.imageUrl} className="w-16 h-16" />
            <div className="flex-1">
              <p>{item.name}</p>
              <p>${item.productPrice} x {item.quantity}</p>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => decrease(item._id)}>-</button>
              <button onClick={() => increase(item._id)}>+</button>
              <button onClick={() => remove(item._id)} className="text-red-500">Remove</button>
            </div>
          </div>
        ))
      )}
    </div> */}
    
  
    <div className="max-w-5xl mx-auto p-6 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">Your Shopping Cart</h1>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-white shadow rounded-2xl border"
          >
            <img src={item.imageUrl} alt={item.name} className="w-28 h-28 object-cover rounded-xl" />

            <div className="flex-1 w-full">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600">Rs {item.productPrice.toFixed(2)}/- each</p>
              <div className="flex items-center gap-3 mt-4">
                <button
                  onClick={() => decrease(item._id)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                >
                  <Minus size={16} />
                </button>
                <span className="text-lg font-medium">{item.quantity}</span>
                <button
                  onClick={() => increase(item._id)}
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between sm:flex-col gap-4 sm:gap-2">
              <p className="text-lg font-semibold">
                Rs {(item.productPrice * item.quantity!).toFixed(2)}
              </p>
              <button
                onClick={() => removeItem(item._id)}
                className="text-red-500 hover:text-red-600"
                title="Remove item"
              >
                <Trash/>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right">
        <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
        <button className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );


    </>
  );
};

