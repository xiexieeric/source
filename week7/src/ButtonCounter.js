import React, { Component } from "react";

/* PROPS
  updateParent: function
  currentCount: int
*/

export default class ButtonCounter extends Component {
  updateCount() {
    let newCount = this.props.currentCount + 1;
    this.props.updateParent(newCount);
  }

  render() {
    return (
      <button onClick={() => this.updateCount()}>
        {" "}
        Click Me! {this.props.currentCount}{" "}
      </button>
    );
  }
}
