import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Import components from components folder
import Login from "./components/Login.jsx";
import Home from "./components/Home.jsx";
import Chat from "./components/Chat.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}


export default App;