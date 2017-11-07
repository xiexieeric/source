import React, { Component } from "react";
import Chat from "./Chat.js";
import firebase from "./configs/firebaseConfig.js";

export default class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatArray: [],
      userName: "",
      currentChat: ""
    };
  }

  componentWillMount() {
    // this method is automatically called after the constructor
    // before the initial render; we make the asynchronous call
    // to Firebase here and then update the state accordingly
    firebase
      .database()
      .ref("/comments")
      .on("value", snapshot => {
        this.setState({
          ...this.state,
          chatArray: snapshot.val()
        });
      });
  }

  // here, a chatObj has the following form:
  // {
  //   name: "Michael",
  //   chat: "Hello World!"
  // }
  addChatToFirebase(chatObj) {
    // note: we're going to push the ENTIRE array back to firebase for
    // simplicity's sake.  this is NOT good practice (what if we replaced
    // the whole array with an empty array?), look into Firebase's "push"
    // method for a better way to do this

    // we only want to do this if the fields are non-empty
    if (chatObj.chat !== "" && chatObj.userName !== "") {
      let curChatArray = this.state.chatArray;
      curChatArray.push(chatObj);
      firebase
        .database()
        .ref("/comments")
        .set(curChatArray);
    }
  }

  // whenever we update the username or current chat in the inputs,
  // this will update it in the state
  updateField(field, newValue) {
    this.setState({
      ...this.state,
      [field]: newValue
    });
  }

  render() {
    // once we have the chat's loaded in from firebase, we map over them
    // to create an array of Chat components, which will then be referenced
    // later on in our render method
    let chatComponentArray = this.state.chatArray.map(chat => {
      return <Chat name={chat.name} chat={chat.chat} />;
    });

    // make a chat object out of the current state to reference in our
    // button's onClick method
    let newChat = {
      name: this.state.userName,
      chat: this.state.currentChat
    };

    return (
      <div>
        <p> User Name: </p>
        <input
          onChange={e => this.updateField("userName", e.target.value)}
          value={this.state.userName}
        />

        <p> Chat: </p>
        <input
          onChange={e => this.updateField("currentChat", e.target.value)}
        />

        <button onClick={() => this.addChatToFirebase(newChat)}>
          {" "}
          Submit{" "}
        </button>

        {chatComponentArray}
      </div>
    );
  }
}
