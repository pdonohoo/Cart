import React from 'react'
// import { storeItems } from '../data/Items'

export const Store = ({storeItems, addToCart}) => (
  <div>
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      
      
    }}>
      {storeItems.map(({item, price, photo}) => (
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
          {item}          
          </div>
          <div>
          <img style={{width:150, height: 90}} src={photo} />
          </div>
          <div>
          {price}
          </div>          
        </div>
         
          <button onClick={addToCart(item, price, photo)}>Add to list</button>
        </li>
      ))}
    </ul>
  </div>
)