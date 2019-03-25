import React, { Component } from 'react'

export default class Admin extends Component {

  state = {
    itemInput: '',
    itemPriceInput: '',
    itemImageUrl: '',
  }

  addItemToServer = (e) => {
    e.preventDefault();
    let item = {
      name: this.state.itemInput,
      price: this.state.itemPriceInput,
      image: this.state.itemImageUrl,
    }
    console.log('this is body to be sent to server: ', item)
    return fetch('http://localhost:5000/items', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          items: response
        })
      })
  }

  itemName = (e) => {
    this.setState({
      itemInput: e.target.value
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

  render() {
    return (
      <div style={{textAlign:'center', }} >
        <form onSubmit={this.addItemToServer} >
          <input onChange={this.itemName} placeholder='Enter item name'></input>
          <input onChange={this.itemPrice} placeholder='Enter item price'></input>
          <input onChange={this.imageUrl} placeholder='Enter image url'></input> <br />
          <button>Add to item list</button>
        </form>
      </div>

    )
  }
}