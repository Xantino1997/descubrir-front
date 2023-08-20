import React, { useState, useEffect } from "react";
import "./StylesPages/Header.css";
import DigitalLogo from "./assets/DIGITAL.png";
import ProfileImg from "./assets/profile.png"; // Importa aquí la imagen de perfil del usuario
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showProfileImg, setShowProfileImg] = useState(false);
  const [activeLink, setActiveLink] = useState("inicio");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [logoClickCount, setLogoClickCount] = useState(0);

  useEffect(() => {
    if (logoClickCount >= 10) {
      const timeout = setTimeout(() => {
        setLogoClickCount(0);
      }, 300000); // 5 minutos en milisegundos
      return () => clearTimeout(timeout);
    }
  }, [logoClickCount]);

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    setShowProfileImg(!showProfileImg);
  };

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleLogoClick = () => {
    setLogoClickCount(logoClickCount + 1);
  };

  return (
    <header className="header">
      <div className="logo" onClick={handleLogoClick}>
        <img src={DigitalLogo} alt="Logo de la empresa" />
      </div>
      {logoClickCount >= 10 && (
        <div className="login-popup">
          <Link to="/sign-in">Iniciar Sesión</Link>
        </div>
      )}
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
          <Link to="/sign-in"></Link>
        )}
      </div>
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        {showMobileMenu ? "Menu" : "Cerrar"}
      </div>
    </header>
  );
};

export default Header;
