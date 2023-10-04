import React, { useState } from "react";
import "./StylesPages/Footer.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Facebook from "./assets/facebook.png";
import Instagram from "./assets/instagram.png";
import WhatsApp from "./assets/whatsapp.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const currentYear = new Date().getFullYear();
  const phoneNumber = "543465650158"; // Reemplaza con el número de teléfono correcto

  const handleWhatsAppClick = () => {
    const message = "Hola, quiero saber más de este producto.";

    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      // Dispositivo móvil
      window.open(
        `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    } else {
      // Computadora de escritorio
      window.open(
        `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }
  };

  const handleSubmit = async (e) => {
    // ...el resto del código para el envío de suscripción
  };

  return (
    <>
      <footer className="footer">
        <div className="columna">
          <h3>Redes</h3>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100095504168154"
                target="_blank" // Agregamos target="_blank" para que se abra en una nueva ventana
                rel="noopener noreferrer"
              >
                <img className="redes-sociales" src={Facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <Link to="/instagram">
                <img
                  className="redes-sociales"
                  src={Instagram}
                  alt="Instagram"
                />
              </Link>
            </li>
            <li>
              <a
                href="#"
                onClick={handleWhatsAppClick}
                rel="noopener noreferrer"
              >
                <img className="redes-sociales" src={WhatsApp} alt="WhatsApp" />
               
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="columna">
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="#">Contacto 1</a>
            </li>
            <li>
              <a href="#">Contacto 2</a>
            </li>
            <li>
              <a href="#">Contacto 3</a>
            </li>
          </ul>
        </div> */}
        {/* <div className="columna">
          <h3>Empresa</h3>
          <ul>
            <li>
              <a href="#">Enlace 1</a>
            </li>
            <li>
              <a href="#">Enlace 2</a>
            </li>
            <li>
              <a href="#">Enlace 3</a>
            </li>
          </ul>
        </div> */}
        <div className="columna">
          <h3>Suscríbete al Newsletter</h3>
          <form className="form-footer" onSubmit={handleSubmit}>
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
      </footer>
      <div className="copyright">
        <Link to="/terminos">
          Descubrir Digital. Todos los derechos reservados.
        </Link>
        <p>&copy; {currentYear}</p>
      </div>
    </>
  );
};

export default Footer;