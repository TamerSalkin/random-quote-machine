import React, { Component } from "react";
const axios = require("axios");

class Changer extends Component {
  state = {
    quote: "",
    author: "",
  };

  componentDidMount() {
    axios
      .get(
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
      )
      .then((res) => console.log(res));
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.quoteChanger(this.state.quote);
    this.props.authorChanger(this.state.author);
  };

  render() {
    return (
      <div>
        <button onClick={this.onSubmit}>New Quote</button>
      </div>
    );
  }
}

export default Changer;
