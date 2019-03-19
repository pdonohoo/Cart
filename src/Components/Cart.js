import React from 'react'

export const Cart = ({ cartItems, removeFromCart }) => (
  <div>
    <ul>
      {cartItems.map((cartItem) => (
        <li onClick={removeFromCart()}>
          {cartItem}
          
        </li>
      ))}
    </ul>
  </div>
)