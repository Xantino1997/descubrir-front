import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./StylesPages/Chatbot.css";
import bot from "./assets/icono-bot.png";

function Chatbot() {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = async () => {
    if (inputText.trim() !== "") {
      const newUserMessage = { text: inputText, isUser: true };
      setMessages([...messages, newUserMessage]);
      setInputText("");
      setIsLoading(true);

      try {
        const response = await axios.post(
          "https://descubrir-back.vercel.app/generate-completion",
          { prompt: inputText }
        );
        const botResponse = response.data.completion;

        const newBotMessage = { text: botResponse, isUser: false };
        setMessages([...messages, newBotMessage]);
      } catch (error) {
        console.error("Error al obtener la respuesta del bot:", error);
      }

      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  const renderWavingText = (text) => {
    return [...text].map((letter, index) => (
      <span key={index} className="letter-wave">
        {letter}
      </span>
    ));
  };



  return (
    <div className={`chatbot ${showChat ? "active" : ""}`}>
      <div className="chatbot-toggle" onClick={toggleChat}>
        <img src={bot} alt="Chatbot" />
      </div>
      <div className="chatbot-container">
        <div className="chatbot-header">
          <span>Chatea con Asistente</span>
        </div>
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${
                message.isUser ? "user-message" : "bot-message"
              }`}
            >
              {message.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Escribe tu mensaje..."
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSendMessage}
            disabled={isLoading}
            className={isLoading ? "jump-animation" : ""}
            style={{
              backgroundColor: isLoading ? "#658ddd" : "#007bff",
              color: isLoading ? "#eddeee" : "white",
              fontWeight: "bold",
            }}
          >
            {isLoading ? "Contestando..." : ("Enviar")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
