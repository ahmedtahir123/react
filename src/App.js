import React from "react";
import "./App.css";
import ListItem from './Mylist'
import 'antd/dist/antd.css';
import {  Button } from 'antd';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    };


    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);


  }



  handleInput(event) {
    this.setState({
      currentItem: {
        text: event.target.value,
        key: Date.now()
      }
    })

  }

  addItem(event) {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: {
          text: '',
          key: ''
        }
      })
    }
  };



  deleteItem(key) {
    const filteredItems = this.state.items.filter(item =>
      item.key !== key);
    console.log(filteredItems)

    this.setState({
      items: filteredItems
    })

  };


  updateItem(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key === key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })


  }


  render() {
    return (


      <div className="App">
        <form autocomplete="off" id="myform" onSubmit={this.addItem}>

          <input id="hello" type="text" placeholder="Enter " value={this.state.currentItem.text} onChange={this.handleInput} />

          <Button type="primary"  icon="plus" htmlType="submit" />
          <ListItem items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}></ListItem>




        </form>

    


      </div>

    )
  }
}

export default App;
