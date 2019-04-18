import React, { Component } from 'react'
import {getItems} from './data/Items'

export default class Admin extends Component {

  state = {
    items: [],
    itemName: '',
    itemPriceInput: '',
    itemImageUrl: '',
    
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

  componentDidMount() {
    getItems()
      .then(items => {
        this.setState({
          items
        })
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 50, marginLeft: 50 }}>
          <form style={{ width: 300, pading: 10, }} onSubmit={this.addItemToServer} >
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