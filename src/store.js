import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      cart: [],
      increaseQty: (productName, productQty) => {
        const currentCart = get().cart;
        const index = currentCart.findIndex(obj => obj.name === productName);
        set(state => (state.cart[index].qty += productQty));
      },
      decreaseQty: (productName, productQty) => {
        const currentCart = get().cart;
        const index = currentCart.findIndex(obj => obj.name === productName);
        if (currentCart[index].qty === 1) {
          set(state => (state.cart.splice(index, 1)));
        } else {
          set(state => (state.cart[index].qty -= productQty));
        }   
      },
      addToCart: (newItem) => set(state => state.cart.push(newItem)),
      cartTotal: () => {
        let totalAmount = [];
        let currentCart = get().cart;
        currentCart.forEach(item => {
            let itemTotal = item.price * item.qty;
            totalAmount.push(itemTotal);
        })
        if (totalAmount.length === 0) {
          return 0;
        } else {
        return totalAmount.reduce((a, b) => {
          return a + b;
        })}
      },
      clearCart: () => set({cart: []})
    }),
    {
      name: "cart-storage",
    }
  ),
);

export const displayStore = create(set => ({
    displayCart: false,
    setDisplayCart: () => set(state => ({displayCart: !state.displayCart})),
  }))

export const displayConfirmation = create(set => ({
    displayConfirm: false,
    setDisplayConfirmation: () => set(state => ({displayConfirm: !state.displayConfirm})),
  }))
