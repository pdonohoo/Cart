import React, { Component } from 'react';
import './App.css';
import { getItems, getCart } from './data/Items';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin'
import MainStore from './MainStore'

class App extends Component {

  state = {
    items: [],
    cart: [],
  }


  addToCart = (item, price, photo, id) => () => {
    console.log("adding one to the cart: ", id)
    // const cart = [...this.state.cart, {item, price}]
    return fetch('http://localhost:5000/cart', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id,
        item: item,
        price: price,
        photo: 'https://www.l-nutra.com/wp-content/uploads/2018/07/placeholder.png'
      })
    })
      .then(response => response.json())
      .then(response => {
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
      .then(cart => this.setState({
        cart
      }))

  }

  



  render() {

    return (
      <div style={{
        backgroundColor: 'gray',
        height: '1000px',
        alignContent: 'center'
      }}>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>

          <Route exact path="/" exact component={MainStore} />
          <Route path="/Admin" exact component={Admin} />
        </Router>

        
        
        

       
      </div>
    );
  }
}

export default App;
