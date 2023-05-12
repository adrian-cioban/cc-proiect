import React, { useState } from "react";
import MessageBox from "@/js/components/MessageBox";

function ChatComponent(props) {
  const [chatMessages, setChatMessages] = useState([]);

  const filterChatHistory = (chatHistory) => {
    let filteredChatHistory = [];
    for (let i = 0; i < chatHistory.length; i++) {
      const currMessage = chatHistory[i];
      const nextMessage = chatHistory[i + 1];

      if (
        i === chatHistory.length - 1 ||
        (currMessage.type !== "error" &&
          nextMessage?.type !== "error" &&
          currMessage.role !== nextMessage?.role)
      ) {
        filteredChatHistory.push(currMessage);
      }
    }

    return filteredChatHistory;
  };

  const buildResponseMessageObject = (response) => {
    let responseMessageObject;

    responseMessageObject = response.data.message;

    return responseMessageObject;
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      if (!e.target.value) {
        return;
      }

      const currentMessage = e.target.value;
      e.target.value = "";
      e.target.disabled = true;

      const currentMessageObject = {
        role: "user",
        content: currentMessage,
      };

      setChatMessages((prevChatMessages) => [
        ...prevChatMessages,
        currentMessageObject,
      ]);
      const currentChatHistory = [...chatMessages, currentMessageObject];
      const filteredChatHistory = filterChatHistory(currentChatHistory);

      try {
        let response = await fetch("/api/answer", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messages: filteredChatHistory,
            type: "personal_assistant",
          }),
          signal: AbortSignal.timeout(20000),
        });
        response = await response.json();

        e.target.disabled = false;
        e.target.focus();
        console.log(response);

        const responseMessageObject = buildResponseMessageObject(response);
        setChatMessages((prevChatMessages) => [
          ...prevChatMessages,
          responseMessageObject,
        ]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen">
      <nav className="bg-blue-700 fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-blue-700 md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 md:hover:text-gray-300"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/insert"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 md:hover:text-gray-300"
                >
                  Insert tasks
                </a>
              </li>
              <li>
                <a
                  href="/chat"
                  className="block py-2 pl-3 pr-4 text-white rounded md:p-0 underline"
                >
                  Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={
          "w-full max-w-[1500px] mx-auto mb-10 bg-gray-100 pt-20 flex flex-col items-center"
        }
      >
        <div className={"border rounded-xl border-gray-300 bg-white w-2/4"}>
          <MessageBox chatMessages={chatMessages} />
        </div>
        <input
          id={"chat-input"}
          type={"text"}
          className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/4 p-4 mt-4"
          placeholder="Type something..."
          onKeyDown={handleKeyDown}
        />
      </div>
    </section>
  );
}

export default ChatComponent;
