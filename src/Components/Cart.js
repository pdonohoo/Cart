import React from 'react'

export const Cart = ({cartItems, removeFromCart}) => (
    <div >
        <h4>Cart</h4>
    <ul style={{
        display:'flex',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        
    }}>
    {cartItems.map((cartItem, index) => 
        <li style={{border:'solid black 1px',
        width:'100px',
        height:'100px',
        margin: '10px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        textAlign:'center',
      listStyle:'none'}} onClick={removeFromCart(index)}>
            {cartItem}
        </li>
        )}
    </ul>
    </div>
)