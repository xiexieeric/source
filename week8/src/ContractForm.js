import React, { Component } from "react";
import InputComponent from "./InputComponent.js";

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      details: ""
    };
  }

  updateState(field, newValue) {
    this.setState({
      ...this.state,
      [field]: newValue
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <InputComponent
          displayText="Name: "
          updateParent={newValue => this.updateState("name", newValue)}
        />

        <InputComponent
          displayText="Phone Number: "
          updateParent={newValue => this.updateState("phoneNumber", newValue)}
        />

        <InputComponent
          displayText="Contract Details: "
          updateParent={newValue => this.updateState("details", newValue)}
        />
      </div>
    );
  }
}
