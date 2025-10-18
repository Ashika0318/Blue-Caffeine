import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "BS9000",
      description: "High-performance audio system with advanced features",
    },
    {
      title: "MS321",
      description: "Modular sound solution for modern spaces",
    },
    {
      title: "PX500",
      description: "Professional grade speakers with precision sound",
    },
    {
      title: "PX501",
      description: "Next-generation audio with adaptive tuning technology",
    },
  ];

  // Navigate to Chat page with product info
  const handleChatClick = (card) => {
    navigate("/chat", { state: { product: card.title } });
  };

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-header">
          <h2>Vision RAG</h2>
          <button className="add-chat-btn">
            <span className="plus-icon">+</span> New Chat
          </button>
        </div>

        <hr />

        <div className="welcome-text">
          <h3>Welcome Back!</h3>
          <p>Select a product to began chatting with your AI assistant</p>
        </div>

        <div className="cards-container">
          {cards.map((card, index) => (
            <div className="home-card" key={index}>
              <div className="card-icon">
                <i className="fa-regular fa-message"></i>
              </div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <button
                className="chat-btn"
                onClick={() => handleChatClick(card)}
              >
                Chat with Assistant
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
