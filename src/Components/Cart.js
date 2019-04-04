import React from 'react'

export const Cart = ({ cartItems, removeFromCart }) => (
  <div >
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {cartItems.map(({ ...cartItem }, id) => (
        <li style={{
          display:'flex',
          flexDirection:'wrap',
          border: 'solid black 1px',
          height: '150px',
          width: '150px',
          textAlign: 'center',
          listStyle: 'none',
          flexDirection: 'column',
          backgroundColor:'#d3d3d3',
          margin: '20px',
                            
        }} onClick={removeFromCart(cartItem.id)}>

          <div>
          {cartItem.item}
          <img style={{width:150, height: 90}} src={cartItem.photo} />
          {cartItem.price}
          </div>
          
                   
        </li>
      ))}
    </ul>
  </div>
)