import React, { useEffect, useRef } from "react";

function MessageBox(props) {
  const messageEndRef = useRef(null);
  const { chatMessages } = props;

  const scrollToBottom = () => {
    messageEndRef.current.scrollIntoView({ behaviour: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  return (
    <div className={"h-[400px] overflow-auto px-[20px] bg-white rounded-xl"}>
      <ul className={"divide-y divide-gray-200"}>
        <li className={"py-3"}>
          <span className={`block text-blue-700 font-bold`}>Assistant:</span>
          <span className={"block text-black"}>
            Hi, I am your assistant. How can I help you?
          </span>
        </li>
        {chatMessages.map((message, index) => {
          return (
            <li className={"py-3"} key={index}>
              <span
                className={`block ${
                  message.role === "assistant"
                    ? "text-blue-700"
                    : "text-gray-500"
                } font-bold`}
              >
                {message.role === "assistant" ? "Assistant:" : "You"}
              </span>
              <span className={"block text-black"}>{message.content}</span>
            </li>
          );
        })}
      </ul>
      <div ref={messageEndRef} />
    </div>
  );
}

export default MessageBox;
