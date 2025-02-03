import { create } from 'zustand';

const useShoppingCart = create((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => ({
    cartItems: [...state.cartItems, item]
  })),
  removeFromCart: (id) => set((state) => ({
    cartItems: state.cartItems.filter(item => item.id !== id)
  })),
  clearCart: () => set({ cartItems: [] }),
  increaseQuantity: (id) => set((state) => ({
    cartItems: state.cartItems.map(item => 
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  })),
  decreaseQuantity: (id) => set((state) => ({
    cartItems: state.cartItems.map(item => 
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    )
  }))
}))

export default useShoppingCart