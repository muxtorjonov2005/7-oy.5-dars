import { useEffect } from 'react';
import useShoppingCart from '../store/useShoppingCart';

function ShoppingCart() {
  const { cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useShoppingCart()

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-center text-xl font-semibold mb-4">Savatcha</h2>
      <div className="flex justify-between mb-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => addToCart({ id: 1, name: 'Mashina', price: 10000, quantity: 1 })}>Mashina qo'shish</button>
        <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={() => addToCart({ id: 2, name: 'Shirt', price: 500, quantity: 1 })}>Shirt qo'shish</button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-md" onClick={clearCart}>Savatchani tozalash</button>
      </div>
      {cartItems.map(item => (
        <div key={item.id} className="mb-4 p-4 bg-gray-200 text-black rounded-md">
          <h3 className="text-lg font-semibold">{item.name}</h3>
          <p>Narxi: {item.price.toFixed(2)} UZS</p>
          <p>Soni: {item.quantity}</p>
          <div className="flex space-x-2 mt-2">
            <button className="px-2 py-1 bg-yellow-500 text-white rounded-md" onClick={() => increaseQuantity(item.id)}>+</button>
            <button className="px-2 py-1 bg-yellow-500 text-white rounded-md" onClick={() => decreaseQuantity(item.id)}>-</button>
            <button className="px-2 py-1 bg-red-500 text-white rounded-md" onClick={() => removeFromCart(item.id)}>O'chirish</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
