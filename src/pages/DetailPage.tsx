import { Link, useParams } from "react-router-dom"
import { useGetProduct } from "../api/ProductApi"

import { Separator } from "../components/ui/separator";

import { Button } from "../components/ui/button";



//import CartItem from "../components/CartItem";
//import { useAuth0 } from "@auth0/auth0-react";

import { useCartStore } from '../stores/useCartStore';

import { toast } from "sonner";
import CartSheet from "../components/CartSheet";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  image:string
};

function DetailPage() {

const AddToCart = useCartStore((state) => state.addToCart);
    //const { user } = useAuth0();
    const { productId } = useParams()
    const { product, error } = useGetProduct(productId);

    // const onCheckout = (userFormData : UserFormData) =>{
    //     console.log("userData",userFormData)
    // }

    const handleAddToCart = () => {
    AddToCart({...product!,quantity:1})
    toast.success(`${product?.name} added to cart`, {
      description: `Price: ₹${product?.productPrice}`,
    });
  };

//     const [cartItems, setCartItems] = useState<CartItem[]>(() => {
//     const storedCartItems = sessionStorage.getItem(`cartItems-${user?.name}`);
//     return storedCartItems ? JSON.parse(storedCartItems) : [];
//   });

  // const addToCart = (Product:Product) => {
  //   setCartItems((prevCartItems) => {
  //     const existingCartItem = prevCartItems.find(
  //       (cartItem) => cartItem._id === productId
  //     );

  //     let updatedCartItems;

  //     if (existingCartItem) {
  //       updatedCartItems = prevCartItems.map((cartItem) =>
  //         cartItem._id === Product._id
  //           ? { ...cartItem, quantity: cartItem.quantity + 1 }
  //           : cartItem
  //       );
  //     } else {
  //       updatedCartItems = [
  //         ...prevCartItems,
  //         {
  //           _id: Product._id,
  //           name: Product.name,
  //           price: Product.productPrice,
  //           quantity: 1,
  //           image:Product.imageUrl
  //         },
  //       ];
  //     }

  //     sessionStorage.setItem(
  //       `cartItems-${user?.name}`,
  //       JSON.stringify(updatedCartItems)
  //     );

  //     return updatedCartItems;
  //   });
  // };

//   const removeFromCart = (cartItem: CartItem) => {
//     setCartItems((prevCartItems) => {
//       const updatedCartItems = prevCartItems.filter(
//         (item) => cartItem._id !== item._id
//       );

//       sessionStorage.setItem(
//         `cartItems-${user?.name}`,
//         JSON.stringify(updatedCartItems)
//       );

//       return updatedCartItems;
//     });
//   };


  if(error){
    return <div>
        error
    </div>
  }


    return (
        <main className="container mx-auto px-4 py-12" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Product Image */}
                <div className="rounded-lg overflow-hidden">
                    <img
                        src={product?.imageUrl}
                        alt={product?.name}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Product Details */}
                <div>
                    <h1 className="text-3xl font-playfair font-bold mb-2">{product?.name}</h1>
                    <div className="flex items-center mb-4">
                        {/* <div className="flex mr-2">
                {generateStars(product.rating).map((className, index) => (
                  <i key={`star-${index}`} className={className}></i>
                ))}
              </div> */}
                        <span className="text-sm text-gray-500">({product?.reviews} reviews)</span>
                    </div>
                    <div className="text-2xl font-medium text-[#C6C6C6] mb-6">
                        Rs {product?.productPrice}/-
                    </div>

                    <p className="text-gray-700 mb-8">{product?.description}</p>

                    <Separator className="my-12 bg-[#E7E5E4]" />

                    <div className="flex items-center space-x-4 mb-6">
                        
                        <Button onClick={handleAddToCart} className="flex-1 h-[42px] text-white hover:bg-gray-500 bg-[#C6C6C6]">
                            Add to Cart
                        </Button>
                        <CartSheet/>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-center space-x-2 mb-2">
                            <i className="fas fa-truck text-primary"></i>
                            <span className="font-medium">Free Shipping</span>
                        </div>
                        <p className="text-sm text-gray-600">
                            Free shipping on all orders over Rs 500
                        </p>
                    </div>

                    <Separator className="my-12 bg-[#E7E5E4]" />

                    <div className="flex flex-col space-y-2">
                        <div className="flex">
                            <span className="w-24 text-gray-500">Category:</span>
                            <Link
                                to={`/product/${product?.category}`}
                                className="text-[#C6C6C6] hover:underline"
                            >
                                {product?.category}
                            </Link>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-gray-500">Material:</span>
                            <span>Premium Gold</span>
                        </div>
                        <div className="flex">
                            <span className="w-24 text-gray-500">Guarantee:</span>
                            <span>Lifetime Warranty</span>
                        </div>
                    </div>
                </div>
            </div>

            <Separator className="my-12 bg-[#E7E5E4]" />

            <div className="mb-16">
                <h2 className="text-4xl lg:text-3xl font-playfair font-bold mb-8 text-gray-900">
                    Product Details
                </h2>

                <div className="space-y-6 text-lg lg:text-xl text-gray-700 leading-8 lg:leading-9 max-w-4xl">
                    <p className="italic" >
                        Each piece of jewelry from <span className="font-semibold text-gray-900">Suva Jewellers</span> is
                        crafted with meticulous attention to detail, using only the finest materials to ensure
                        exceptional quality and lasting beauty.
                    </p>

                    <p className="italic" >
                        Our artisans combine time-honored techniques with contemporary design sensibilities to create
                        jewelry that is both timeless and modern. This{" "}
                        <span className="font-semibold text-gray-900">{product?.name.toLowerCase()}</span> is designed to be
                        cherished for generations.
                    </p>

                    <ul className="list-disc list-inside space-y-2 pt-4">
                        <li>Premium quality materials</li>
                        <li>Handcrafted by expert artisans</li>
                        <li>Comes in an elegant gift box</li>
                        <li>Certificate of authenticity included</li>
                    </ul>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <i className="fas fa-gem text-primary text-3xl mb-4"></i>
                    <h3 className="font-medium mb-2">Premium Materials</h3>
                    <p className="text-sm text-gray-600">
                        We use only the highest quality materials in our jewelry
                    </p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <i className="fas fa-hand-holding-heart text-primary text-3xl mb-4"></i>
                    <h3 className="font-medium mb-2">Handcrafted</h3>
                    <p className="text-sm text-gray-600">
                        Each piece is carefully handcrafted by our skilled artisans
                    </p>
                </div>
                <div className="text-center p-6 border border-gray-200 rounded-lg">
                    <i className="fas fa-certificate text-primary text-3xl mb-4"></i>
                    <h3 className="font-medium mb-2">Lifetime Warranty</h3>
                    <p className="text-sm text-gray-600">
                        All our jewelry comes with a comprehensive lifetime warranty
                    </p>
                </div>
            </div>
        </main>
    )
}

export default DetailPage