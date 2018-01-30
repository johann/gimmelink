import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import LinkContainer from "./containers/LinkContainer";
import Nav from "./components/Nav";
class App extends Component {
  addLink = link => {
    console.log(link);
  };

  render() {
    return (
      <div className="App">
        <div className="ui container">
          <Route exact path="/" component={Welcome} />
          <LinkContainer />
        </div>
      </div>
    );
  }
}

export default App;
