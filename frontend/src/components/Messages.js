import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Messages({ userId }) {
  const { chat } = useSelector((state) => state);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);

  return (
    <div>
      <h1>Messages</h1>
      <div>
        {chat.answers.map((message) => (
          <Message key={message.id} messageItem={message} userId={userId} />
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

const Message = ({ messageItem, userId }) => {
  return (
    <>
      <div className="text-sky-900">{messageItem.userName}</div>
      <div>
        <div className="font-bold">{messageItem.messages}</div>
        {/* <div>{messageItem.time}</div> */}
      </div>
    </>
  );
};

export default Messages;
