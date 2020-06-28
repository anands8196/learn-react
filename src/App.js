import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "111", age: "22" },
      { name: "222", age: "33" },
      { name: "333", age: "34" }
    ]
  };
  switchNameHandler = () => {
    console.log("clicked");
    this.setState({
      persons: [
        { name: "54545544545", age: "22" },
        { name: "222", age: "33" },
        { name: "333", age: "34" }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi,Welcome to ReactJS</h1>
        <button onClick={this.switchNameHandler}>switch name</button>
        {this.state.persons.map((e, i) => {
          return (
            <Person
              name={this.state.persons[i].name}
              age={this.state.persons[i].age}
            />
          );
        })}
        {/* <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
      </div>
    );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi,I am Anand S")
    // );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
