import React, { Component } from "react";

/* PROPS:
  name: string, name of person who sent the chat
  chat: string, the full chat
*/

export default class Chat extends Component {
  render() {
    return (
      <div>
        <p> {this.props.name} said: </p>
        <p> {this.props.chat} </p>
      </div>
    );
  }
}
