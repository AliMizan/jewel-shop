import { create } from 'zustand';

interface CartItem {
  _id: string;
  name: string;
  productPrice: number;
  imageUrl: string;
  quantity? : number ;
}

interface CartState {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  cart: [],

  addToCart: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i._id === item._id);
      if (existing) {
        return {
          cart: state.cart.map((i) =>
            i._id === item._id ? { ...i, quantity: i.quantity! + 1 } : i
          ),
        };
      }
      return { cart: [...state.cart, item] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== id),
    })),

  increaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item._id === id ? { ...item, quantity: item.quantity! + 1 } : item
      ),
    })),

  decreaseQuantity: (id) =>
    set((state) => ({
      cart: state.cart
        .map((item) =>
          item._id === id ? { ...item, quantity: item.quantity! - 1 } : item
        )
        .filter((item) => item.quantity! > 0),
    })),

  clearCart: () => set({ cart: [] }),
}));
// stores/useCartStore.ts
// import { create } from 'zustand';

// export interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// }

// interface CartState {
//   cart: CartItem[];
//   addItem: (item: CartItem) => void;
//   removeItem: (id: string) => void;
//   increaseQuantity: (id: string) => void;
//   decreaseQuantity: (id: string) => void;
//   clearCart: () => void;
// }

// export const useCartStore = create<CartState>((set) => ({
//   cart: [],

//   addItem: (item) =>
//     set((state) => {
//       const existing = state.cart.find((i) => i.id === item.id);
//       if (existing) {
//         return {
//           cart: state.cart.map((i) =>
//             i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
//           ),
//         };
//       }
//       return { cart: [...state.cart, item] };
//     }),

//   removeItem: (id) =>
//     set((state) => ({
//       cart: state.cart.filter((item) => item.id !== id),
//     })),

//   increaseQuantity: (id) =>
//     set((state) => ({
//       cart: state.cart.map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     })),

//   decreaseQuantity: (id) =>
//     set((state) => ({
//       cart: state.cart
//         .map((item) =>
//           item.id === id ? { ...item, quantity: item.quantity - 1 } : item
//         )
//         .filter((item) => item.quantity > 0),
//     })),

//   clearCart: () => set({ cart: [] }),
// }));
