import React, { Component } from "react";
import InputComponent from "./InputComponent.js";
import ButtonCounter from "./ButtonCounter.js";

export default class ViewInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: "",
      clickCount: 0
    };
  }

  updateField(field, newValue) {
    this.setState({
      ...this.state,
      [field]: newValue
    });
  }

  render() {
    return (
      <div>
        <p> Input: {this.state.currentInput} </p>
        <p> Count: {this.state.clickCount} </p>
        <InputComponent
          updateParent={newValue => this.updateField("currentInput", newValue)}
          inputValue={this.state.inputValue}
        />
        <ButtonCounter
          currentCount={this.state.clickCount}
          updateParent={newValue => this.updateField("clickCount", newValue)}
        />
      </div>
    );
  }
}
