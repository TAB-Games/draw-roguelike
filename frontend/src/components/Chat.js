import React from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useState } from "react";
import { addMessage } from "../store/slices/chat";
import { v4 as uuid } from "uuid";
import Button from "./Button";
import Messages from "./Messages";

function Chat() {
  //   const [user, setUser] = useState({});
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.gameState.username);
  const [message, setMessage] = useState("");

  const postMessage = () => {
    if (message.trim() !== "") {
      const date = new Date();
      const newMessage = {
        id: uuid(),
        messages: message.trim(),
        userId: user.id,
        userName: user,
        time: `${date.getHours()}:${date.getMinutes()}`,
      };
      dispatch(addMessage(newMessage));
    }
    setMessage("");
  };
  return (
    <div>
      <h1>Chat</h1>
      <div>Hello {user}</div>
      <div>
        <Messages userId={user.id} />
      </div>
      <div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Answer"
          className="py-2 px-4 outline-none rounded shadow w-64 mb-6"
        />
        <Button onClick={postMessage}>Submit</Button>
      </div>
    </div>
  );
}

export default Chat;
