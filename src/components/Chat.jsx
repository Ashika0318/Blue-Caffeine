import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import "./Chat.css";

export default function Chat({ username }) {
  // Refs for scrolling and file input
  const chatEndRef = useRef(null);
  const fileInputRef = useRef(null);

  // Get product info from the previous page (Home)
  const location = useLocation();
  const productName = location.state?.product || "BS9000";

  // Messages list
  const [messages, setMessages] = useState([
    {
      user: username,
      text: `Hi, Can you show me the specification of ${productName}?`,
      time: new Date().toLocaleTimeString([], { hour12: true }),
    },
    {
      user: "bot",
      text: "Thinking...",
    },
  ]);

  // For input message and file attach
  const [messageText, setMessageText] = useState("");
  const [attachedFile, setAttachedFile] = useState(null);

  // Scroll to latest message
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();

    // Don’t send empty message
    if (!messageText.trim() && !attachedFile) return;

    const newMessage = {
      user: username,
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour12: true }),
      file: attachedFile ? attachedFile.name : null,
    };

    // Add user message
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Reset input and file
    setMessageText("");
    setAttachedFile(null);

    // Simulate bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: "bot", text: "Thinking..." },
      ]);
    }, 1000);
  };

  // Open file picker
  const handleFileAttach = () => {
    fileInputRef.current.click();
  };

  // When file is selected
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAttachedFile(file);
    }
  };

  return (
    <div className="chat-page">
      {/* Navbar section */}
      <Navbar username={username} />

      <div className="chat-area">
        {/* Messages display area */}
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.user === username ? "user" : "bot"}`}
            >
              <div className="bubble-container">
                <div
                  className={`bubble ${
                    msg.user === username ? "right-bubble" : "left-bubble"
                  }`}
                >
                  {msg.text}

                  {/* If file is attached */}
                  {msg.file && (
                    <div className="attached-file">
                      <i className="fa-solid fa-paperclip"></i> {msg.file}
                    </div>
                  )}
                </div>

                {/* Time only for user messages */}
                {msg.user === username && (
                  <>
                    <hr />
                    <span className="time">{msg.time}</span>
                  </>
                )}
              </div>
            </div>
          ))}

          {/* Scroll anchor */}
          <div ref={chatEndRef}></div>
        </div>

        {/* Message input area */}
        <form className="chat-input-wrapper" onSubmit={handleSendMessage}>
          {/* File attachment icon */}
          <button
            type="button"
            className="file-icon"
            onClick={handleFileAttach}
          >
            <i className="fa-solid fa-paperclip"></i>
          </button>

          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />

          {/* Message text input */}
          <div className="chat-input-box">
            <input
              type="text"
              placeholder={`Ask anything about ${productName}...`}
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
            />

            {/* Inside mic/stop icons */}
            <div className="inside-icons">
              <button type="button">
                <i className="fa-solid fa-microphone"></i>
              </button>
              <button type="button">
                <i className="fa-solid fa-stop"></i>
              </button>
            </div>
          </div>

          {/* Send button */}
          <button type="submit" className="send-icon">
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  );
}
