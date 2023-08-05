import React, { useState } from "react";
import "./StylesPages/Header.css";
import DigitalLogo from "./assets/DIGITAL.png";
import ProfileImg from "./assets/profile.png"; // Importa aquí la imagen de perfil del usuario
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado para controlar el inicio de sesión
  const [showProfileImg, setShowProfileImg] = useState(false); // Estado para controlar la imagen de perfil
  const [activeLink, setActiveLink] = useState("inicio"); // Estado para el enlace activo
  const [showMobileMenu, setShowMobileMenu] = useState(false); // Estado para controlar el menú hamburguesa en dispositivos móviles

  // Función para manejar el inicio de sesión y mostrar la imagen de perfil
  const handleLogin = () => {
    if (!isLoggedIn) {
      // Si no ha iniciado sesión, inicia sesión y muestra la imagen de perfil
      setIsLoggedIn(true);
      setShowProfileImg(true);
    } else {
      // Si ha iniciado sesión, cierra la sesión y oculta la imagen de perfil
      setIsLoggedIn(false);
      setShowProfileImg(false);
    }
  };

  // Función para cambiar el enlace activo
  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  // Función para mostrar u ocultar el menú hamburguesa
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={DigitalLogo} alt="Logo de la empresa" />
      </div>
      <nav className={`menu ${showMobileMenu ? "show-mobile-menu" : ""}`}>
        <ul>
          <li
            className={activeLink === "inicio" && !showMobileMenu ? "active" : ""}
            style={{ display: showMobileMenu ? "none" : "block" }}
          >
            <Link to="/" onClick={() => handleSetActiveLink("inicio")}>
              Inicio
            </Link>
          </li>
          <li
            className={activeLink === "nosotros" && !showMobileMenu ? "active" : ""}
            style={{ display: showMobileMenu ? "none" : "block" }}
          >
            <Link to="/about" onClick={() => handleSetActiveLink("nosotros")}>
              Nosotros
            </Link>
          </li>
          <li
            className={activeLink === "blog" && !showMobileMenu ? "active" : ""}
            style={{ display: showMobileMenu ? "none" : "block" }}
          >
            <Link to="/post" onClick={() => handleSetActiveLink("blog")}>
              Blog
            </Link>
          </li>
          {isLoggedIn && !showMobileMenu && (
            // Si ha iniciado sesión y no se muestra el menú hamburguesa, muestra estos enlaces adicionales
            <>
              <li className={activeLink === "crear-post" ? "active" : ""}>
                <Link
                  to="/create-post"
                  onClick={() => handleSetActiveLink("crear-post")}
                >
                  Crear Post
                </Link>
              </li>
              <li className={activeLink === "editar-perfil" ? "active" : ""}>
                <Link
                  to="/edit-profile"
                  onClick={() => handleSetActiveLink("editar-perfil")}
                >
                  Editar Perfil
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="cart-login">
        {showProfileImg && (
          // Si se muestra la imagen de perfil, muestra la imagen importada de la variable ProfileImg
          <img
            className="cart-login-img"
            src={ProfileImg}
            alt="Imagen de perfil"
          />
        )}
        {isLoggedIn ? (
          <a href="#" onClick={handleLogin}>
            Salir
          </a>
        ) : (
          <Link to="/sign-in">Iniciar Sesión</Link>
        )}
      </div>
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {showMobileMenu ? "Menu" : "Cerrar"}
      </div>
    </header>
    
  );
};

export default Header;
