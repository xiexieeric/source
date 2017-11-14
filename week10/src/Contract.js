import React, { Component } from "react";

/* PROPS:
    name: string; the name of whoever needs the contract work
    phoneNumber: string; phone number to react the point of contact
    details: string; the formal details of what needs to be done
*/

export default class Contract extends Component {
  render() {
    return (
      <div>
        <p> Name: {this.props.name} </p>
        <p> Phone Number: {this.props.phoneNumber} </p>
        <p> Contract Details: {this.props.details} </p>
      </div>
    );
  }
}
