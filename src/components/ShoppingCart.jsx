import React from 'react';
import useShoppingCart from '../store/useShoppingCart';

function ShoppingCart() {
  const { cartItems, addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useShoppingCart()

  return (
    <div>
      <h1>Savatcha</h1>
      <button onClick={() => addToCart({ id: 1, name: 'Mashina', price: 10000, quantity: 1 })}>Mashina qo'shish</button>
      <button onClick={() => addToCart({ id: 2, name: 'Shirt', price: 500, quantity: 2 })}>Shirt qo'shish</button>
      <button onClick={clearCart}>Savatchani tozalash</button>
      {cartItems.map(item => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Narxi: {item.price}</p>
          <p>Soni: {item.quantity}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>O'chirish</button>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart