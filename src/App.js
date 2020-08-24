import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import logo from "./messanger-logo.png";
import "./Message.css";

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      username: "Rohit",
      message: "hei guys",
    },
    {
      username: "Mohit",
      message: " hello dear",
    },
  ]);

  const [username, setUsername] = useState("");
  //usestate = variable in REACT

  //UseEffect =run code on a condition in REACT

  useEffect(() => {
    //run once when the app component loads
    //MOST IMPORTANT CODE IN ORDER TO STORE(listen) THE VALUES(MESSAGES) INTO FIREBASE DATABASE...
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  useEffect(() => {
    //run code here..
    //if its blank inside[], this code runs once when the app component loads.
    setUsername(prompt("Please enter your name: "));
  }, []);

  const sendMessage = (event) => {
    //all the logic to send a message goes here..
    event.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className='App'>
      <div className='top__header'>
        <img className='logo' src={logo} />
        <h1>Messenger </h1>
        <h2>Welcome {username}</h2>
      </div>
      <form onSubmit={sendMessage} className='app__form'>
        <FormControl className='app__formControl'>
          <Input
            className='app__Input'
            placeholder='Enter a message...'
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            className='app__iconButton'
            disabled={!input}
            variant='contained'
            color='primary'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/* ****************code for mapping each messages and render the Message.js component with props************** */}
      {/* ********************uses FlipMove feature to make beautiful movement while sending messages*********** */}
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
