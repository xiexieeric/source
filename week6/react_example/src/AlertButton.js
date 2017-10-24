import React, { Component } from "react";

/* PROPS
  message: string, displayed in alert when clicked
*/

/* STATE
  clickCount: int, keeps track of how many times we've clicked the button
*/

export default class AlertButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
  }

  clickAlert() {
    alert(
      "MESSAGE: " +
        this.props.message +
        " (Count: " +
        this.state.clickCount +
        ")."
    );

    let newCount = this.state.clickCount + 1;
    this.setState({
      clickCount: newCount
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.clickAlert()}>
          {" "}
          Click me! ({this.state.clickCount}){" "}
        </button>
      </div>
    );
  }
}
