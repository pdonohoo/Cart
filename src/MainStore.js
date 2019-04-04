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
    console.log("adding one to the cart: ", id)
    // const cart = [...this.state.cart, {item, price}]
    return fetch('http://localhost:5000/cart', {
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
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          cart: response
        })
      })
      

  }

  removeFromCart = (id) => () => {
    // this.state.cart.splice(index, 1)
    return fetch(`http://localhost:5000/cart/${id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log('New F. TYPE: ', typeof response)
        console.log('New F. CFBE: ', response)
        this.setState({
          cart: response
        })
      })
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
        height: 'relative',
        alignContent: 'center',
        margin: 0,
      }}>
        

        <header style={{
          textAlign: 'center',
        }}>
          <h1>The Dreamer Store</h1>
        </header>
        
        <div>
          <div>
            
          </div>
          <div>
            <Store storeItems={this.state.items} addToCart={this.addToCart} />
          </div>
          <div style={{ padding: 5, textAlign:'center' }}>
            <h3>Cart</h3>
            <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />

          </div>


        </div>
      </div>
    );
  }
}

export default MainStore;