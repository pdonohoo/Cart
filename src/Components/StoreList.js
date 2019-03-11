import React from 'react'

export const StoreList = ({ animals, addToCart }) => (
    <div>
        <h4>Store</h4>
        <ul style={{
            display: 'flex',
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
        }}>
            {animals.map(({animal, price, img}) => (
                <li style={{
                    border: 'solid black 1px',
                    justifyContent: 'flex-start',
                    width: '100px',
                    height: '100px',
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    margin: '10px',
                    textAlign:'center',
                    backgroundColor: 'tan'
                }}
                >
                    {[animal, img]} <br /> <hr /> {price}
                    <button onClick={addToCart(animal, price)} >add to list</button>
                </li>
            ))}
        </ul>
    </div>
)