import React, { Component } from "react";

/* PROPS
  updateParent: function to call when the input changes
  inputValue: string, the input that's currently in the state of ViewInput
*/

export default class InputComponent extends Component {
  render() {
    return (
      <input
        value={this.props.inputValue}
        onChange={e => this.props.updateParent(e.target.value)}
      />
    );
  }
}
