import React from 'react'
// import { storeItems } from '../data/Items'

export const Store = ({storeItems, addToCart}) => (
  <div>
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {storeItems.map(({name, price, image, id}) => (
        <li  style={{
          border: 'solid black 1px',
          height: '150px',
          width: '150px',
          textAlign: 'center',
          listStyle: 'none',
          flexDirection: 'column',
          backgroundColor:'#d3d3d3',
          margin: '20px',
                            
        }}>
        <div>
          <div style={{textDecoration:'underline'}}>
          {name}          
          </div>
          <div>
          <img style={{width:150, height: 90}} src={image} />
          </div>
          <div>
          {price}
          </div>          
        </div>
         
          <button onClick={addToCart(name, price, image, id)}>Add to list</button>
        </li>
      ))}
    </ul>
  </div>
)