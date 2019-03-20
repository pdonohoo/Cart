import React from 'react'

export const Cart = ({ cartItems, removeFromCart }) => (
  <div>
    <ul>
      {cartItems.map((cartItem, index) => (
        <li onClick={removeFromCart(index)}>
          {cartItem}
          
        </li>
      ))}
    </ul>
  </div>
)