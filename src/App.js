import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      username: "Rohit",
      text: "hei guys",
    },
    {
      username: "Mohit",
      text: " hello dear",
    },
  ]);

  const [username, setUsername] = useState("");
  //usestate = variable in REACT

  //UseEffect =run code on a condition in REACT

  useEffect(() => {
    //run code here..
    //if its blank inside[], this code runs once when the app component loads.
    setUsername(prompt("Please enter your name: "));
  }, []);

  const sendMessage = (event) => {
    //all the logic to send a message goes here..
    event.preventDefault();
    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };

  return (
    <div className='App'>
      <h1> Messanger App: ) </h1>
      <h2>Welcome {username}</h2>
      <form>
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
            onClick={sendMessage}
          >
            Send Message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message username={username} text={message} />
      ))}
    </div>
  );
}

export default App;
