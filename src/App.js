import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Navbar";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Footer />
      </div>
    );
  }
}

export default App;
