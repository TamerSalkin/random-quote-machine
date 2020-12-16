import React, { Component } from "react";
import "./App.css";
import Changer from "./Changer";

class App extends Component {
  state = {
    quote: "blabla",
    author: "billy"
  };

  quoteChanger = (quote) => {
    this.setState({
      quote: quote
    });
  };

  authorChanger = (author) => {
    this.setState({
      author: author
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.quote}</p>
        <p>{this.state.author}</p>
        <Changer
          quoteChanger={this.quoteChanger}
          authorChanger={this.authorChanger}
        />
      </div>
    );
  }
}

export default App;
