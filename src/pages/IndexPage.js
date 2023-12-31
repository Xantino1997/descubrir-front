import React, { useState, useEffect } from "react";
import "../StylesPages/IndexPage.css";
import DigitalVideo from "../assets/videopc.mp4";
import Swal from "sweetalert2"; // Importa SweetAlert
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const IndexPage = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [showModal, setShowModal] = useState(true); // Estado para mostrar/ocultar el modal
  const [email, setEmail] = useState(""); // Estado para el correo del formulario

  // Función para manejar el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "¡Gracias por suscribirte!",
      text: "Ahora recibirás las últimas noticias e información digital.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    setShowModal(false);
  };

  // Función para manejar el clic en "No por el momento"
  const handleNoButtonClick = () => {
    // Cierra el modal
    setShowModal(false);
  };

  return (
    <>
      <Carousel />
      <br/>
      <div className="home-container">
        {/* {showModal && (
        // Modal para suscribirse al newsletter
        <div className="modal-overlay">
          <div className="modal">
            <h2>¿Quieres suscribirte al newsletter?</h2>
            <p>Recibe las últimas noticias e información digital en tu correo.</p>
            <div className="columna">
              <h3>Suscríbete al Newsletter</h3>
              <form className="form-modal" onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu correo electrónico"
                  required
                />
                <button type="submit">Suscribirse</button>
              </form>
            </div>
            <button onClick={handleNoButtonClick}>No por el momento</button>
          </div>
        </div>
      )} */}
        <div className="video-contenedor"></div>

        {/* <div className="brand">
      </div> */}

        <video autoPlay loop muted className="video-bg">
          <source src={DigitalVideo} type="video/mp4" />
          <source src={DigitalVideo} type="video/webm" />
          <source src={DigitalVideo} type="video/ogg" />
          {/* Agrega otros formatos de video para compatibilidad con diferentes navegadores */}
        </video>

        <div className="diseños-container">
          <div className="diseños-container-item">
            <div className="diseños-rutas1">
              <Link to="/desarrollo" className="diseños-h1">
                Desarrollo
              </Link>
              <br />
            </div>
            <div className="diseños-rutas2">
              <Link to="/interfaz" className="diseños-h1">
                Diseño
              </Link>
              <br />
            </div>

            <div className="diseños-rutas3">
              <Link to="/clientes" className="diseños-h1">
                Clientes
              </Link>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
