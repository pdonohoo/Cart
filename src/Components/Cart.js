import React from 'react'

export const Cart = ({cartItems, removeFromCart, quantity}) => (
    <div >
        <h4>Cart</h4>
    <ul style={{
        display:'flex',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        
    }}>
    {cartItems.map((cartItem, index) => 
        <li style={{
        width:'100px',
        height:'100px',
        margin: '10px',
        display:'flex',
        flexDirection:'column',
      listStyle:'none'}} onClick={removeFromCart(index)}>
            {cartItem}
        </li>
        )}
    </ul>
    </div>
)