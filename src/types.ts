export type User = {
    _id: string;
    email: string;
    name: string;
    addressLine1: string;
    city: string;
    country: string;
  };
  
  export type ProductItem = {
    _id: string;
    name: string;
    price: number;
  };
  
  export type Product = {
    _id: string;
    user: string;
    name: string;
    description:string
    productPrice: number;
    imageUrl: string;
    category:string;
    rating:number;
    reviews:number;
    feaured:Boolean;
    createdAt:string;
    updatedat:string
  };
  
  export type OrderStatus =
    | "placed"
    | "paid"
    | "inProgress"
    | "outForDelivery"
    | "delivered";
  
  // export type Order = {
  //   _id: string;
  //   restaurant: Restaurant;
  //   user: User;
  //   cartItems: {
  //     menuItemId: string;
  //     name: string;
  //     quantity: string;
  //   }[];
  //   deliveryDetails: {
  //     name: string;
  //     addressLine1: string;
  //     city: string;
  //     email: string;
  //   };
  //   totalAmount: number;
  //   status: OrderStatus;
  //   createdAt: string;
  //   restaurantId: string;
  // };
  
  // export type RestaurantSearchResponse = {
  //   data: Restaurant[];
  //   pagination: {
  //     total: number;
  //     page: number;
  //     pages: number;
  //   };
  // };
  