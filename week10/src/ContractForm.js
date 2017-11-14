import React, { Component } from "react";
import InputComponent from "./InputComponent.js";
import Contract from "./Contract.js";
import firebase from "./firebaseConfig.js";

export default class ContractForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      details: "",
      firebaseContracts: [] // initially make this an empty array
    };
  }

  componentWillMount() {
    firebase
      .database()
      .ref("/contracts")
      .on("value", snapshot => {
        // do a quick check to make sure it exists (i.e. isn't null)
        if (snapshot.val()) {
          this.setState({
            ...this.state,
            firebaseContracts: snapshot.val()
          });
        }
      });
  }

  updateState(field, newValue) {
    this.setState({
      ...this.state,
      [field]: newValue
    });
  }

  pushContractToFirebase() {
    // make sure none of the inputs are empty
    if (
      this.state.name !== "" &&
      this.state.phoneNumber !== "" &&
      this.state.details !== ""
    ) {
      // make the new contract out of the inputs in the state
      let newContract = {
        name: this.state.name,
        phoneNumber: this.state.phoneNumber,
        details: this.state.details
      };
      let updatedContracts = this.state.firebaseContracts;
      updatedContracts.push(newContract);
      firebase
        .database()
        .ref("/contracts")
        .set(updatedContracts);
    }
  }

  render() {
    // map through the array of contracts and create an array of Contract components from them
    let contractComponents = this.state.firebaseContracts.map(contract => {
      return (
        <Contract
          name={contract.name}
          phoneNumber={contract.phoneNumber}
          details={contract.details}
        />
      );
    });

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

        <button onClick={() => this.pushContractToFirebase()}> Submit! </button>

        {contractComponents}
      </div>
    );
  }
}
