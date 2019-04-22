import React, { Component } from 'react';
import './App.css';
import { Store } from './Components/StoreList';
import { Cart } from './Components/Cart';
import { getItems, getCart } from './data/Items';



class MainStore extends Component {

  state = {
    items: [],
    cart: [],
  }
 

  addToCart = (name, price, image, id) => () => {
    console.log("adding one to the cart: ", id )
    return fetch('http://localhost:5000/cart',{
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        item: name,
        price: price,
        photo: image
      })
    })
      // .then(response => response.json())
      .then(() => getCart())
      .then(response => {
        console.log(response)
        this.setState({
          // cart: [...this.state.cart, response]
          cart: response
        })
      })
  }

  removeFromCart = (_id) => () => {
    return fetch(`http://localhost:5000/cart/${_id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => getCart()
      .then(response => {
        console.log('New F. TYPE: ', typeof response)
        console.log('New F. CFBE: ', response)
        this.setState({
          cart: response
        })
      }))
  }

  componentDidMount() { 
    getItems()
      .then(items => {
        console.log('Itesm from BE: ', items)
        this.setState({
          items
        })
      })

    getCart()
      .then(cart => {
        console.log('cart items', cart)
        this.setState({
        cart
      })
    })
  }

  



  render() {

    return (
      <div style={{
        backgroundColor: 'gray',
        alignContent: 'center',
        margin: 0,
      }}>
        

        <header style={{
          textAlign: 'center',
        }}>
          <h1>The Dreamer Store</h1>
        </header>
        
        <div style={{display:'flex'}}>
          <div style={{width: '75%'}} >
            <Store storeItems={this.state.items} addToCart={this.addToCart} />
          </div>
          <div style={{ width: '25%', borderLeft:'1px solid black', textAlign: 'center' }}>
            <h3>Cart</h3>
            <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />
          </div>
        </div>
      </div>
    );
  }
}

export default MainStore;