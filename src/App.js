import React, {Component} from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      newItem:"",
      list: []
    }
  }



updateInput(key, value){
  // Update the react state
  this.setState({
    [key]:value  })
}

addItem(){
  // Create item with an unique id.

  const newItem = {
    id: 1+ Math.random(),
    value: this.state.newItem.slice()
  };

  // Copy the current list of items
  const list = [...this.state.list];


  // Add new item to the list

  list.push(newItem);

  // Update the state with new list and reset newItem input


  this.setState({
    list,
    newItem:""

  });
}

deleteItem(id){

  const list = [...this.state.list];

  const updatedList = list.filter(item => item.id !== id);

  this.setState({list: updatedList});
}


render() {
  return (
    <div className="App">
      <div>
      <form  noValidate autoComplete="off">

        Safak's React Todo Application <br/><br/>
        <TextField className="smt" id="outlined-basic" label="Add a todo" variant="outlined" placeholder="Type a todo here..."
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}/>
        </form>
        <br/>
        {/* <input type="text"
        placeholder="Type a todo here..."
        value={this.state.newItem}
        onChange={e => this.updateInput("newItem", e.target.value)}/> */}

        <Button variant="contained" color="primary"
        onClick={() => this.addItem()}>Add</Button>
        <br/>
        <ul>
          {this.state.list.map(item => {
            return(
              <li key={item.id}>
              {item.value} <Button variant="contained" color="primary" onClick={() => this.deleteItem(item.id)}>X</Button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
  }
}


export default App;
