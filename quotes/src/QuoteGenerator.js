import React, { Component } from "react";

export default class QuoteGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  updateIndex() {
    let quotesLength = this.props.quotes.length;
    let newIndex = this.state.currentIndex + 1;
    if (newIndex === quotesLength) {
      newIndex = 0;
    }
    this.setState({
      currentIndex: newIndex
    });
  }

  render() {
    let currentQuote = this.props.quotes[this.state.currentIndex];
    return <p onClick={() => this.updateIndex()}> {currentQuote} </p>;
  }
}
