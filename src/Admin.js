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
      id: Math.random(),
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
      body: JSON.stringify({
        id: item.id,
        name: item.name,
        price: item.price,
        photo: item.image,
      })
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
      <div style={{ textAlign: 'center' }} >

        <div style={{ display: 'flex', justifyContent:'space-between', marginTop: 50, marginLeft: 50 }}>
          <form style={{ width: 300, pading: 10, }} onSubmit={this.addItemToServer} >
            <div>Item name:</div>
            <input style={{ width: 300 }} onChange={this.itemName} placeholder='Enter item name'></input>
            <div>Price:</div>
            <input style={{ width: 300 }} onChange={this.itemPrice} placeholder='Enter item price'></input>
            <div>Image:</div>
            <input style={{ width: 300 }} onChange={this.imageUrl} placeholder='Enter image url'></input> <br />
            <button onClick={this.addItemToServer}>Add to item list</button>
          </form>
          <div style={{marginRight: 50}}>
            test
          </div>
        </div>

      </div>

    )
  }
}