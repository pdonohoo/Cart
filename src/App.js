import React, { Component } from 'react';
import './App.css';
import { Store } from './Components/StoreList';
import { Cart } from './Components/Cart';
import { getItems, getCart } from './data/Items';


class App extends Component {

  state = {
    items: [],
    cart: [],
    quantity: '',
  }


  addToCart = (item, price) => () => {
    console.log("adding one to the cart: ", item, price)
    const cart = [...this.state.cart, [item, price]]
    return fetch('http://localhost:5000/cart', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        item: item,
        price: price,
        photo: 'https://www.l-nutra.com/wp-content/uploads/2018/07/placeholder.png' 
      })
    }),
      this.setState({
        cart
      })
  }

  removeFromCart = (index) => () => {
    this.state.cart.splice(index, 1)
    this.setState({
      cart: this.state.cart
    })
  }

  componentDidMount(){
    getItems()
      .then(items => this.setState({
        items
      }))

      getCart()
      .then(cart => this.setState({
        key: cart.id
        
      }))
  }

  render() {

    return (
      <div style={{
        backgroundColor: 'gray',
        height: '1000px',

      }}>
        <header style={{
          textAlign: 'center',
        }}>
          <h1>The Dreamer Store</h1>
        </header>
        <div style={{ display: 'flex' }}>
          <div>
            <Store storeItems={this.state.items} addToCart={this.addToCart} />
          </div>
          <div style={{  padding: 5, }}>
            <h3>Cart</h3>
            <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
