import React, { Component } from 'react'
import {getItems} from './data/Items'
import {Redirect} from 'react-router-dom'

export default class Admin extends Component {

  state = {
    items: [],
    itemId: '',
    itemName: '',
    itemPriceInput: '',
    itemImageUrl: '',
    loading: true,
    user: '',
    
  }

  addItemToServer = (e) => {
    e.preventDefault();
    let item = {
      id: Math.random().toString(),
      name: this.state.itemName,
      price: this.state.itemPriceInput,
      image: this.state.itemImageUrl,
    }
    console.log('this is body to be sent to server: ', item)
    return fetch('http://localhost:5000/items', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
      })
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          items: [...this.state.items, response],
          itemName: '',
          itemPriceInput: '',
          itemImageUrl: '',
        })
      })
  }

  itemName = (e) => {
    this.setState({
      itemName: e.target.value
    })
  }
  itemPrice = (e) => {
    this.setState({
      itemPriceInput: e.target.value
    })
  }
  imageUrl = (e) => {
    this.setState({
      itemImageUrl: e.target.value
    })
  }

  editItem = (id) => () => {
    return fetch(`http://localhost:5000/items/${id}`, {
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        this.setState({
          itemId: response.id,
          itemName: response.name,
          itemPriceInput: response.price,
          itemImageUrl: response.image,
        }) 
      })
  }

  deleteItem = (id) => () => {
    return fetch(`http://localhost:5000/items/${id}`, {
      method: 'Delete',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(() => getItems()
    .then(response => {
      this.setState({
        items: response
      })
    }))
  }

  signOut= () => {
    localStorage.removeItem('user')
    this.setState({
      user: ''
    })
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({
      user: user,
      loading: false,
    })

    getItems()
      .then(items => {
        this.setState({
          items
        })
      })
  }

  render() {
    return (
      !this.state.user && !this.state.loading
      ?
      <Redirect to='/login'/>
      :

      <div style={{ textAlign: 'center' }}>

      <button onClick={this.signOut}>Sign Out</button>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 50, marginLeft: 50 }}>
          <form style={{ width: 300, pading: 10, }} onSubmit={this.addItemToServer} >
            <div>
              Item id: {this.state.itemId}
            </div>
            <div>Item name:</div>
            <input value={this.state.itemName} style={{ width: 300 }} onChange={this.itemName} placeholder='Enter item name'></input>
            <div>Price:</div>
            <input value={this.state.itemPriceInput} style={{ width: 300 }} onChange={this.itemPrice} placeholder='Enter item price'></input>
            <div>Image:</div>
            <input  value={this.state.itemImageUrl} style={{ width: 300 }} onChange={this.imageUrl}  placeholder='Enter image url'></input> <br />
            <button>Add to item list / Update item</button>
          </form>
          <div>
            <ul> 
              {this.state.items.map(({name, price, image, id}) => (
                <li style={{padding: 10, marginRight: 50,}}>
                  Name: {name} <br /> Price: {price} 
                  <button onClick={this.editItem(id)} >Edit</button>
                  <button onClick={this.deleteItem(id)}>Remove Item</button>
                </li>
              )
              )}
            </ul>
          </div>

        </div>

      </div>

    )
  }
}