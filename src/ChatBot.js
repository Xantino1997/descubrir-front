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
  const [visitantes, setVisitantes] = useState(0);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const uniqueVisitors = localStorage.getItem("uniqueVisitors");
    if (!uniqueVisitors) {
      localStorage.setItem("uniqueVisitors", 1);
      setVisitantes(1);
    } else {
      setVisitantes(uniqueVisitors);
    }
  }, []);

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
        let botResponse = "";

        if (messages.length === 0) {
          botResponse = (
            <div className="div-respuesta-bot">
              Hola, ¿cómo estás? Soy Gabot. ¡Encantado de ayudarte! Aquí tienes
              algunos enlaces útiles:
              <ul>
                <li>
                  <a href="https://www.google.com">Google</a>
                </li>
                <li>
                  <a href="/proyecto-2">Proyecto 2</a>
                </li>
                <li>
                  <a href="/proyecto-3">Proyecto 3</a>
                </li>
              </ul>
            </div>
          );
        } else {
          if (inputText.toLowerCase().includes("trabajos")) {
            botResponse = (
              <div className="div-respuesta-bot">
                ¡Encantado de ayudarte! Aquí tienes algunos enlaces a nuestros
                trabajos:
                <ul>
                  <li>
                    <a href="https://www.google.com">Google</a>
                  </li>
                  <li>
                    <a href="/proyecto-2">Proyecto 2</a>
                  </li>
                  <li>
                    <a href="/proyecto-3">Proyecto 3</a>
                  </li>
                </ul>
              </div>
            );
          } else if (inputText.toLowerCase().includes("redes")) {
            botResponse = (
              <div className="div-respuesta-bot">
                Siguenos en redes:
                <ul className="div-respuesta-bot-link">
                  <li>
                    <a href="https://m.facebook.com/profile.php?eav=AfZzX5RDgft6AitdBeN-Qngh7HA8RKTVRXrzVtZ0yRHNo6ufdL7DPwG_fCv6bVqkVI0&paipv=0">
                      Descubrir Digital en Facebook
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/tuempresa">
                      Descubrir Digital en Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCZiluF9OcAgofPiSLHi0I_w">
                      Canal de YouTube Descubrir Digital
                    </a>
                  </li>
                </ul>
              </div>
            );
          } else if (inputText.toLowerCase() === "gali visitantes") {
            botResponse = `Gali: Hasta ahora, ${visitantes} visitantes únicos han explorado el sitio.`;
          } else if (inputText.toLowerCase() === "clear the bot") {
            setMessages([]);
            return;
          } else {
            botResponse =
              "No entiendo tu mensaje. Responde: trabajos, redes, gracias";
          }
        }

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
            {isLoading ? "Contestando..." : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
