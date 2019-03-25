import React from 'react'

export const Cart = ({ cartItems, removeFromCart }) => (
  <div>
    <ul>
      {cartItems.map(({ ...cartItem }, id) => (
        <li onClick={removeFromCart(cartItem.id)}>
          {cartItem.item}
          {cartItem.price}
                   
        </li>
      ))}
    </ul>
  </div>
)