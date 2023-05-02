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
    <div className="pb-44 pt-20 containerWrap">
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
      {/* <div className="text-sky-900">{messageItem.userName}</div>
      <div>
        <div className="font-bold">{messageItem.messages}</div>
        <div>{messageItem.time}</div>
      </div> */}

      <div>
        <div
          className={`chat ${
            messageItem.id === userId ? "chat-end" : "chat-start"
          }`}
        >
          {/* <div className="chat-image avatar">
            <div className="w-10 rounded-full"></div>
          </div> */}
          <div className="chat-header">{messageItem.userName}</div>
          <div className="chat-bubble">{messageItem.messages}</div>
        </div>
      </div>
    </>
  );
};

export default Messages;
