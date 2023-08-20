import React, { useState, useEffect } from "react";
import "../StylesPages/IndexPage.css";
import DigitalVideo from "../assets/videopc.mp4";
import Descubrir from "../assets/pc de fondo 1.avif";
import Descubrir2 from "../assets/contacto.avif";
import Descubrir3 from "../assets/Descubrir.png";
import Swal from "sweetalert2"; // Importa SweetAlert


const IndexPage = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [showModal, setShowModal] = useState(true); // Estado para mostrar/ocultar el modal
  const [email, setEmail] = useState(""); // Estado para el correo del formulario
const titleHome = [/* "Tecnologia...", "Innovación...", "Creatividad..."*/];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % titleHome.length);
    }, 5000); // Cambiar cada 5 segundos

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Función para manejar el envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar el correo y suscribir al usuario al newsletter

    // Muestra un SweetAlert de éxito
    Swal.fire({
      title: "¡Gracias por suscribirte!",
      text: "Ahora recibirás las últimas noticias e información digital.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });

    // Cierra el modal
    setShowModal(false);
  };

  // Función para manejar el clic en "No por el momento"
  const handleNoButtonClick = () => {
    // Cierra el modal
    setShowModal(false);
  };

  return (
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
      <div className=""></div>

      {/* <div className="brand">
      </div> */}
      <h1 className="title-home">{titleHome[currentWord]}</h1>

      <video autoPlay loop muted className="video-bg">
        <source src={DigitalVideo} type="video/mp4" />
        <source src={DigitalVideo} type="video/webm" />
        <source src={DigitalVideo} type="video/ogg" />
        {/* Agrega otros formatos de video para compatibilidad con diferentes navegadores */}
      </video>
      <div className="diseños-container">
        <div className="diseños-rutas1">
          <h1 className="diseños-h1">Desarrollo</h1>
          <img src={Descubrir2} className="img-desarrollo" alt="" />
        </div>
        <div className="diseños-rutas2">
          <h1 className="diseños-h1">Diseño</h1>
          <img src={Descubrir} className="img-desarrollo" alt="" />
        </div>
        <div className="diseños-rutas3">
          <h1 className="diseños-h1">Informacion</h1>
          <img src={Descubrir3} className="img-desarrollo" alt="" />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
