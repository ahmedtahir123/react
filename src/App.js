import React from "react";
import "./App.css";
import Input from "./Input";

class App extends React.Component {
    state = {
    value: "",
    mytodolist: [],
    myflag: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.value !== "") {
      var myobject = {
        item: this.state.value,
        key: Date.now()
      };
      this.state.mytodolist.push(myobject);
      const mylist = this.state.mytodolist;
      this.setState({
        mytodolist: mylist
      });
      this.setState({ value: "" });
    }
  };

  mydelete = (e, index) => {
    e.preventDefault();
    const a = [...this.state.mytodolist];
    a.splice(index, 1);
    this.setState({
      mytodolist: a
    });
  };

  myupdate = (e, index) => {
    e.preventDefault();

    document.getElementById('q').type="text"
    document.getElementById('setbtn').style.display="block";

    document.getElementById('p').style.display = 'none';


    this.setState({
      myflag: true
    });
  };

  Myinputfield = () => {
    return (
      <input
        type="text"
        placeholder="Enter "
        value={this.state.value}
        onChange={this.handleChange}
      />
    );
  };

  Mynewupdate = (event, index) => {
    event.preventDefault();

    const updatedlist = [...this.state.mytodolist];
    updatedlist[index].item = this.state.value;

    this.setState({
      mytodolist: updatedlist
    });
  };

  render() {
    return (
      <div className="App">
        <form id="myform">
          <this.Myinputfield></this.Myinputfield>
          <button id="mybtn" onClick={this.handleSubmit}>
            Add
          </button>

          <ul>
            {this.state.mytodolist.map((myitem, index) => (
              <div id="abc" key={myitem.key}>
                <h1 id='p'>{myitem.item}</h1>
                <input id='q' type="hidden"></input>
                <button id="setbtn">Set</button>
                <button onClick={e => this.mydelete(e, index)}>del</button>
                <button onClick={e => this.myupdate(e, index)}>update</button>

                {this.state.myflag === true ? (
                  <form>
                    <input
                      value={this.state.value}
                      onChange={this.handleChange}
                    ></input>
                    <button onClick={event => this.Mynewupdate(event, index)}>
                      abc
                    </button>
                  </form>
                ) : (
                  alert("asd")
                )}
              </div>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default App;
