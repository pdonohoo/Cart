import React, { Component } from 'react';
import './App.css';
import { Cart } from './Components/Cart.js'
import { StoreList } from './Components/StoreList.js'


const animals = [
  {
    animal: 'Dog',
    price: '$100',
  },
  {
    animal: 'Cat',
    price: '$-500'
  },
  {
    animal: 'Hamster',
    price: '$35'
  },
  {
    animal: 'Bird',
    price: '$20'
  },
  {
    animal: 'Frog',
    price: '$20'
  },
  {
    animal: 'Turtle',
    price: '$50'
  },
  {
    animal: 'Bunny',
    price: '$35'
  },
  {
    animal: 'Monkey',
    price: '$1000'
  }
]



class App extends Component {

  state = {
    cart: [],
    quantity: '0',
  }

  addToCart = (animal) => () => {
    localStorage.setItem('cart', JSON.stringify(cart));
    const cart = [...this.state.cart, animal];
    this.setState({
      cart: cart,
      // quantity: (this.state.quantity += '1')
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
          <Cart quantity={this.state.quantity} cartItems={this.state.cart} removeFromCart={this.removeFromCart} />
        </div>
        
      </div>
    );
  }
}

export default App;
