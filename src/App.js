import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";

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
    //MOST IMPORTANT CODE IN ORDER TO STORE(listen) THE VALUES(MESSAGES) TO FIREBASE DATABASE...
    db.collection("messages").onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
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
      <h1>Messenger app</h1>
      <h2>Welcome {username}</h2>
      <form onSubmit={sendMessage}>
        <FormControl>
          <InputLabel> Enter a message... </InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button
            disabled={!input}
            variant='contained'
            color='primary'
            /* onClick={sendMessage} */
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}
    </div>
  );
}

export default App;
