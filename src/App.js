import React, { Component } from 'react';
import './App.css';
import { Cart } from './Components/Cart.js'
import { StoreList } from './Components/StoreList.js'


const animals = ['dog', 'cat', 'hamster', 'bird', 'Frog', 'Turtle', 'Bunny', 'Monkey']

class App extends Component {

  state = {
    cart: []
  }

  addToCart = (animal) => () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const cart = [...this.state.cart, animal];
    this.setState({
      cart
    })
  }

  removeFromCart = (index) => () => {
    this.state.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.state.cart))
    this.setState({
      cart: this.state.cart
    })
  }

  componentDidMount() {
    const cartJSON = localStorage.getItem('cart');
    const cart = JSON.parse(cartJSON);
    this.setState({
      cart: cart || []
    })
  }

  render() {
    return (
      <div >
       <div >
         <StoreList animals={animals} addToCart={this.addToCart} />
        </div>
        <div >
          <Cart cartItems={this.state.cart} removeFromCart={this.removeFromCart} />
        </div>
        
      </div>
    );
  }
}

export default App;
