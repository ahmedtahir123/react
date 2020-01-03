import React from "react";
import logo from "./logo.svg";
import "./App.css";
import listitem from './listitem'
import listitem from './listitem'





class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
   }


  handleChange(event) {
    
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  
  render(){
    return(
      

      <div className="App"> 
          <form id="myform" onSubmit={this.handleSubmit}>
        
          <input type="text" placeholder="Enter " value={this.state.value} onChange={this.handleChange} />
        
         <button type='submit' >Add</button>
         <listitem></listitem>



      </form>
      </div>

    )
  }
}

export default App;
