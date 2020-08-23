import React, { forwardRef } from "react";
import "./Message.css";
import { Card, CardContent, Typography } from "@material-ui/core";

//imported and added react-flip-move and wrapped its command with our Message.js component.
const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__usercard" : "message__guestCard"}>
        {/* //use of BEM (for e.g: double underscope in message__usercard)*/}
        <CardContent>
          <Typography color='white' variant='h5' component='h2'>
            {message.username} : {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
