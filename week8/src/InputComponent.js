import React, { Component } from "react";

/* PROPS
  displayText: string
  updateParent: function
*/

export default class InputComponent extends Component {
  render() {
    return (
      <div>
        <p> {this.props.displayText} </p>
        <input onChange={e => this.props.updateParent(e.target.value)} />
      </div>
    );
  }
}
